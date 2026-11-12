# Architecture rules
- Keep professional facts and project records in shared typed data modules so overview, detail pages and CV content remain aligned.
- Use dedicated project routes with stable slugs and shared project records so each project can be linked directly.
- Contact submission opens an email draft; never imply a message was delivered without an actual delivery service.
- Keep verified public repository metadata in a typed shared module and link case studies by project slug; this keeps filters and project source links aligned without runtime GitHub API limits.
- Keep deployment media in the repository: import section images from src/assets and serve the supplied CV and preloaded hero image from public using Vite's base URL, so external hosting does not depend on Lovable-only asset routes.
- Preload the optimized hero photo in the document head and mark only that image high priority so its request starts before the application renders.
- Scope section typography through a post-hero content wrapper and a semantic font token, with locally bundled licensed fonts, so hero and navigation typography stay independent.
- Keep nested layout columns shrinkable and use a collapsible navigation below wide desktop sizes so content remains readable on phones, tablets, and zoomed screens.