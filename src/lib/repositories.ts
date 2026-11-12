export type Repository = {
  name: string;
  title: string;
  description: string;
  language: "TypeScript" | "PHP" | "JavaScript";
  category: "Community" | "Healthcare" | "Commerce" | "Services";
  projectSlug?: string;
};

export const githubProfile = "https://github.com/Sips19-Git";
export const repositoryUrl = (repository: Repository) => `${githubProfile}/${repository.name}`;

// Public repository names, primary languages and README context verified November 2026.
export const repositories: Repository[] = [
  { name: "great-grace-gathering", title: "Great Grace Church", description: "A church website focused on sermons, events, ministry information and community engagement.", language: "TypeScript", category: "Community" },
  { name: "dr.-mpshe-health-hub", title: "Dr. Mpshe Health Hub", description: "A general practitioner website presenting medical services, practice information and patient contact details.", language: "TypeScript", category: "Healthcare" },
  { name: "e-PeakPerformanceStore256", title: "Peak Performance Store", description: "A sports-product e-commerce project with product browsing, customer accounts, cart, checkout and repair booking.", language: "PHP", category: "Commerce", projectSlug: "e-commerce-website" },
  { name: "Marketplace-Students-", title: "MyVossie Marketplace", description: "A campus marketplace prototype with buyer, seller and courier interfaces, product listings and order handover flows.", language: "JavaScript", category: "Commerce", projectSlug: "eduvos-marketplace" },
  { name: "visa-insight-hub", title: "Visa Support HB", description: "A visa-support website project presenting service information and a visitor-facing digital experience.", language: "TypeScript", category: "Services" },
  { name: "anita-movement-and-recovery", title: "Anita’s Healing Space", description: "A physiotherapy website centred on treatment information, rehabilitation, recovery and practice contact details.", language: "TypeScript", category: "Healthcare" },
];

export const repositoryCategories = ["All", "Community", "Healthcare", "Commerce", "Services"] as const;
export type RepositoryCategory = typeof repositoryCategories[number];
export const filterRepositories = (category: RepositoryCategory) => repositories.filter(repository => category === "All" || repository.category === category);