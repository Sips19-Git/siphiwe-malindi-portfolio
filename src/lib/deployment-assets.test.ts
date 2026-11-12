import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const root = process.cwd();
const sourceFiles = (directory: string): string[] =>
  readdirSync(directory).flatMap(name => {
    const file = path.join(directory, name);
    return statSync(file).isDirectory() ? sourceFiles(file) : /\.(tsx?|css)$/.test(name) ? [file] : [];
  });

describe("deployment assets", () => {
  it("resolves every imported image to an actual file with exact filename casing", () => {
    const references = sourceFiles(path.join(root, "src")).flatMap(file =>
      [...readFileSync(file, "utf8").matchAll(/(?:from\s*|import\s*)["']([^"']+\.(?:jpe?g|png|gif|webp|svg|avif|ico))["']/g)]
        .map(match => ({ file, reference: match[1] })),
    );
    expect(references.length).toBeGreaterThan(0);
    for (const { file, reference } of references) {
      const target = reference.startsWith("@/")
        ? path.join(root, "src", reference.slice(2))
        : path.resolve(path.dirname(file), reference);
      expect(existsSync(target), reference).toBe(true);
      expect(readdirSync(path.dirname(target)), reference).toContain(path.basename(target));
      expect(statSync(target).size, reference).toBeGreaterThan(0);
    }
  });

  it("does not use Lovable-only asset routes or image pointers in website source", () => {
    for (const file of sourceFiles(path.join(root, "src")).filter(file => !file.endsWith(".test.ts"))) {
      expect(readFileSync(file, "utf8"), path.relative(root, file)).not.toMatch(/\/__l5e\/assets-v1\/|id-preview--|\.asset\.json/);
    }
  });

  it("ships the original About JPEG and a real locally served CV", () => {
    const photo = readFileSync(path.join(root, "src/assets/siphiwe-about-photo.jpg"));
    expect([...photo.subarray(0, 3)]).toEqual([255, 216, 255]);
    const cv = readFileSync(path.join(root, "public/Siphiwe-Malindi-CV.pdf"));
    expect(cv.subarray(0, 5).toString()).toBe("%PDF-");
  });
});