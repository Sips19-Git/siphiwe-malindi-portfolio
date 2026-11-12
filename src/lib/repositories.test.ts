import { describe, expect, it } from "vitest";
import { filterRepositories, repositories, repositoryUrl, githubProfile } from "./repositories";
import { getProject, profile } from "./portfolio";

describe("Siphiwe's public repositories", () => {
  it("uses the supplied GitHub account for all six repositories", () => {
    expect(githubProfile).toBe("https://github.com/Sips19-Git");
    expect(repositories.map(item => repositoryUrl(item))).toEqual([
      "https://github.com/Sips19-Git/great-grace-gathering",
      "https://github.com/Sips19-Git/dr.-mpshe-health-hub",
      "https://github.com/Sips19-Git/e-PeakPerformanceStore256",
      "https://github.com/Sips19-Git/Marketplace-Students-",
      "https://github.com/Sips19-Git/visa-insight-hub",
      "https://github.com/Sips19-Git/anita-movement-and-recovery",
    ]);
  });
  it("filters without dropping the full repository list", () => {
    expect(filterRepositories("All")).toHaveLength(6);
    expect(filterRepositories("Healthcare").map(item => item.name)).toEqual(["dr.-mpshe-health-hub", "anita-movement-and-recovery"]);
    expect(filterRepositories("Commerce").map(item => item.name)).toEqual(["e-PeakPerformanceStore256", "Marketplace-Students-"]);
    expect(filterRepositories("Community")).toHaveLength(1);
    expect(filterRepositories("Services")).toHaveLength(1);
  });
  it("links only to existing case studies", () => {
    for (const repository of repositories.filter(item => item.projectSlug)) expect(getProject(repository.projectSlug)).toBeDefined();
  });
});

describe("Supplied CV facts", () => {
  it("keeps the expected completion date from the supplied CV", () => {
    expect(profile.expectedCompletion).toBe("June 2027");
    expect(profile.status).toBe("Final-year student");
  });
});