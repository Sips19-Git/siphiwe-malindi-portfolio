import cvAsset from "@/assets/Siphiwe-Malindi-CV.pdf.asset.json";

export const profile = {
  name: "Siphiwe Malindi",
  direction: "Aspiring Business Systems Analyst",
  secondaryDirection: "Junior Business Analyst",
  qualification: "BSc Information Technology – Software Engineering",
  institution: "Eduvos",
  status: "Final-year student",
  expectedCompletion: "June 2027",
  cvUrl: cvAsset.url,
  email: "smalindi19@gmail.com",
  phone: "+27 60 974 1314",
  location: "South Africa",
};

export const deliveryStages = [
  { title: "Understand the need", description: "Gather client objectives, clarify organisational needs and communicate expectations before development." },
  { title: "Define the requirements", description: "Document user stories, functional requirements and system specifications to connect business needs with technical decisions." },
  { title: "Shape the solution", description: "Use system design, user flows and team collaboration to translate agreed requirements into a working solution." },
  { title: "Validate & refine", description: "Test features against requirements, resolve issues, retest and incorporate client feedback before handover." },
];

export const analysisSkills = [
  { title: "Requirements & specifications", skills: ["Requirements Elicitation, Analysis and Documentation", "User Stories and Functional Requirements", "Functional and Non-Functional Specifications", "Requirements Validation and Management"] },
  { title: "Processes & systems", skills: ["Business Process Analysis and Workflow Modelling", "Use Case Development and System Modelling", "Process Improvement and Optimisation"] },
  { title: "Stakeholders & delivery", skills: ["Stakeholder Engagement and Communication", "Client Relationship and Expectation Management", "Agile Methodologies (Academic and Project Exposure)"] },
];

export const technicalSkills = [
  { title: "Programming", skills: ["Java", "C++", "PHP", "JavaScript"] },
  { title: "Web technologies", skills: ["HTML", "CSS"] },
  { title: "Databases", skills: ["MySQL", "MongoDB"] },
  { title: "System modelling & analysis", skills: ["Requirements Analysis", "UML Diagrams", "Use Case Diagrams", "Data Flow Diagrams (DFDs)", "Entity Relationship Diagrams (ERDs)"] },
];

export const interpersonalSkills = ["Leadership", "Public Speaking and Presentation", "Problem-Solving", "Strategic Thinking", "Collaboration and Teamwork", "Adaptability", "Time Management", "Critical Thinking"];
export const activities = [
  { role: "Chairperson", organisation: "Debate Club", focus: "Leadership, public speaking and critical thinking" },
  { role: "Member", organisation: "Acapella Club", focus: "Collaboration, confidence and communication" },
  { role: "Member", organisation: "Chess Club", focus: "Strategic thinking and problem-solving" },
  { role: "Master of Ceremonies", organisation: "Mr and Miss Eduvos", focus: "Presentation, confidence and audience communication" },
];

export type Project = {
  slug: string; title: string; subtitle: string; role: string; description: string;
  problem: string; objectives: string[]; contributions: string[]; skills: string[];
  flow: string[]; technologies?: string[];
};

export const projects: Project[] = [
  {
    slug: "eduvos-marketplace", title: "Eduvos Marketplace", subtitle: "Campus Marketplace Platform", role: "Business Analyst (Team Project)",
    description: "A campus marketplace platform designed to connect student entrepreneurs with potential customers within the Eduvos community.",
    problem: "Student entrepreneurs need a way to connect with potential customers within the Eduvos community.",
    objectives: ["Connect student entrepreneurs and potential customers through a campus marketplace.", "Align the development team's implementation with documented business and user requirements."],
    contributions: ["Acted as Business Analyst within a team, eliciting and documenting user stories, functional requirements and system design specifications.", "Translated business requirements into technical specifications for the development team and ensured alignment between requirements and delivered features.", "Coordinated documentation and project files.", "Facilitated team meetings and supported communication between team members."],
    skills: ["Requirements Elicitation", "User Stories", "Business Analysis", "Functional Specifications", "Team Collaboration", "Stakeholder Communication", "System Design"],
    flow: ["Student needs", "User stories", "System specifications"],
  },
  {
    slug: "e-commerce-website", title: "E-Commerce Website", subtitle: "Online Shopping Platform", role: "System Design and Web Development",
    description: "An online shopping platform designed to support essential e-commerce functionality.",
    problem: "An online store needs coherent product browsing, shopping cart and checkout flows to support essential shopping functionality.",
    objectives: ["Define requirements for a product catalogue, shopping cart and checkout.", "Translate system design and user flows into a working web application and validate its core functionality."],
    contributions: ["Defined the functional requirements and system design for an online store, covering product catalogue, shopping cart and checkout flows.", "Designed the user interface and user flows.", "Translated the design into a working web application.", "Tested core features against requirements and resolved identified issues."],
    skills: ["Requirements Definition", "System Design", "User Flow Design", "Functional Testing", "Solution Implementation"],
    flow: ["Product catalogue", "Shopping cart", "Checkout"],
  },
  {
    slug: "uniconnect-live-chat", title: "UniConnect Live Chat", subtitle: "Real-Time Communication Platform", role: "Requirements Analysis and System Design",
    description: "An authenticated messaging platform designed to enable real-time communication between users.",
    problem: "Users need an authenticated platform for real-time communication, with features that work accurately against defined requirements.",
    objectives: ["Define requirements and system design for authenticated real-time messaging.", "Document the solution and test authentication, messaging and camera features for accuracy."],
    contributions: ["Defined functional requirements and system design for an authenticated messaging platform.", "Collaborated on architecture decisions.", "Produced documentation for the solution.", "Tested authentication, messaging and camera features for accuracy.", "Identified and resolved issues promptly."],
    skills: ["Requirements Analysis", "System Architecture", "Technical Documentation", "Functional Testing", "Problem-Solving"],
    flow: ["Authentication", "Messaging", "Feature validation"],
  },
  {
    slug: "freelance-websites", title: "Freelance Website Development", subtitle: "Client-Focused Website Projects", role: "Freelance Web Developer",
    description: "A collection of websites developed for different clients, including personal portfolios, church websites and business websites.",
    problem: "Different clients need websites that reflect their objectives and organisational needs, with agreed requirements guiding delivery.",
    objectives: ["Translate client objectives into website requirements and a suitable solution.", "Maintain communication, incorporate feedback and validate functionality before delivery."],
    contributions: ["Understood client objectives and translated them into website requirements.", "Communicated with clients throughout the development process.", "Gathered feedback and implemented requested improvements.", "Tested functionality against agreed requirements before delivery."],
    skills: ["Client Engagement", "Requirements Gathering", "Solution Design", "Requirements Validation", "Project Coordination"],
    flow: ["Client objectives", "Agreed requirements", "Validated delivery"],
  },
];

export const getProject = (slug: string | undefined) => projects.find((project) => project.slug === slug);

export const createContactDraft = (name: string, email: string, subject: string, message: string) =>
  `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`)}`;