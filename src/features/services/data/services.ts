// data/services.ts

export type ServiceCategory = "build" | "grow" | "design";

export type ServiceCard = {
  title: string;
  description: string;
};

export type ServiceProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type ServiceFAQ = {
  question: string;
  answer: string;
};

export type ServiceDetailedSection = {
  title: string;
  description?: string;
  items: {
    title: string;
    description: string;
  }[];
};

export type ServiceTerm = {
  term: string;
  definition: string;
};

export type RelatedService = {
  slug: string;
  title: string;
  description: string;
};

export type Service = {
  slug: string;

  name: string;

  navTitle: string;

  category: ServiceCategory;

  shortDescription: string;

  hero: {
    eyebrow: string;
    heading: string;
    highlightedText?: string;
    description: string;
    primaryCta: string;
    secondaryCta?: string;
  };

  overview: {
    eyebrow: string;
    heading: string;
    description: string;
  };

  whatWeBuild: {
    heading: string;
    description: string;
    items: ServiceCard[];
  };

  process: {
    eyebrow: string;
    heading: string;
    description: string;
    steps: ServiceProcessStep[];
  };

  tools?: {
    eyebrow: string;
    heading: string;
    description: string;
    groups: {
      title: string;
      items: string[];
    }[];
  };

  deepDive?: ServiceDetailedSection[];

  commonProblems?: {
    eyebrow: string;
    heading: string;
    description: string;
    items: ServiceCard[];
  };

  terminology?: {
    eyebrow: string;
    heading: string;
    description: string;
    terms: ServiceTerm[];
  };

  idealFor?: {
    eyebrow: string;
    heading: string;
    items: string[];
  };

  faqs: ServiceFAQ[];

  relatedServices: RelatedService[];

  cta: {
    eyebrow: string;
    heading: string;
    description: string;
    primaryCta: string;
  };

  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
};

export const services: Service[] = [
  // =========================================================
  // WEBSITE DEVELOPMENT
  // =========================================================

  {
    slug: "website-development",

    name: "Website Development",

    navTitle: "Website Development",

    category: "build",

    shortDescription:
      "Custom business websites built around clarity, performance, search visibility, and conversion.",

    hero: {
      eyebrow: "Website Development",
      heading: "Websites built around how your business actually works.",
      highlightedText: "Not around a template.",
      description:
        "We design and develop custom websites for businesses that need more than a polished homepage. The structure, content, performance, search foundations, and conversion paths are shaped around what customers need to understand and what your business needs them to do next.",
      primaryCta: "Discuss your website",
      secondaryCta: "See our work",
    },

    overview: {
      eyebrow: "A website with a job to do",
      heading:
        "Your website should explain the business, earn trust, and move visitors toward a meaningful action.",
      description:
        "A business website is often where a prospective customer decides whether to keep exploring or leave. We approach websites as working business assets: the information architecture has to make sense, the content has to communicate clearly, the experience has to work across devices, and the technical implementation has to support performance and search visibility.",
    },

    whatWeBuild: {
      heading: "What we build",
      description:
        "The right website depends on the business model, audience, content, and action you want visitors to take.",
      items: [
        {
          title: "Business Websites",
          description:
            "Professional websites for companies and service businesses that need a clear, credible digital presence.",
        },
        {
          title: "Marketing Websites",
          description:
            "Conversion-focused websites structured around offers, campaigns, lead generation, and measurable customer journeys.",
        },
        {
          title: "Landing Pages",
          description:
            "Focused pages designed around a specific service, product, campaign, or conversion objective.",
        },
        {
          title: "Corporate Websites",
          description:
            "Structured multi-page websites for businesses that need to communicate services, capabilities, markets, and company information.",
        },
        {
          title: "Booking & Lead Platforms",
          description:
            "Web experiences that connect service discovery with bookings, enquiries, qualification, or other operational workflows.",
        },
        {
          title: "Website Rebuilds",
          description:
            "Reworking outdated websites when the existing structure, implementation, or messaging no longer reflects the business.",
        },
      ],
    },

    process: {
      eyebrow: "Our website development process",
      heading:
        "The design comes after we understand what the website needs to accomplish.",
      description:
        "We move from business context to structure, then design and implementation. That keeps the website grounded in the problem rather than starting from visual preferences alone.",
      steps: [
        {
          number: "01",
          title: "Discovery",
          description:
            "We understand the business, audience, current website, competitors, offers, conversion goals, content requirements, and technical constraints.",
        },
        {
          number: "02",
          title: "Information Architecture",
          description:
            "We decide what pages are needed, how information should be grouped, and how visitors should move through the website.",
        },
        {
          number: "03",
          title: "Content Direction",
          description:
            "We define what each page needs to communicate so design supports the message instead of forcing content into a pre-built layout.",
        },
        {
          number: "04",
          title: "UI/UX Design",
          description:
            "We create the visual system, page hierarchy, responsive behavior, interaction patterns, and reusable design components.",
        },
        {
          number: "05",
          title: "Development",
          description:
            "The approved experience is implemented with reusable components, responsive layouts, semantic structure, and production-focused engineering.",
        },
        {
          number: "06",
          title: "SEO & Performance Setup",
          description:
            "We implement technical SEO fundamentals, metadata, page structure, image optimization, crawlability, and performance improvements.",
        },
        {
          number: "07",
          title: "Testing & Launch",
          description:
            "We test layouts, interactions, links, forms, metadata, responsiveness, and production behavior before deployment.",
        },
      ],
    },

    tools: {
      eyebrow: "Technology behind the work",
      heading:
        "A modern stack chosen for maintainability, performance, and production use.",
      description:
        "Technology is selected based on the requirements of the project rather than used as the starting point.",
      groups: [
        {
          title: "Frontend",
          items: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "shadcn/ui",
          ],
        },
        {
          title: "Backend",
          items: ["Node.js", "REST APIs", "NestJS", "Pyhton", "ExpressJS"],
        },
        {
          title: "Database",
          items: [
            "MongoDB",
            "PostgreSQL",
            "SQL",
            "Redis",
            "Supabase",
            "Firebase",
          ],
        },
        {
          title: "Cloud & Tools",
          items: [
            "Vercel",
            "Docker",
            "AWS",
            "GitHub Actions",
            "Stripe",
            "Google Developer Console",
          ],
        },
        {
          title: "Analytics & Growth",
          items: [
            "Google Analytics",
            "Google Search Console",
            "Microsoft Clarity",
            "HubSpot",
          ],
        },
      ],
    },

    deepDive: [
      {
        title: "How a business website gets built properly",
        description:
          "Strong websites are usually the result of several connected decisions rather than one design phase.",
        items: [
          {
            title: "Start with the customer journey",
            description:
              "Before deciding how a page should look, we identify what brought the visitor there, what they need to understand, and what action makes sense next.",
          },
          {
            title: "Build information hierarchy before visual hierarchy",
            description:
              "The order of information matters. Visitors should not have to decode the business before they can evaluate it.",
          },
          {
            title: "Make responsive behavior intentional",
            description:
              "Mobile is not a compressed desktop layout. Navigation, spacing, content priority, interactions, and calls to action need to work naturally on smaller screens.",
          },
          {
            title: "Treat performance as part of the experience",
            description:
              "Heavy scripts, oversized assets, unnecessary client-side rendering, and poor loading behavior affect both users and search performance.",
          },
          {
            title: "Build search foundations into the implementation",
            description:
              "Semantic HTML, metadata, crawlability, internal links, heading hierarchy, structured content, and performance are considered during development.",
          },
          {
            title: "Give every important page a purpose",
            description:
              "Pages should answer a specific search, evaluation, or conversion need rather than exist because competitors have them.",
          },
        ],
      },
    ],

    commonProblems: {
      eyebrow: "What usually goes wrong",
      heading:
        "Most weak websites fail before visual design becomes the real problem.",
      description:
        "Common website problems usually come from poor structure, unclear messaging, weak implementation, or treating the site as decoration.",
      items: [
        {
          title: "The website looks good but says very little",
          description:
            "Large headlines and animations cannot replace clear explanations of what the business offers and why someone should care.",
        },
        {
          title: "Every page competes for attention",
          description:
            "When every section uses the same visual weight, visitors cannot tell what matters or what action they should take.",
        },
        {
          title: "Mobile was treated as an afterthought",
          description:
            "Desktop layouts are squeezed into smaller screens instead of being intentionally adapted for mobile use.",
        },
        {
          title: "SEO begins after development",
          description:
            "Technical SEO works better when page structure, metadata, content hierarchy, and performance are considered from the beginning.",
        },
        {
          title: "The site becomes difficult to maintain",
          description:
            "Hardcoded content and duplicated components make simple business updates unnecessarily expensive.",
        },
        {
          title: "There is no meaningful conversion path",
          description:
            "Visitors learn about the company but are not clearly guided toward contacting, booking, purchasing, or taking the next action.",
        },
      ],
    },

    terminology: {
      eyebrow: "Web terms, in plain English",
      heading:
        "The technical language behind a website should not make the project harder to understand.",
      description:
        "These are some of the concepts that commonly come up during website projects.",
      terms: [
        {
          term: "Responsive Design",
          definition:
            "A website layout that adapts to different screen sizes rather than using one fixed desktop layout.",
        },
        {
          term: "CMS",
          definition:
            "A content management system that allows website content to be updated without editing application code.",
        },
        {
          term: "Core Web Vitals",
          definition:
            "Google's measurements for loading performance, responsiveness, and visual stability.",
        },
        {
          term: "Server-Side Rendering",
          definition:
            "Generating page content on the server before sending it to the browser, which can improve loading behavior and search visibility.",
        },
        {
          term: "Metadata",
          definition:
            "Page information such as titles and descriptions that helps search engines and social platforms understand a page.",
        },
        {
          term: "Conversion",
          definition:
            "A meaningful action taken by a visitor, such as submitting an enquiry, booking a call, requesting a quote, or purchasing.",
        },
      ],
    },

    idealFor: {
      eyebrow: "When this service makes sense",
      heading:
        "Website development is a good fit when the current digital experience is limiting the business.",
      items: [
        "Your current website no longer reflects your services or positioning.",
        "You are launching a new company, service, or offer.",
        "Your website generates traffic but few meaningful enquiries.",
        "Your current site is difficult to maintain or extend.",
        "Performance, responsiveness, or SEO foundations need improvement.",
        "You need custom workflows such as bookings, lead qualification, or integrations.",
      ],
    },

    faqs: [
      {
        question: "Do you redesign existing websites?",
        answer:
          "Yes. We can improve an existing website when its technical foundation is still useful, or recommend a rebuild when the current architecture creates unnecessary constraints.",
      },
      {
        question: "How long does a website project take?",
        answer:
          "The timeline depends on page count, content, design complexity, integrations, custom functionality, and the review process. We define the scope and delivery timeline before development begins.",
      },
      {
        question: "Will the website be mobile responsive?",
        answer:
          "Yes. Responsive behavior is part of the implementation rather than an optional final step.",
      },
      {
        question: "Do you handle SEO?",
        answer:
          "Website projects include technical SEO foundations such as metadata, semantic structure, crawlability, performance, and page hierarchy. Broader ongoing SEO can be scoped separately.",
      },
      {
        question: "Can I update the website after launch?",
        answer:
          "Yes. Depending on the project, content can be connected to a CMS or managed through an admin interface so common updates do not require a code deployment.",
      },
      {
        question: "Do you provide hosting and deployment?",
        answer:
          "We can configure deployment and production infrastructure appropriate to the project and provide handover details after launch.",
      },
      {
        question: "Can you integrate forms, CRM tools, or booking systems?",
        answer:
          "Yes. We can integrate third-party services or build custom workflows when the business requires more control.",
      },
    ],

    relatedServices: [
      {
        slug: "ui-ux-design",
        title: "UI/UX Design",
        description:
          "Plan and design the structure, interfaces, and user journeys behind the website.",
      },
      {
        slug: "seo",
        title: "SEO Services",
        description:
          "Improve the technical and content foundations that support organic search visibility.",
      },
      {
        slug: "digital-marketing",
        title: "Digital Marketing",
        description:
          "Bring qualified traffic to the website through connected digital campaigns.",
      },
    ],

    cta: {
      eyebrow: "Planning a website?",
      heading: "Tell us what your current website is not doing well enough.",
      description:
        "Share the current site, the business goals, and what you want customers to be able to understand or do more easily.",
      primaryCta: "Discuss your website",
    },

    seo: {
      title: "Website Development Services | Codemaven Solutions",
      description:
        "Custom website development for businesses needing better performance, responsive design, SEO foundations, clear messaging, and stronger conversion paths.",
      keywords: [
        "website development",
        "custom website development",
        "business website development",
        "Next.js development",
        "responsive website development",
        "web development company",
      ],
    },
  },

  // =========================================================
  // MOBILE APP DEVELOPMENT
  // =========================================================

  {
    slug: "mobile-app-development",

    name: "Mobile App Development",

    navTitle: "Mobile App Development",

    category: "build",

    shortDescription:
      "Mobile applications designed around real customer and business workflows.",

    hero: {
      eyebrow: "Mobile App Development",
      heading:
        "Mobile applications designed around what people actually need to do.",
      highlightedText: "Not around a feature checklist.",
      description:
        "We design and build mobile applications that connect user experience, business logic, data, authentication, notifications, and operational workflows into one reliable product.",
      primaryCta: "Discuss your app",
      secondaryCta: "See our work",
    },

    overview: {
      eyebrow: "From idea to working product",
      heading:
        "A useful mobile app is a connected system, not a collection of screens.",
      description:
        "Successful mobile products need more than an attractive interface. Authentication, data synchronization, backend services, notifications, permissions, error handling, analytics, and business rules all need to work together.",
    },

    whatWeBuild: {
      heading: "What we build",
      description:
        "We work on customer-facing and internal mobile products where mobile access creates meaningful value.",
      items: [
        {
          title: "Business Applications",
          description:
            "Mobile products built around customer services, operations, communication, or internal business workflows.",
        },
        {
          title: "Consumer Applications",
          description:
            "User-facing applications designed around onboarding, engagement, repeat usage, and reliable product experiences.",
        },
        {
          title: "MVP Applications",
          description:
            "Focused first versions built to validate product assumptions before investing in a larger feature set.",
        },
        {
          title: "Booking & Service Apps",
          description:
            "Applications for appointments, service selection, scheduling, payments, notifications, and customer management.",
        },
        {
          title: "Internal Operations Apps",
          description:
            "Mobile tools for teams that need access to workflows, data, approvals, or operational tasks away from a desktop.",
        },
        {
          title: "Existing App Improvements",
          description:
            "Improving usability, architecture, performance, reliability, or functionality in existing applications.",
        },
      ],
    },

    process: {
      eyebrow: "Our mobile development process",
      heading:
        "We define the product flow before deciding how every screen should look.",
      description:
        "The process moves from product requirements and user journeys into architecture, interface design, development, testing, and release.",
      steps: [
        {
          number: "01",
          title: "Product Discovery",
          description:
            "We clarify the user, problem, business model, required workflows, device capabilities, integrations, and first-release priorities.",
        },
        {
          number: "02",
          title: "User Flows",
          description:
            "We map the primary actions users need to complete and identify where authentication, permissions, backend operations, or external services are involved.",
        },
        {
          number: "03",
          title: "Architecture",
          description:
            "We define how the application, APIs, database, authentication, notifications, and external integrations work together.",
        },
        {
          number: "04",
          title: "UI/UX Design",
          description:
            "The interface is designed around mobile interaction patterns, navigation, accessibility, feedback states, and real device constraints.",
        },
        {
          number: "05",
          title: "Development",
          description:
            "Features are implemented incrementally with reusable components, application state, backend communication, and error handling.",
        },
        {
          number: "06",
          title: "Testing",
          description:
            "We test application flows, validation, device behavior, loading states, failures, responsiveness, and important edge cases.",
        },
        {
          number: "07",
          title: "Release Preparation",
          description:
            "We prepare production environments, configuration, build settings, and the release process required for distribution.",
        },
      ],
    },

    tools: {
      eyebrow: "Technology behind the product",
      heading:
        "Mobile technology selected around the product and its operational requirements.",
      description:
        "The exact stack depends on the application, backend requirements, integrations, and deployment model.",
      groups: [
        {
          title: "Mobile",
          items: ["Flutter", "Dart"],
        },
        {
          title: "Backend",
          items: ["Firebase", "Node.js", "PostgreSQL", "REST APIs", "MongoDB"],
        },
        {
          title: "Application Services",
          items: [
            "Authentication",
            "Push Notifications",
            "Cloud Storage",
            "Analytics",
          ],
        },
      ],
    },

    deepDive: [
      {
        title: "What makes mobile product development different",
        items: [
          {
            title: "Users expect immediate feedback",
            description:
              "Loading, success, error, offline, permission, and empty states all influence whether an application feels reliable.",
          },
          {
            title: "Backend behavior affects the interface",
            description:
              "Authentication, synchronization, permissions, API reliability, and business rules need to be considered while designing the product.",
          },
          {
            title: "Mobile navigation needs discipline",
            description:
              "Small screens punish unclear information architecture. Primary actions and navigation need to remain predictable.",
          },
          {
            title:
              "Device capabilities create both opportunities and constraints",
            description:
              "Notifications, camera access, location, storage, and background behavior must be used intentionally and with appropriate permissions.",
          },
        ],
      },
    ],

    commonProblems: {
      eyebrow: "What usually goes wrong",
      heading: "Many app problems start before development begins.",
      description:
        "Weak product scope, unclear flows, and architecture decisions often create more risk than the choice of framework.",
      items: [
        {
          title: "Too many features in the first release",
          description:
            "Large MVPs increase development time while making it harder to learn which functionality users actually value.",
        },
        {
          title: "Screens are designed without backend constraints",
          description:
            "Interfaces can look complete while ignoring permissions, loading behavior, data relationships, and failure states.",
        },
        {
          title: "No plan for poor connectivity",
          description:
            "Mobile users do not always have stable connections, so application behavior should account for delays and failures.",
        },
        {
          title: "Notifications are used without strategy",
          description:
            "Push notifications can improve engagement or quickly become noise if they are not tied to meaningful events.",
        },
      ],
    },

    terminology: {
      eyebrow: "Mobile terms, in plain English",
      heading:
        "Common product and engineering concepts explained without unnecessary complexity.",
      description:
        "Understanding the terminology makes product discussions much easier.",
      terms: [
        {
          term: "Native App",
          definition:
            "An application built specifically for one operating system such as iOS or Android.",
        },
        {
          term: "Cross-Platform App",
          definition:
            "An application built from a shared codebase that can run on multiple mobile platforms.",
        },
        {
          term: "Push Notification",
          definition:
            "A message delivered to a user's device even when the application is not currently open.",
        },
        {
          term: "API",
          definition:
            "The interface that allows the mobile application to communicate with backend systems and external services.",
        },
        {
          term: "App State",
          definition:
            "The information the application needs to remember while a user interacts with it.",
        },
        {
          term: "MVP",
          definition:
            "A focused first version designed to test the core product assumption with real users.",
        },
      ],
    },

    idealFor: {
      eyebrow: "When a mobile app makes sense",
      heading:
        "A mobile application is useful when mobile access creates a meaningful product advantage.",
      items: [
        "Customers repeatedly interact with your service.",
        "Push notifications are important to the experience.",
        "Your workflow benefits from camera, location, or other device capabilities.",
        "Employees need access to operational workflows while away from a desktop.",
        "You are validating a mobile-first product idea.",
        "Your existing application needs architectural or UX improvements.",
      ],
    },

    faqs: [
      {
        question: "Can you build applications for both iOS and Android?",
        answer:
          "Yes. We can use a cross-platform approach where appropriate so both platforms share a maintainable application codebase.",
      },
      {
        question: "Can you build the backend as well?",
        answer:
          "Yes. Mobile applications often require authentication, APIs, databases, storage, notifications, and business logic, which can be included in the project scope.",
      },
      {
        question: "Can you build an MVP first?",
        answer:
          "Yes. For new products, a focused first release is often the most practical approach because it lets you validate the core workflow before expanding functionality.",
      },
      {
        question: "Do you work with existing mobile apps?",
        answer:
          "Yes. We can review an existing app and scope improvements around architecture, performance, UI/UX, functionality, or backend integration.",
      },
      {
        question: "Do you handle notifications and authentication?",
        answer:
          "Yes. Authentication, user roles, push notifications, and related application services can be included when required.",
      },
    ],

    relatedServices: [
      {
        slug: "ui-ux-design",
        title: "UI/UX Design",
        description:
          "Design user flows and mobile interfaces around the product's core actions.",
      },
      {
        slug: "saas-development",
        title: "SaaS Development",
        description:
          "Build the backend platforms, dashboards, and systems that mobile products often depend on.",
      },
      {
        slug: "ai-automation",
        title: "AI & Automation",
        description:
          "Add AI-driven workflows or intelligent product capabilities where they create real value.",
      },
    ],

    cta: {
      eyebrow: "Planning a mobile product?",
      heading:
        "Start with what users need to accomplish, not how many features you can list.",
      description:
        "Tell us who the application is for, what problem it solves, and what the first useful version needs to make possible.",
      primaryCta: "Discuss your app",
    },

    seo: {
      title: "Mobile App Development Services | Codemaven Solutions",
      description:
        "Custom mobile app development for business applications, MVPs, customer products, booking platforms, and connected digital workflows.",
      keywords: [
        "mobile app development",
        "Flutter development",
        "custom mobile applications",
        "iOS Android app development",
        "mobile app company",
      ],
    },
  },

  // =========================================================
  // SAAS DEVELOPMENT
  // =========================================================

  {
    slug: "saas-development",

    name: "SaaS Development",

    navTitle: "SaaS Development",

    category: "build",

    shortDescription:
      "SaaS products designed from MVP architecture through scalable production systems.",

    hero: {
      eyebrow: "SaaS Development",
      heading: "Turn a software idea into a product people can actually use.",
      highlightedText: "Then give it room to grow.",
      description:
        "We design and develop SaaS products around real users, workflows, business rules, permissions, subscriptions, integrations, and operational requirements — from the first useful version to a production-ready platform.",
      primaryCta: "Discuss your SaaS product",
      secondaryCta: "See our work",
    },

    overview: {
      eyebrow: "From product idea to working system",
      heading:
        "A SaaS product is not just an interface connected to a database.",
      description:
        "Authentication, organizations, permissions, billing, notifications, background work, data models, integrations, observability, and product workflows all influence the architecture. We design these parts as one system instead of adding them independently as the product grows.",
    },

    whatWeBuild: {
      heading: "What we build",
      description:
        "We work on SaaS products at different stages, from focused MVPs to more complete business platforms.",
      items: [
        {
          title: "SaaS MVPs",
          description:
            "Focused first releases built around the smallest useful workflow that can validate the product idea.",
        },
        {
          title: "Multi-Tenant Platforms",
          description:
            "Applications supporting multiple organizations, teams, permissions, data boundaries, and account-level configuration.",
        },
        {
          title: "Subscription Products",
          description:
            "SaaS platforms with plans, billing, entitlements, trials, and subscription lifecycle management.",
        },
        {
          title: "Customer Portals",
          description:
            "Secure customer-facing platforms for account management, service access, documents, communication, or workflows.",
        },
        {
          title: "Internal SaaS Tools",
          description:
            "Business systems that replace spreadsheets, fragmented processes, or repetitive internal coordination.",
        },
        {
          title: "Existing Product Development",
          description:
            "Adding features, improving architecture, redesigning workflows, or strengthening production systems in existing SaaS applications.",
        },
      ],
    },

    process: {
      eyebrow: "Our SaaS development process",
      heading:
        "We reduce uncertainty before increasing the size of the product.",
      description:
        "A strong SaaS process separates essential product behavior from features that can wait.",
      steps: [
        {
          number: "01",
          title: "Problem & User Definition",
          description:
            "We clarify who uses the product, what problem they are solving, and what the successful core workflow looks like.",
        },
        {
          number: "02",
          title: "MVP Scope",
          description:
            "We separate essential functionality from later-stage features to keep the first release focused.",
        },
        {
          number: "03",
          title: "System Design",
          description:
            "We define the data model, authentication, roles, organizations, integrations, APIs, background work, and deployment architecture.",
        },
        {
          number: "04",
          title: "Product Design",
          description:
            "User flows and interfaces are designed around the actual workflows rather than around isolated screens.",
        },
        {
          number: "05",
          title: "Incremental Development",
          description:
            "The product is developed by functional areas so complete workflows can be reviewed progressively.",
        },
        {
          number: "06",
          title: "Testing & Hardening",
          description:
            "We validate permissions, failure states, important business rules, integrations, performance, and production behavior.",
        },
        {
          number: "07",
          title: "Deployment & Iteration",
          description:
            "The product is deployed with a foundation for observing usage, collecting feedback, and planning the next iteration.",
        },
      ],
    },

    tools: {
      eyebrow: "SaaS technology stack",
      heading:
        "Production-focused tools for building maintainable software products.",
      description:
        "The stack depends on the product, but these are common technologies in our SaaS work.",
      groups: [
        {
          title: "Frontend",
          items: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "shadcn/ui",
          ],
        },
        {
          title: "Backend",
          items: ["Node.js", "NestJS", "REST APIs", "Background Jobs"],
        },
        {
          title: "Data",
          items: ["PostgreSQL", "Prisma", "Firebase", "MongoDB", "SQL"],
        },
        {
          title: "Infrastructure",
          items: ["Docker", "Vercel", "Cloud Platforms", "CI/CD"],
        },
        {
          title: "Integrations",
          items: ["Stripe", "Email", "Webhooks", "Third-Party APIs"],
        },
      ],
    },

    deepDive: [
      {
        title: "What makes SaaS architecture different",
        items: [
          {
            title: "The product has to understand ownership",
            description:
              "Users, organizations, teams, resources, permissions, and billing relationships need clear boundaries.",
          },
          {
            title: "Permissions are part of the product model",
            description:
              "Role-based access should not be scattered across UI conditions. It needs a consistent backend authorization model.",
          },
          {
            title: "Billing affects product behavior",
            description:
              "Plans, subscriptions, trials, limits, entitlements, cancellations, and failed payments often change what users can access.",
          },
          {
            title: "Background work needs reliability",
            description:
              "Emails, imports, AI processing, webhooks, document processing, and scheduled tasks should not block normal requests.",
          },
          {
            title: "Operational visibility matters",
            description:
              "Errors, logs, metrics, failed jobs, and important product events need to be observable once real users depend on the system.",
          },
          {
            title: "MVP architecture should support change",
            description:
              "The goal is not to over-engineer the first version, but to avoid choices that make every future feature expensive.",
          },
        ],
      },
    ],

    commonProblems: {
      eyebrow: "What usually goes wrong",
      heading:
        "SaaS projects often become expensive when product and architecture decisions drift apart.",
      description:
        "Many problems come from trying to build too much before the core workflow is validated.",
      items: [
        {
          title: "The MVP is actually the entire roadmap",
          description:
            "When every future idea is included in version one, development becomes slower and product learning becomes harder.",
        },
        {
          title: "Authorization is added later",
          description:
            "Permissions become difficult to secure when user roles and resource ownership were not part of the original data model.",
        },
        {
          title: "Business rules live only in the frontend",
          description:
            "Important rules should be enforced by the backend rather than depending on what the interface happens to show.",
        },
        {
          title: "Billing is treated as just a checkout page",
          description:
            "Subscription products need to handle lifecycle events, entitlements, failures, cancellations, and plan changes.",
        },
        {
          title: "Every integration blocks user requests",
          description:
            "Slow external APIs and background processing should not make the main application feel unreliable.",
        },
        {
          title: "No production observability exists",
          description:
            "When something fails for a real customer, the team should be able to understand where and why it happened.",
        },
      ],
    },

    terminology: {
      eyebrow: "SaaS terms, in plain English",
      heading:
        "Architecture becomes easier to discuss when the terminology is clear.",
      description:
        "These concepts commonly appear during SaaS product development.",
      terms: [
        {
          term: "Multi-Tenancy",
          definition:
            "An architecture where multiple customer organizations use the same application while keeping their data logically separated.",
        },
        {
          term: "RBAC",
          definition:
            "Role-Based Access Control defines what users are allowed to do based on their assigned role.",
        },
        {
          term: "Webhook",
          definition:
            "A message sent automatically by one system to another when a specific event occurs.",
        },
        {
          term: "Background Job",
          definition:
            "Work processed outside the main user request, such as emails, imports, document processing, or scheduled tasks.",
        },
        {
          term: "Entitlement",
          definition:
            "A feature or usage capability that a user receives because of their subscription plan or account configuration.",
        },
        {
          term: "Observability",
          definition:
            "The logs, metrics, errors, and traces used to understand what a production system is doing.",
        },
      ],
    },

    idealFor: {
      eyebrow: "When SaaS development makes sense",
      heading:
        "This service is designed for software products with recurring users and connected workflows.",
      items: [
        "You are validating a SaaS product idea.",
        "You need a production-ready MVP rather than a clickable prototype.",
        "Your product requires users, organizations, roles, or permissions.",
        "You need subscriptions, billing, or account plans.",
        "Your business currently relies on fragmented manual workflows.",
        "An existing SaaS product needs architectural or product improvements.",
      ],
    },

    faqs: [
      {
        question: "Can you build an MVP before the complete product?",
        answer:
          "Yes. We usually recommend defining the smallest useful end-to-end workflow first rather than attempting the complete roadmap immediately.",
      },
      {
        question: "Can you implement subscriptions and payments?",
        answer:
          "Yes. Subscription plans, billing integrations, entitlements, and lifecycle handling can be included when required.",
      },
      {
        question: "Can the product support multiple companies or teams?",
        answer:
          "Yes. Multi-tenant architecture, organizations, teams, roles, and permissions can be designed as part of the system.",
      },
      {
        question: "Can you work on an existing SaaS product?",
        answer:
          "Yes. We can scope new features, architecture improvements, UI/UX changes, integrations, or backend work around an existing codebase.",
      },
      {
        question: "Do you handle deployment?",
        answer:
          "Yes. Production deployment, environment configuration, databases, and appropriate CI/CD setup can be included.",
      },
    ],

    relatedServices: [
      {
        slug: "ui-ux-design",
        title: "UI/UX Design",
        description:
          "Design complex product workflows and interfaces before implementation.",
      },
      {
        slug: "ai-automation",
        title: "AI & Automation",
        description:
          "Add AI agents, document processing, intelligent workflows, or automation capabilities.",
      },
      {
        slug: "mobile-app-development",
        title: "Mobile App Development",
        description:
          "Extend a SaaS platform with connected mobile experiences.",
      },
    ],

    cta: {
      eyebrow: "Have a SaaS idea?",
      heading:
        "Start by defining the smallest product that creates real value.",
      description:
        "Tell us the problem, who experiences it, and what the first working version needs to make possible.",
      primaryCta: "Discuss your SaaS product",
    },

    seo: {
      title: "SaaS Development Services | Codemaven Solutions",
      description:
        "Custom SaaS development from MVP planning and product design to multi-tenant architecture, subscriptions, APIs, databases, and production deployment.",
      keywords: [
        "SaaS development",
        "SaaS MVP development",
        "custom SaaS development",
        "multi tenant SaaS",
        "SaaS development company",
        "SaaS product development",
      ],
    },
  },

  // =========================================================
  // AI & AUTOMATION
  // =========================================================

  {
    slug: "ai-automation",

    name: "AI & Automation",

    navTitle: "AI & Automation",

    category: "build",

    shortDescription:
      "AI agents and workflow automation designed around real business operations.",

    hero: {
      eyebrow: "AI & Automation",
      heading:
        "Use AI where it removes real work, not where it creates a demo.",
      highlightedText: "Automation should earn its place.",
      description:
        "We build AI agents, tool-connected assistants, and automated workflows that work with real business data, APIs, rules, and approval processes.",
      primaryCta: "Discuss an automation",
      secondaryCta: "See our work",
    },

    overview: {
      eyebrow: "Automation with operational context",
      heading:
        "Useful AI needs access to the right information, tools, and boundaries.",
      description:
        "A chatbot that only generates text is rarely enough for real business operations. Valuable AI systems need controlled access to live data, clear tool permissions, structured workflows, failure handling, and human review where the decision should not be fully automated.",
    },

    whatWeBuild: {
      heading: "What we build",
      description:
        "We focus on AI and automation systems that connect directly to a business workflow.",
      items: [
        {
          title: "AI Assistants",
          description:
            "Conversational assistants that answer questions using business data, documents, APIs, and approved knowledge sources.",
        },
        {
          title: "Tool-Using AI Agents",
          description:
            "Agents capable of calling controlled tools to retrieve information or perform approved business actions.",
        },
        {
          title: "Workflow Automation",
          description:
            "Automating repetitive processes between forms, databases, APIs, communication tools, and internal systems.",
        },
        {
          title: "Document Workflows",
          description:
            "Extracting, classifying, summarizing, routing, or searching information stored in business documents.",
        },
        {
          title: "AI-Enabled SaaS Features",
          description:
            "Integrating intelligent functionality directly into an existing software product or customer workflow.",
        },
        {
          title: "Internal AI Tools",
          description:
            "Private AI systems designed to help teams retrieve information, prepare work, or reduce repetitive operational tasks.",
        },
      ],
    },

    process: {
      eyebrow: "Our AI automation process",
      heading: "We start with the workflow before selecting the model.",
      description:
        "The value of an AI system depends more on the business process around it than on the model name used underneath it.",
      steps: [
        {
          number: "01",
          title: "Workflow Discovery",
          description:
            "We identify repetitive work, decision points, existing tools, data sources, and places where human review is still required.",
        },
        {
          number: "02",
          title: "Automation Boundary",
          description:
            "We define exactly what the system can do automatically, what requires confirmation, and what should remain manual.",
        },
        {
          number: "03",
          title: "Data & Tool Design",
          description:
            "We identify the APIs, databases, documents, business functions, and integrations the AI system needs access to.",
        },
        {
          number: "04",
          title: "Agent / Workflow Implementation",
          description:
            "We build the tool calls, prompts, orchestration, validation, business logic, and workflow states.",
        },
        {
          number: "05",
          title: "Guardrails & Failure Handling",
          description:
            "We define input validation, permissions, escalation, retries, confirmations, and behavior when information is missing.",
        },
        {
          number: "06",
          title: "Testing",
          description:
            "The system is tested against realistic scenarios, edge cases, incorrect assumptions, tool failures, and ambiguous requests.",
        },
        {
          number: "07",
          title: "Deployment & Monitoring",
          description:
            "The workflow is deployed with logging and enough visibility to understand how the system behaves in production.",
        },
      ],
    },

    tools: {
      eyebrow: "AI technology",
      heading: "Models are only one part of the automation stack.",
      description:
        "AI systems usually combine models with application code, APIs, databases, tools, and workflow orchestration.",
      groups: [
        {
          title: "Agent Development",
          items: ["Google ADK", "LLM Tool Calling", "Agent Workflows"],
        },
        {
          title: "Application Layer",
          items: ["Node.js", "TypeScript", "REST APIs"],
        },
        {
          title: "Data",
          items: ["PostgreSQL", "Prisma", "Vector Search"],
        },
        {
          title: "Integrations",
          items: ["Business APIs", "Webhooks", "Email", "Internal Tools"],
        },
      ],
    },

    deepDive: [
      {
        title: "Where AI automation actually creates value",
        items: [
          {
            title: "Repeated questions with changing answers",
            description:
              "AI can be useful when answers depend on live business data such as availability, account information, pricing, status, or operational rules.",
          },
          {
            title: "Processes spread across several tools",
            description:
              "Automation can remove manual copying between forms, databases, email, CRMs, and internal systems.",
          },
          {
            title: "Document-heavy workflows",
            description:
              "AI can help extract, organize, summarize, search, or route information when people repeatedly work through large amounts of text.",
          },
          {
            title: "Structured actions after a conversation",
            description:
              "Tool-enabled agents can collect information conversationally and then perform controlled actions such as creating a request or retrieving account data.",
          },
          {
            title: "Work that benefits from human review",
            description:
              "The best automation is not always fully autonomous. Many workflows are stronger when AI prepares the work and a person approves the final action.",
          },
        ],
      },
    ],

    commonProblems: {
      eyebrow: "What usually goes wrong",
      heading:
        "AI becomes unreliable when the surrounding system is poorly defined.",
      description:
        "A capable model cannot compensate for missing data boundaries, unclear tools, or undefined business rules.",
      items: [
        {
          title: "Business facts are hardcoded into prompts",
          description:
            "Prices, operating hours, availability, or policies become outdated when the AI does not retrieve them from the real source of truth.",
        },
        {
          title: "The agent has too much authority",
          description:
            "Automated actions should have explicit permissions, confirmations, and limits rather than broad access to business systems.",
        },
        {
          title: "There is no fallback when a tool fails",
          description:
            "External APIs and internal services can fail. The workflow needs clear behavior for missing or unavailable information.",
        },
        {
          title: "AI is added where deterministic logic is better",
          description:
            "Not every problem requires an LLM. Rules, database queries, and conventional software are often more reliable for structured operations.",
        },
        {
          title: "Success is defined as a good demo",
          description:
            "A production AI system needs reliability, observability, permission controls, and integration with real workflows.",
        },
      ],
    },

    terminology: {
      eyebrow: "AI terms, in plain English",
      heading:
        "The terminology should not obscure what the system actually does.",
      description:
        "These are some concepts that commonly appear in AI-enabled application development.",
      terms: [
        {
          term: "AI Agent",
          definition:
            "A software system where an AI model can reason about a request and use approved tools to retrieve information or perform actions.",
        },
        {
          term: "Tool Calling",
          definition:
            "Allowing the model to request a specific application function such as checking availability, searching records, or creating a request.",
        },
        {
          term: "RAG",
          definition:
            "Retrieval-Augmented Generation retrieves relevant information before asking the model to generate an answer.",
        },
        {
          term: "Embedding",
          definition:
            "A numerical representation of content used to compare semantic similarity.",
        },
        {
          term: "Guardrail",
          definition:
            "A rule or control that limits what the AI system can accept, return, or do.",
        },
        {
          term: "Human-in-the-Loop",
          definition:
            "A workflow where a person reviews or approves important actions rather than allowing the AI to operate completely independently.",
        },
      ],
    },

    idealFor: {
      eyebrow: "When AI automation makes sense",
      heading:
        "The strongest automation opportunities usually begin with repetitive operational work.",
      items: [
        "Your team repeatedly answers the same questions using changing business data.",
        "Employees manually move information between multiple tools.",
        "Large amounts of documents need to be searched or processed.",
        "Customers need conversational access to services or account information.",
        "A SaaS product would benefit from intelligent workflow assistance.",
        "You want automation but still need human approval for important decisions.",
      ],
    },

    faqs: [
      {
        question: "Can the AI use our live business data?",
        answer:
          "Yes. Where appropriate, tools can be created so the system retrieves current information from your database or APIs rather than relying on hardcoded facts.",
      },
      {
        question: "Can an AI agent perform actions?",
        answer:
          "Yes, but actions should be explicitly designed and permissioned. Important operations can require confirmation or human approval.",
      },
      {
        question: "Do we need a vector database?",
        answer:
          "Not necessarily. Vector search is useful for some document and knowledge retrieval problems, but structured databases and APIs are often better for operational facts.",
      },
      {
        question: "Can AI be added to an existing product?",
        answer:
          "Yes. AI features can be integrated into existing SaaS platforms, websites, internal tools, or customer workflows.",
      },
      {
        question: "How do you prevent incorrect answers?",
        answer:
          "No generative model is perfectly error-free, but reliability can be improved by grounding responses in approved data, restricting tools, validating outputs, and defining escalation behavior.",
      },
    ],

    relatedServices: [
      {
        slug: "saas-development",
        title: "SaaS Development",
        description:
          "Build the products and backend systems where AI capabilities can become part of real workflows.",
      },
      {
        slug: "website-development",
        title: "Website Development",
        description:
          "Add customer-facing assistants, booking flows, or connected business experiences to your website.",
      },
      {
        slug: "mobile-app-development",
        title: "Mobile App Development",
        description:
          "Bring AI-assisted workflows into mobile products and operational applications.",
      },
    ],

    cta: {
      eyebrow: "Have a repetitive workflow?",
      heading:
        "Start with the work you want to reduce, not with the AI model you want to use.",
      description:
        "Show us the current process, the tools involved, and where people spend unnecessary time.",
      primaryCta: "Discuss an automation",
    },

    seo: {
      title: "AI Automation & AI Agent Development | Codemaven Solutions",
      description:
        "AI agent development and workflow automation using live business data, tool calling, APIs, controlled actions, and production-ready integrations.",
      keywords: [
        "AI automation",
        "AI agent development",
        "business automation",
        "AI chatbot development",
        "Google ADK development",
        "workflow automation",
      ],
    },
  },

  // =========================================================
  // DIGITAL MARKETING
  // =========================================================

  {
    slug: "digital-marketing",

    name: "Digital Marketing",

    navTitle: "Digital Marketing",

    category: "grow",

    shortDescription:
      "Connected digital marketing strategies focused on visibility, qualified traffic, and measurable business growth.",

    hero: {
      eyebrow: "Digital Marketing",
      heading:
        "Marketing works better when the message, channel, and destination support each other.",
      highlightedText: "We connect the full path.",
      description:
        "We help businesses turn digital channels into a structured customer journey — from discovery and messaging to landing pages, campaigns, measurement, and conversion.",
      primaryCta: "Discuss your growth",
    },

    overview: {
      eyebrow: "Growth with context",
      heading:
        "Traffic only matters when the right people understand the offer and know what to do next.",
      description:
        "Digital marketing cannot be separated from the website, offer, content, and customer journey. We look at those connected parts so campaigns are not simply driving traffic into an experience that cannot convert it.",
    },

    whatWeBuild: {
      heading: "What we work on",
      description:
        "Digital marketing engagements are structured around the channels and customer journey relevant to the business.",
      items: [
        {
          title: "Digital Strategy",
          description:
            "Clarifying target audiences, offers, channels, messaging, objectives, and measurement before campaign execution.",
        },
        {
          title: "Campaign Planning",
          description:
            "Structuring campaigns around specific audiences, offers, destinations, and conversion goals.",
        },
        {
          title: "Landing Page Strategy",
          description:
            "Connecting marketing campaigns to focused landing experiences designed around the campaign objective.",
        },
        {
          title: "Content Planning",
          description:
            "Planning useful content around customer questions, search intent, brand positioning, and campaign needs.",
        },
        {
          title: "Analytics & Measurement",
          description:
            "Defining events, conversion actions, and reporting so marketing performance can be evaluated meaningfully.",
        },
        {
          title: "Conversion Improvement",
          description:
            "Reviewing the journey between traffic source, page experience, offer, and conversion action to identify friction.",
        },
      ],
    },

    process: {
      eyebrow: "Our marketing process",
      heading:
        "We define what success means before choosing what to publish or promote.",
      description:
        "The process connects audience, positioning, channel selection, destination, execution, and measurement.",
      steps: [
        {
          number: "01",
          title: "Business & Audience Review",
          description:
            "We understand the offer, customer segments, sales process, current channels, website, and existing performance.",
        },
        {
          number: "02",
          title: "Goal Definition",
          description:
            "We define the business actions marketing should contribute to, such as qualified enquiries, bookings, purchases, or awareness.",
        },
        {
          number: "03",
          title: "Channel Strategy",
          description:
            "We decide which channels make sense based on the audience, intent, offer, budget, and customer journey.",
        },
        {
          number: "04",
          title: "Campaign & Content Planning",
          description:
            "Messaging, creatives, content, landing pages, and calls to action are planned around each campaign objective.",
        },
        {
          number: "05",
          title: "Execution",
          description:
            "Campaigns and content are launched with tracking and conversion measurement in place.",
        },
        {
          number: "06",
          title: "Review & Iteration",
          description:
            "Performance is evaluated against meaningful business signals and campaigns are adjusted based on evidence.",
        },
      ],
    },

    deepDive: [
      {
        title: "What makes digital marketing work as a system",
        items: [
          {
            title: "The audience has to be specific",
            description:
              "Broad targeting usually produces broad messaging. Strong campaigns know who they are speaking to and why the offer matters to that group.",
          },
          {
            title: "The destination matters as much as the ad",
            description:
              "A strong campaign can still fail when the landing page does not explain the offer, establish trust, or make the next action clear.",
          },
          {
            title: "Different channels represent different intent",
            description:
              "Someone searching for a service behaves differently from someone discovering a brand through social content.",
          },
          {
            title: "Measurement should follow business actions",
            description:
              "Clicks and impressions can be useful context, but the important question is whether marketing contributes to meaningful customer actions.",
          },
        ],
      },
    ],

    commonProblems: {
      eyebrow: "What usually goes wrong",
      heading:
        "Marketing becomes expensive when activity is mistaken for strategy.",
      description:
        "Publishing more content or spending more on campaigns does not automatically improve the customer journey.",
      items: [
        {
          title: "Every channel is treated the same",
          description:
            "Search, social, email, and paid campaigns represent different stages of customer intent.",
        },
        {
          title: "The website cannot support the campaign",
          description:
            "Traffic is wasted when the destination is unclear, slow, or poorly aligned with the message that generated the visit.",
        },
        {
          title: "There is no meaningful conversion event",
          description:
            "Marketing cannot be evaluated properly when the business has not defined what a successful visitor action looks like.",
        },
        {
          title: "Content exists without a distribution plan",
          description:
            "Publishing alone does not guarantee that the right audience will discover or engage with the material.",
        },
      ],
    },

    terminology: {
      eyebrow: "Marketing terms, in plain English",
      heading:
        "Useful measurement starts with understanding what the metrics actually represent.",
      description:
        "These are common concepts used when planning and evaluating digital campaigns.",
      terms: [
        {
          term: "Conversion",
          definition:
            "A meaningful action such as an enquiry, booking, purchase, signup, or qualified lead.",
        },
        {
          term: "CTR",
          definition:
            "Click-through rate measures the percentage of people who clicked after seeing an ad or link.",
        },
        {
          term: "CPC",
          definition:
            "Cost per click is the amount paid on average for each advertising click.",
        },
        {
          term: "CAC",
          definition:
            "Customer acquisition cost estimates what the business spends to acquire a new customer.",
        },
        {
          term: "Landing Page",
          definition:
            "A focused page designed around a particular campaign, audience, offer, or conversion action.",
        },
        {
          term: "Attribution",
          definition:
            "The process of understanding which marketing interactions contributed to a conversion.",
        },
      ],
    },

    idealFor: {
      eyebrow: "When digital marketing makes sense",
      heading:
        "Digital marketing is most useful when the business already understands what it wants customers to do.",
      items: [
        "You need more qualified online enquiries.",
        "Your existing marketing channels are disconnected.",
        "You are launching a new service or offer.",
        "Traffic is reaching the website but not converting.",
        "You need clearer measurement of marketing activity.",
        "You want marketing, website, SEO, and social activity to support the same growth objective.",
      ],
    },

    faqs: [
      {
        question: "Do you provide digital marketing strategy only?",
        answer:
          "Yes. Strategy can be scoped separately when you need channel, audience, messaging, and campaign direction before execution.",
      },
      {
        question: "Can you work with our existing website?",
        answer:
          "Yes. We can assess whether the current website supports the marketing goals and recommend improvements where necessary.",
      },
      {
        question: "Do you provide reporting?",
        answer:
          "Yes. Reporting can be structured around campaign metrics and the business actions that matter to the engagement.",
      },
      {
        question: "Do you also handle SEO and social media?",
        answer:
          "Yes. SEO and social media can be integrated into a broader marketing strategy or scoped as individual services.",
      },
    ],

    relatedServices: [
      {
        slug: "seo",
        title: "SEO Services",
        description:
          "Build organic search visibility around the services and topics customers actively look for.",
      },
      {
        slug: "social-media-marketing",
        title: "Social Media Marketing",
        description:
          "Build a structured presence across social channels with consistent content and campaigns.",
      },
      {
        slug: "website-development",
        title: "Website Development",
        description:
          "Improve the destination where campaigns and customer journeys ultimately convert.",
      },
    ],

    cta: {
      eyebrow: "Need a clearer growth system?",
      heading: "Start with the customer journey before adding more campaigns.",
      description:
        "Tell us how customers currently find you, what happens after they arrive, and where the process stops working.",
      primaryCta: "Discuss your marketing",
    },

    seo: {
      title: "Digital Marketing Services | Codemaven Solutions",
      description:
        "Digital marketing strategy, campaign planning, landing pages, analytics, conversion improvement, SEO, and connected customer acquisition systems.",
      keywords: [
        "digital marketing services",
        "digital marketing company",
        "online marketing strategy",
        "lead generation marketing",
        "digital growth strategy",
      ],
    },
  },

  // =========================================================
  // SOCIAL MEDIA MARKETING
  // =========================================================

  {
    slug: "social-media-marketing",

    name: "Social Media Marketing",

    navTitle: "Social Media Marketing",

    category: "grow",

    shortDescription:
      "Social media strategy and content built around relevance, consistency, and business positioning.",

    hero: {
      eyebrow: "Social Media Marketing",
      heading: "Build a social presence people can recognise and understand.",
      highlightedText: "Not just a posting schedule.",
      description:
        "We help businesses plan and manage social content around clear themes, audience needs, offers, campaigns, and brand positioning.",
      primaryCta: "Discuss your social presence",
    },

    overview: {
      eyebrow: "Content with direction",
      heading:
        "Social media works better when every post contributes to a larger brand story.",
      description:
        "Posting consistently is useful only when the content helps people understand the business. We build content systems around audience questions, offers, expertise, proof, education, and campaign goals.",
    },

    whatWeBuild: {
      heading: "What we manage",
      description:
        "The scope can include strategy, planning, publishing, creative direction, and performance review.",
      items: [
        {
          title: "Social Strategy",
          description:
            "Defining audiences, channels, positioning, content themes, objectives, and publishing direction.",
        },
        {
          title: "Content Planning",
          description:
            "Creating structured calendars based on useful content pillars instead of disconnected daily ideas.",
        },
        {
          title: "Campaign Content",
          description:
            "Social content built around launches, promotions, offers, events, or other business campaigns.",
        },
        {
          title: "Educational Content",
          description:
            "Content that explains your expertise, services, process, or customer problems in a useful format.",
        },
        {
          title: "Brand Content",
          description:
            "Posts that communicate identity, values, behind-the-scenes work, milestones, or company positioning.",
        },
        {
          title: "Performance Review",
          description:
            "Reviewing reach, engagement, profile actions, traffic, and other relevant signals to improve future content.",
        },
      ],
    },

    process: {
      eyebrow: "Our social media process",
      heading:
        "A repeatable content system is more useful than chasing ideas every week.",
      description:
        "We define the strategy first, then turn it into repeatable content themes and publishing workflows.",
      steps: [
        {
          number: "01",
          title: "Brand & Audience Review",
          description:
            "We review the business, existing channels, audience, offer, brand voice, competitors, and current content.",
        },
        {
          number: "02",
          title: "Content Pillars",
          description:
            "We define repeatable themes such as education, expertise, proof, offers, process, and brand storytelling.",
        },
        {
          number: "03",
          title: "Content Planning",
          description:
            "A publishing plan is created around the selected channels, priorities, campaigns, and available resources.",
        },
        {
          number: "04",
          title: "Creative Production",
          description:
            "Post copy, concepts, visual direction, and assets are created according to the content plan.",
        },
        {
          number: "05",
          title: "Publishing",
          description:
            "Content is prepared for the relevant channels with platform-appropriate formatting and calls to action.",
        },
        {
          number: "06",
          title: "Review",
          description:
            "Performance is reviewed to identify which topics, formats, and messages deserve more attention.",
        },
      ],
    },

    deepDive: [
      {
        title: "What a sustainable social content system needs",
        items: [
          {
            title: "A clear reason to follow",
            description:
              "People need to understand what they will consistently learn, discover, or receive from the account.",
          },
          {
            title: "Repeatable content pillars",
            description:
              "Strong accounts do not invent a new identity every week. They explore a small number of useful themes repeatedly.",
          },
          {
            title: "Platform-aware execution",
            description:
              "The same idea can be adapted differently for LinkedIn, Instagram, or another channel rather than copied without context.",
          },
          {
            title: "Content connected to the business",
            description:
              "Social presence should eventually support brand awareness, trust, website traffic, enquiries, campaigns, or customer relationships.",
          },
        ],
      },
    ],

    commonProblems: {
      eyebrow: "What usually goes wrong",
      heading:
        "Social media becomes difficult when the business has no content system.",
      description:
        "Most inconsistency comes from trying to invent individual posts instead of establishing repeatable themes.",
      items: [
        {
          title: "Every post tries to sell",
          description:
            "A feed made entirely of offers gives people little reason to follow between purchase decisions.",
        },
        {
          title: "Content has no recognizable point of view",
          description:
            "Generic advice makes the business difficult to distinguish from competitors publishing the same information.",
        },
        {
          title: "Design changes every week",
          description:
            "Inconsistent visual treatment weakens recognition and makes the account feel less intentional.",
        },
        {
          title: "Engagement is measured without business context",
          description:
            "High reach can be useful, but it should be interpreted alongside audience quality, profile actions, traffic, and business goals.",
        },
      ],
    },

    terminology: {
      eyebrow: "Social terms, in plain English",
      heading: "Not every metric means what it appears to mean.",
      description:
        "These concepts are commonly used when reviewing social media activity.",
      terms: [
        {
          term: "Reach",
          definition: "The number of unique people who were shown the content.",
        },
        {
          term: "Impressions",
          definition:
            "The total number of times content was displayed, including repeated views by the same person.",
        },
        {
          term: "Engagement",
          definition:
            "Interactions such as likes, comments, shares, saves, or other platform actions.",
        },
        {
          term: "Content Pillar",
          definition:
            "A repeatable subject area that helps organize what a brand consistently publishes about.",
        },
        {
          term: "CTA",
          definition:
            "A call to action that tells the audience what meaningful next step they can take.",
        },
      ],
    },

    idealFor: {
      eyebrow: "When this service makes sense",
      heading:
        "Social media marketing is useful when the business needs a repeatable system rather than occasional posts.",
      items: [
        "Your social profiles are inconsistent or inactive.",
        "You have expertise but no structured content strategy.",
        "Your brand needs stronger recognition online.",
        "You are launching campaigns, products, or services.",
        "You need social activity connected to broader marketing goals.",
      ],
    },

    faqs: [
      {
        question: "Do you create the content strategy?",
        answer:
          "Yes. Strategy, content pillars, themes, publishing direction, and campaign priorities can be defined as part of the engagement.",
      },
      {
        question: "Do you also design the posts?",
        answer:
          "Yes. Social media design can be included or scoped separately depending on the engagement.",
      },
      {
        question: "Which platforms do you work with?",
        answer:
          "The selected platforms depend on the target audience and business rather than using every social channel by default.",
      },
      {
        question: "Can social media be part of a larger marketing plan?",
        answer:
          "Yes. Social activity can be integrated with website campaigns, digital marketing, SEO, and content strategy.",
      },
    ],

    relatedServices: [
      {
        slug: "social-media-design",
        title: "Social Media Design",
        description:
          "Create consistent branded visual assets for social content and campaigns.",
      },
      {
        slug: "digital-marketing",
        title: "Digital Marketing",
        description:
          "Connect social activity with broader campaigns, landing pages, and customer acquisition.",
      },
      {
        slug: "seo",
        title: "SEO Services",
        description:
          "Build long-term search visibility alongside social discovery.",
      },
    ],

    cta: {
      eyebrow: "Need a stronger social presence?",
      heading: "Build a content system before trying to publish more.",
      description:
        "Tell us what your business offers, who you want to reach, and what your current social presence is missing.",
      primaryCta: "Discuss social media",
    },

    seo: {
      title: "Social Media Marketing Services | Codemaven Solutions",
      description:
        "Social media strategy, content planning, campaign content, publishing systems, and performance review for businesses and brands.",
      keywords: [
        "social media marketing",
        "social media management",
        "content strategy",
        "social media company",
        "social media marketing services",
      ],
    },
  },

  // =========================================================
  // SEO
  // =========================================================

  {
    slug: "seo",

    name: "SEO Services",

    navTitle: "SEO",

    category: "grow",

    shortDescription:
      "Technical, on-page, and local SEO designed around search visibility and qualified organic traffic.",

    hero: {
      eyebrow: "SEO Services",
      heading: "Make it easier for the right people to find the right page.",
      highlightedText: "Search visibility starts with relevance.",
      description:
        "We improve the technical, structural, and content foundations that help search engines understand your website and help potential customers find useful answers.",
      primaryCta: "Discuss your SEO",
    },

    overview: {
      eyebrow: "Search with intent",
      heading:
        "SEO is not about adding keywords everywhere. It is about matching useful pages to real searches.",
      description:
        "Strong SEO connects search intent, page structure, content quality, crawlability, performance, internal linking, and authority. We focus on building that foundation rather than treating ranking as an isolated trick.",
    },

    whatWeBuild: {
      heading: "What we work on",
      description:
        "SEO scope depends on the website, market, competition, and search opportunities.",
      items: [
        {
          title: "Technical SEO",
          description:
            "Crawlability, indexing, metadata, canonicalization, site structure, performance, and technical search foundations.",
        },
        {
          title: "On-Page SEO",
          description:
            "Improving page titles, headings, content structure, topical relevance, internal links, and search intent alignment.",
        },
        {
          title: "Local SEO",
          description:
            "Improving local search visibility for businesses serving specific cities, areas, or physical locations.",
        },
        {
          title: "Service Page SEO",
          description:
            "Creating and improving pages around the services prospective customers actively search for.",
        },
        {
          title: "Content Strategy",
          description:
            "Planning useful content around customer questions, informational searches, and topics that support commercial pages.",
        },
        {
          title: "SEO Audits",
          description:
            "Reviewing technical, structural, content, and performance problems that may be limiting search visibility.",
        },
      ],
    },

    process: {
      eyebrow: "Our SEO process",
      heading:
        "We start by understanding what people search for and what your website currently gives them.",
      description:
        "SEO decisions are based on search intent, site architecture, technical health, and the role each page should play.",
      steps: [
        {
          number: "01",
          title: "Website Audit",
          description:
            "We review technical structure, indexing, metadata, content, internal linking, performance, and existing search visibility.",
        },
        {
          number: "02",
          title: "Search & Intent Research",
          description:
            "We identify relevant search themes and understand whether users are looking for information, services, comparison, or local businesses.",
        },
        {
          number: "03",
          title: "Page Mapping",
          description:
            "Search topics are mapped to appropriate pages so multiple pages do not compete for the same intent unnecessarily.",
        },
        {
          number: "04",
          title: "Technical Improvements",
          description:
            "We address crawlability, indexing, metadata, canonicals, redirects, performance, and structural problems.",
        },
        {
          number: "05",
          title: "Content & On-Page Improvements",
          description:
            "Pages are improved around clarity, relevance, hierarchy, supporting information, and internal linking.",
        },
        {
          number: "06",
          title: "Measurement",
          description:
            "Search visibility, indexing, impressions, clicks, positions, and meaningful conversions are monitored over time.",
        },
      ],
    },

    deepDive: [
      {
        title: "How search visibility is built properly",
        items: [
          {
            title: "Every page should target a clear intent",
            description:
              "Pages rank more effectively when they answer a specific search need rather than trying to cover every keyword at once.",
          },
          {
            title: "Technical accessibility comes first",
            description:
              "Search engines cannot evaluate content effectively if pages are blocked, duplicated, difficult to crawl, or technically unstable.",
          },
          {
            title: "Internal linking explains relationships",
            description:
              "Links between pages help both users and search engines understand which content is related and which pages are most important.",
          },
          {
            title: "Performance affects the experience",
            description:
              "Fast, stable pages support both user experience and the broader technical quality of a website.",
          },
          {
            title:
              "Commercial pages and educational content serve different roles",
            description:
              "Service pages support transactional searches while articles can capture earlier-stage informational intent.",
          },
        ],
      },
    ],

    commonProblems: {
      eyebrow: "What usually goes wrong",
      heading:
        "Most SEO problems are structural before they are keyword problems.",
      description:
        "Weak architecture and unclear page intent can limit search visibility even when individual pages contain relevant terms.",
      items: [
        {
          title: "Multiple pages target the same search",
          description:
            "When several pages compete for one intent, search engines may struggle to determine which page is most relevant.",
        },
        {
          title: "Service pages contain very little useful information",
          description:
            "A short paragraph and contact button rarely provide enough context to satisfy competitive commercial searches.",
        },
        {
          title: "SEO is added after the site is complete",
          description:
            "Search structure works better when page architecture and metadata are considered during website planning.",
        },
        {
          title: "Traffic is measured without conversions",
          description:
            "More organic visits are not necessarily valuable if the visitors are irrelevant or cannot take a meaningful next action.",
        },
      ],
    },

    terminology: {
      eyebrow: "SEO terms, in plain English",
      heading:
        "Search terminology is easier to use when you know what each concept actually changes.",
      description:
        "These terms commonly appear during SEO planning and reporting.",
      terms: [
        {
          term: "Search Intent",
          definition:
            "The reason behind a search, such as learning something, comparing options, finding a business, or purchasing.",
        },
        {
          term: "Crawlability",
          definition:
            "Whether search engine bots can access and follow the pages and links on your website.",
        },
        {
          term: "Indexing",
          definition:
            "Whether a search engine has stored a page and can consider showing it in search results.",
        },
        {
          term: "Canonical URL",
          definition:
            "The preferred version of a page when similar or duplicate URLs exist.",
        },
        {
          term: "Internal Link",
          definition:
            "A link from one page on your website to another page on the same website.",
        },
        {
          term: "Search Console",
          definition:
            "Google's platform for monitoring search visibility, indexing, queries, clicks, and technical search issues.",
        },
      ],
    },

    idealFor: {
      eyebrow: "When SEO makes sense",
      heading:
        "SEO is useful when potential customers actively search for the problems, services, or products you address.",
      items: [
        "Your website receives little relevant organic traffic.",
        "Your service pages are not appearing for important searches.",
        "The site has technical indexing or crawlability issues.",
        "You are rebuilding the website and want SEO considered from the beginning.",
        "You serve local customers and need stronger local visibility.",
        "You want a long-term organic acquisition channel alongside paid or social marketing.",
      ],
    },

    faqs: [
      {
        question: "How long does SEO take?",
        answer:
          "SEO is generally a longer-term channel. The timeline depends on the existing website, competition, search demand, authority, technical health, and content quality.",
      },
      {
        question: "Can you guarantee first position on Google?",
        answer:
          "No responsible SEO provider can guarantee a specific ranking position because search results depend on many factors outside any single provider's control.",
      },
      {
        question: "Do you provide technical SEO?",
        answer:
          "Yes. Technical SEO can include crawlability, indexing, metadata, canonicalization, redirects, performance, structure, and related implementation work.",
      },
      {
        question: "Can SEO be included during a website rebuild?",
        answer:
          "Yes. That is often preferable because page structure, URLs, metadata, internal linking, performance, and redirects can be planned before launch.",
      },
      {
        question: "Do you provide local SEO?",
        answer:
          "Yes. Local search can be included for businesses serving specific geographic markets.",
      },
    ],

    relatedServices: [
      {
        slug: "website-development",
        title: "Website Development",
        description:
          "Build the technical and structural foundation that strong SEO depends on.",
      },
      {
        slug: "digital-marketing",
        title: "Digital Marketing",
        description:
          "Connect organic search with broader customer acquisition and conversion strategy.",
      },
      {
        slug: "social-media-marketing",
        title: "Social Media Marketing",
        description:
          "Support search visibility with broader content distribution and brand discovery.",
      },
    ],

    cta: {
      eyebrow: "Need stronger search visibility?",
      heading:
        "Start by finding out whether the problem is technical, structural, or content-related.",
      description:
        "Share your website and the services, products, or locations you want potential customers to find.",
      primaryCta: "Discuss your SEO",
    },

    seo: {
      title:
        "SEO Services | Technical, On-Page & Local SEO | Codemaven Solutions",
      description:
        "Technical SEO, on-page SEO, local SEO, search strategy, content planning, and performance improvements for business websites.",
      keywords: [
        "SEO services",
        "technical SEO",
        "local SEO",
        "on page SEO",
        "SEO company",
        "business SEO",
      ],
    },
  },

  // =========================================================
  // UI UX DESIGN
  // =========================================================

  {
    slug: "ui-ux-design",

    name: "UI/UX Design",

    navTitle: "UI/UX Design",

    category: "design",

    shortDescription:
      "Product, website, and application interfaces designed around real users and business workflows.",

    hero: {
      eyebrow: "UI/UX Design",
      heading:
        "Design the experience around what people need to understand and do.",
      highlightedText: "Then make it visually clear.",
      description:
        "We design websites, SaaS products, dashboards, and mobile interfaces around user journeys, business rules, content hierarchy, and real product workflows.",
      primaryCta: "Discuss your design",
    },

    overview: {
      eyebrow: "Design with operational context",
      heading:
        "Good interface design reduces uncertainty instead of decorating it.",
      description:
        "Users should understand where they are, what they can do, what happened after an action, and what happens next. We design those interactions before focusing on visual polish.",
    },

    whatWeBuild: {
      heading: "What we design",
      description:
        "The design scope depends on whether the project is a marketing experience, product interface, or internal workflow.",
      items: [
        {
          title: "Website UI/UX",
          description:
            "Information architecture, page layouts, conversion flows, responsive behavior, and complete website visual systems.",
        },
        {
          title: "SaaS Product Design",
          description:
            "Complex product workflows, dashboards, forms, states, permissions, and repeat-use interfaces.",
        },
        {
          title: "Mobile App Design",
          description:
            "Mobile-first user flows and interfaces designed around device constraints and platform interaction patterns.",
        },
        {
          title: "Dashboard Design",
          description:
            "Operational dashboards that prioritize useful information and actions rather than filling the screen with metrics.",
        },
        {
          title: "Design Systems",
          description:
            "Reusable typography, spacing, colors, components, patterns, and states that keep interfaces consistent.",
        },
        {
          title: "UX Improvements",
          description:
            "Reviewing and redesigning existing experiences where navigation, workflows, or information hierarchy create friction.",
        },
      ],
    },

    process: {
      eyebrow: "Our design process",
      heading: "We define the experience before polishing the interface.",
      description:
        "Design moves from user and business requirements into flows, structure, visual direction, reusable components, and responsive behavior.",
      steps: [
        {
          number: "01",
          title: "Context",
          description:
            "We understand the users, product, business rules, current experience, content, and technical constraints.",
        },
        {
          number: "02",
          title: "User Flows",
          description:
            "We map how users move through important tasks and identify decision points, states, and required information.",
        },
        {
          number: "03",
          title: "Information Architecture",
          description:
            "Navigation, screens, pages, and content groups are structured before visual styling begins.",
        },
        {
          number: "04",
          title: "Wireframes",
          description:
            "Important screens and layouts are explored in lower fidelity to validate structure and interaction.",
        },
        {
          number: "05",
          title: "Visual Design",
          description:
            "Typography, colors, spacing, components, and visual hierarchy are developed into the final interface direction.",
        },
        {
          number: "06",
          title: "Responsive & State Design",
          description:
            "Mobile layouts, loading, empty, success, error, validation, and other important interface states are considered.",
        },
        {
          number: "07",
          title: "Developer Handoff",
          description:
            "Components, states, behavior, and design decisions are prepared so implementation is clear and consistent.",
        },
      ],
    },

    deepDive: [
      {
        title: "What makes an interface easier to use",
        items: [
          {
            title: "Clear hierarchy",
            description:
              "Users should immediately understand which information and actions are most important.",
          },
          {
            title: "Predictable patterns",
            description:
              "Similar actions should behave consistently so users do not need to relearn the interface on every screen.",
          },
          {
            title: "Useful feedback",
            description:
              "Interfaces should clearly communicate loading, success, failure, validation, and unavailable actions.",
          },
          {
            title: "Reduced decision load",
            description:
              "Good UX removes unnecessary choices and presents information at the moment it becomes useful.",
          },
          {
            title: "Responsive behavior",
            description:
              "Layouts should adapt intentionally instead of simply shrinking the desktop design.",
          },
        ],
      },
    ],

    commonProblems: {
      eyebrow: "What usually goes wrong",
      heading:
        "Interfaces become difficult when visual decisions happen before workflow decisions.",
      description:
        "Many usability problems are symptoms of unclear structure rather than weak styling.",
      items: [
        {
          title: "Every screen starts from scratch",
          description:
            "Inconsistent components and interaction patterns increase cognitive load and implementation effort.",
        },
        {
          title: "Important states are missing",
          description:
            "Designs often show the ideal loaded screen but ignore errors, empty data, validation, loading, and permissions.",
        },
        {
          title: "Desktop gets all the attention",
          description:
            "Mobile layouts are frequently reduced versions of desktop instead of being intentionally redesigned around smaller screens.",
        },
        {
          title: "The interface exposes the database structure",
          description:
            "Users should interact with concepts that make sense to them, not with internal data models.",
        },
      ],
    },

    terminology: {
      eyebrow: "Design terms, in plain English",
      heading:
        "Design terminology is useful when everyone understands what it changes.",
      description:
        "These concepts often appear during product and website design.",
      terms: [
        {
          term: "User Flow",
          definition:
            "The sequence of steps a user follows to complete a task.",
        },
        {
          term: "Wireframe",
          definition:
            "A simplified layout used to validate structure and hierarchy before final visual styling.",
        },
        {
          term: "Design System",
          definition:
            "A reusable set of visual rules and components that keeps a product interface consistent.",
        },
        {
          term: "UX",
          definition:
            "User experience describes how understandable, efficient, and usable the overall interaction feels.",
        },
        {
          term: "UI",
          definition:
            "User interface refers to the visual and interactive elements people use on the screen.",
        },
        {
          term: "Prototype",
          definition:
            "An interactive representation used to demonstrate or test how a product flow should behave.",
        },
      ],
    },

    idealFor: {
      eyebrow: "When UI/UX design makes sense",
      heading:
        "Design is especially valuable when workflows or information are becoming difficult to manage.",
      items: [
        "You are planning a SaaS or mobile product.",
        "Your existing product feels confusing or inconsistent.",
        "You need a website redesigned around clearer customer journeys.",
        "Your engineering team needs a reusable design system.",
        "Complex workflows need to be simplified before development.",
      ],
    },

    faqs: [
      {
        question: "Do you design before development?",
        answer:
          "Yes. For projects requiring substantial UI/UX work, designing important flows before implementation reduces ambiguity and rework.",
      },
      {
        question: "Do you provide responsive designs?",
        answer:
          "Yes. Responsive behavior and important breakpoints are considered as part of the design process.",
      },
      {
        question: "Can you redesign an existing product?",
        answer:
          "Yes. We can review existing workflows and interfaces, identify usability problems, and redesign selected areas or the broader system.",
      },
      {
        question: "Do you create design systems?",
        answer:
          "Yes. Reusable components, typography, spacing, colors, states, and interaction patterns can be documented as part of the engagement.",
      },
    ],

    relatedServices: [
      {
        slug: "website-development",
        title: "Website Development",
        description:
          "Turn approved website designs into responsive, production-ready experiences.",
      },
      {
        slug: "saas-development",
        title: "SaaS Development",
        description: "Implement product designs as complete software systems.",
      },
      {
        slug: "mobile-app-development",
        title: "Mobile App Development",
        description:
          "Develop designed mobile experiences into working applications.",
      },
    ],

    cta: {
      eyebrow: "Have a product or experience to design?",
      heading: "Start with the workflow people need to complete.",
      description:
        "Tell us who uses the product, what they need to accomplish, and where the current experience becomes difficult.",
      primaryCta: "Discuss your design",
    },

    seo: {
      title: "UI/UX Design Services | Codemaven Solutions",
      description:
        "UI/UX design for websites, SaaS products, dashboards, mobile apps, user flows, responsive interfaces, and design systems.",
      keywords: [
        "UI UX design",
        "SaaS product design",
        "website UI design",
        "mobile app design",
        "UX design services",
        "product design company",
      ],
    },
  },

  // =========================================================
  // SOCIAL MEDIA DESIGN
  // =========================================================

  {
    slug: "social-media-design",

    name: "Social Media Design",

    navTitle: "Social Media Design",

    category: "design",

    shortDescription:
      "Branded social media creatives designed for consistent visual communication across campaigns and content.",

    hero: {
      eyebrow: "Social Media Design",
      heading: "Give your social content a visual system people can recognise.",
      highlightedText: "Consistency before decoration.",
      description:
        "We design social media creatives, campaign assets, templates, and visual systems that keep your brand recognizable while giving different content formats enough flexibility.",
      primaryCta: "Discuss your social design",
    },

    overview: {
      eyebrow: "Visual consistency at scale",
      heading:
        "Social content needs enough consistency to feel like one brand and enough variety to avoid becoming repetitive.",
      description:
        "We create reusable visual directions for educational content, offers, campaigns, announcements, testimonials, and other recurring formats so teams can publish consistently without every post looking identical.",
    },

    whatWeBuild: {
      heading: "What we design",
      description:
        "Creative systems can be scoped around recurring content, one-off campaigns, or a broader social brand refresh.",
      items: [
        {
          title: "Post Design Systems",
          description:
            "Reusable visual directions for recurring social posts and content series.",
        },
        {
          title: "Carousel Design",
          description:
            "Structured multi-slide content designed around clear hierarchy, readability, and storytelling.",
        },
        {
          title: "Campaign Creatives",
          description:
            "Visual assets designed around promotions, launches, events, offers, and marketing campaigns.",
        },
        {
          title: "Educational Graphics",
          description:
            "Visual formats for explaining services, expertise, processes, comparisons, or useful industry information.",
        },
        {
          title: "Branded Templates",
          description:
            "Reusable layouts that help maintain visual consistency across repeated content types.",
        },
        {
          title: "Social Visual Refresh",
          description:
            "Redesigning an existing social presence to create stronger brand recognition and consistency.",
        },
      ],
    },

    process: {
      eyebrow: "Our social design process",
      heading: "We create a visual language before designing individual posts.",
      description:
        "The goal is a system that can support ongoing content rather than a collection of disconnected graphics.",
      steps: [
        {
          number: "01",
          title: "Brand Review",
          description:
            "We review existing brand assets, typography, colors, website, current social content, and target audience.",
        },
        {
          number: "02",
          title: "Content Requirements",
          description:
            "We identify recurring content types such as educational posts, promotions, testimonials, announcements, and campaigns.",
        },
        {
          number: "03",
          title: "Visual Direction",
          description:
            "We establish layout principles, typography, image treatment, graphic language, and hierarchy.",
        },
        {
          number: "04",
          title: "Template System",
          description:
            "Reusable patterns are created for the content formats that appear most frequently.",
        },
        {
          number: "05",
          title: "Content Production",
          description:
            "Individual creatives are produced using the established visual system.",
        },
        {
          number: "06",
          title: "Iteration",
          description:
            "The system can evolve as new campaigns and content formats are introduced.",
        },
      ],
    },

    deepDive: [
      {
        title: "What makes social media design sustainable",
        items: [
          {
            title: "Consistency without duplication",
            description:
              "The same typography, spacing, visual language, and brand signals can be reused without forcing every post into one template.",
          },
          {
            title: "Readable content hierarchy",
            description:
              "Design should help users understand the message quickly, especially on small mobile screens.",
          },
          {
            title: "Format-aware design",
            description:
              "A carousel, story, promotional graphic, and educational post each need different visual behavior.",
          },
          {
            title: "Content and design should support each other",
            description:
              "Good graphics make information easier to consume instead of using decoration that competes with the message.",
          },
        ],
      },
    ],

    commonProblems: {
      eyebrow: "What usually goes wrong",
      heading:
        "Social visuals lose value when consistency becomes either too weak or too rigid.",
      description:
        "A strong visual system should improve recognition without limiting the content.",
      items: [
        {
          title: "Every post looks unrelated",
          description:
            "Different colors, typography, layouts, and imagery make it difficult for people to recognize the brand.",
        },
        {
          title: "Every post uses the same template",
          description:
            "Excessive repetition makes content feel mechanical and limits how different messages can be communicated.",
        },
        {
          title: "Design overwhelms the message",
          description:
            "Complex graphics and decorative elements can make simple information harder to understand.",
        },
        {
          title: "Desktop-sized text is placed on mobile graphics",
          description:
            "Social creative needs to remain readable at the actual size people encounter it in their feed.",
        },
      ],
    },

    terminology: {
      eyebrow: "Creative terms, in plain English",
      heading:
        "A shared visual vocabulary makes creative work easier to review.",
      description:
        "These are common concepts used when planning social media design.",
      terms: [
        {
          term: "Visual System",
          definition:
            "A consistent set of typography, colors, layouts, image treatments, and graphic patterns used across content.",
        },
        {
          term: "Carousel",
          definition:
            "A multi-slide social post used to present a sequence of information or a visual story.",
        },
        {
          term: "Template",
          definition:
            "A reusable layout structure that can be adapted with different content.",
        },
        {
          term: "Hierarchy",
          definition:
            "The visual ordering that makes the most important information noticeable first.",
        },
      ],
    },

    idealFor: {
      eyebrow: "When social design makes sense",
      heading:
        "This service is useful when content exists but the visual presentation lacks consistency.",
      items: [
        "Your social posts do not feel visually connected.",
        "You publish regularly and need reusable templates.",
        "A campaign requires a coordinated set of creative assets.",
        "Your existing brand needs to translate more effectively to social platforms.",
        "Your marketing team needs a repeatable visual system.",
      ],
    },

    faqs: [
      {
        question: "Can you design reusable templates?",
        answer:
          "Yes. Templates can be created for recurring post types so future content remains visually consistent.",
      },
      {
        question: "Can you work with our existing brand?",
        answer:
          "Yes. Existing logos, colors, typography, and brand guidelines can be adapted into a social-specific visual system.",
      },
      {
        question: "Do you also write the social content?",
        answer:
          "Content strategy and social media marketing can be scoped separately or combined with the design engagement.",
      },
      {
        question: "Can you design campaign-specific creatives?",
        answer:
          "Yes. One-off launches, promotions, events, and campaign assets can be designed alongside or separately from ongoing content.",
      },
    ],

    relatedServices: [
      {
        slug: "social-media-marketing",
        title: "Social Media Marketing",
        description:
          "Plan the content strategy and publishing system behind the visuals.",
      },
      {
        slug: "digital-marketing",
        title: "Digital Marketing",
        description:
          "Use campaign creatives across a broader customer acquisition strategy.",
      },
      {
        slug: "ui-ux-design",
        title: "UI/UX Design",
        description:
          "Extend the same brand thinking into websites and digital product interfaces.",
      },
    ],

    cta: {
      eyebrow: "Need more consistent social content?",
      heading: "Build a visual system that can support more than one campaign.",
      description:
        "Show us your current brand, existing social channels, and the content formats you publish most often.",
      primaryCta: "Discuss social design",
    },

    seo: {
      title: "Social Media Design Services | Codemaven Solutions",
      description:
        "Social media post design, branded templates, carousel design, campaign creatives, and visual systems for businesses and brands.",
      keywords: [
        "social media design",
        "social media post design",
        "Instagram post design",
        "social media creatives",
        "carousel design",
        "social media templates",
      ],
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(service: Service): Service[] {
  return service.relatedServices
    .map((related) => services.find((item) => item.slug === related.slug))
    .filter((item): item is Service => Boolean(item));
}
