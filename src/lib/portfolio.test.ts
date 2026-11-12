import { describe, expect, it } from "vitest";
import { createContactDraft, getProject, projects } from "./portfolio";

describe("Project navigation", () => {
  it("resolves each of the four project links to its own record", () => {
    expect(projects).toHaveLength(4);
    expect(new Set(projects.map(project => project.slug)).size).toBe(4);
    for (const project of projects) expect(getProject(project.slug)).toBe(project);
  });
  it("does not resolve an unknown project", () => {
    expect(getProject("unknown-project")).toBeUndefined();
  });
});

describe("Contact email draft", () => {
  it("addresses the preserved contact email and retains user input", () => {
    const draft = createContactDraft("Recruiter", "recruiter@example.com", "BA opportunity & interview", "Hello Siphiwe,\nLet's connect.");
    const url = new URL(draft);
    expect(url.pathname).toBe("smalindi19@gmail.com");
    expect(url.searchParams.get("subject")).toBe("BA opportunity & interview");
    expect(url.searchParams.get("body")).toBe("Hello Siphiwe,\nLet's connect.\n\nFrom: Recruiter\nEmail: recruiter@example.com");
  });
});