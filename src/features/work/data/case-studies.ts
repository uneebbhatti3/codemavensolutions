export type CaseStudy = {
  slug: string;
  name: string;
  client: string;
  category: string;
  industry: string;
  year: string;

  description: string;

  services: string[];

  situation: string[];

  challenge: {
    description: string;
    points: string[];
  };

  approach: {
    intro: string;
    points: {
      title: string;
      description: string;
    }[];
  };

  solution: {
    intro: string;
    features: {
      title: string;
      description: string;
    }[];
  };

  outcome: {
    summary: string;
    description?: string;
  };

  results?: {
    value: string;
    label: string;
  }[];

  technologies?: string[];

  ogImage?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "the-buff-detailing",

    name: "The Buff Detailing",

    client: "The Buff Detailing",

    category: "Booking Platform & AI Experience",

    industry: "Automotive Detailing",

    year: "July 2026 — Present",

    description:
      "A booking platform and AI-assisted website built for a working car and motorcycle detailing studio in Lahore, covering the customer journey from service discovery and appointment requests to live business support through an AI assistant.",

    services: [
      "Website Development",
      "Booking System",
      "Admin Dashboard",
      "AI & Automation",
      "UI/UX Design",
      "Backend Architecture",
    ],

    situation: [
      "The Buff operates a real automotive detailing studio where appointment length depends heavily on the service being booked. A premium wash may take a fraction of the time required for a complete detailing or paint-correction job.",

      "Before the platform was introduced, the business had no dedicated website and no structured booking workflow. Appointments were coordinated manually, which meant customers had no reliable way to see available times and the business had no system for automatically accounting for different service durations.",

      "The absence of a centralized system also meant service information, pricing, operating hours, and booking rules could not be managed from one place. Any future digital experience needed to reflect how the studio actually operates rather than forcing the business into a generic appointment model.",
    ],

    challenge: {
      description:
        "The core challenge was not simply creating an appointment form. The booking system had to understand service duration, working hours, scheduling conflicts, and owner approval while remaining simple enough for customers to use without knowing how the scheduling logic works.",

      points: [
        "Different detailing services require significantly different amounts of time, so fixed appointment slots were not sufficient.",

        "Customers can select multiple services, which means total appointment duration must be calculated dynamically.",

        "Available times must fit completely within configured business hours rather than only checking whether the appointment can start.",

        "Existing bookings must be considered so new requests cannot overlap with appointments already occupying part of the requested time range.",

        "The owner needed control over prices, service duration, availability, business hours, and booking rules without requiring a code deployment.",

        "The AI assistant needed to answer questions using current business information rather than relying on hardcoded responses that could become outdated.",
      ],
    },

    approach: {
      intro:
        "We treated the website, booking system, admin controls, and AI assistant as parts of one operational system rather than separate features. The shared database became the source of truth for the information used by both customers and the AI experience.",

      points: [
        {
          title: "Model the business before designing the booking flow.",
          description:
            "The first priority was understanding how services, durations, business hours, availability rules, and booking requests relate to each other. This allowed the interface to follow the studio's real scheduling constraints instead of using generic fixed slots.",
        },

        {
          title: "Keep operational data outside the codebase.",
          description:
            "Service pricing, duration, active status, business hours, and booking configuration are stored as manageable data. This allows the owner to change day-to-day business information without waiting for a development update.",
        },

        {
          title:
            "Calculate availability from duration, not from predefined times.",
          description:
            "When customers select services, the system calculates the total appointment duration and checks candidate start times against business hours, existing bookings, buffer rules, minimum notice, and slot intervals.",
        },

        {
          title: "Keep the owner in control of final confirmation.",
          description:
            "Instead of turning every customer selection into an instantly confirmed appointment, the system uses a booking-request model so the business can review and confirm requests before committing the schedule.",
        },

        {
          title: "Give the AI assistant access to the same source of truth.",
          description:
            "The assistant was designed around tools that query live business data so answers about services, pricing, availability, and operating hours remain aligned with the information used elsewhere in the platform.",
        },
      ],
    },

    solution: {
      intro:
        "The final product combines a customer-facing website, duration-aware scheduling logic, administrative business controls, and an AI assistant into one connected experience.",

      features: [
        {
          title: "Duration-aware multi-service booking",
          description:
            "Customers can select one or more services, with total appointment duration calculated automatically from the selected service configuration.",
        },

        {
          title: "Real-time slot availability",
          description:
            "Available appointment times are generated based on total service duration, configured operating hours, booking rules, and existing appointments.",
        },

        {
          title: "Admin-managed service catalog",
          description:
            "The business can manage service names, pricing, duration, and active or inactive status without changing the application code.",
        },

        {
          title: "Configurable operating rules",
          description:
            "Weekly business hours, booking buffers, minimum notice requirements, and slot intervals are represented as configurable operational data.",
        },

        {
          title: "Booking-request workflow",
          description:
            "Customer submissions remain requests until reviewed by the business, giving the owner control over final scheduling decisions.",
        },

        {
          title: "AI customer assistant",
          description:
            "A conversational assistant built with Google ADK can answer questions about the business by querying live data rather than depending on static prompts.",
        },

        {
          title: "AI-assisted booking initiation",
          description:
            "The assistant can guide a customer through the information needed to begin a booking request directly through the conversation.",
        },

        {
          title: "Custom editorial interface",
          description:
            "The website uses a tailored visual direction rather than relying on the familiar visual patterns of generic car wash and detailing templates.",
        },
      ],
    },

    outcome: {
      summary:
        "The Buff now has a connected digital system for presenting its services, handling appointment requests, managing operational information, and assisting customers through both the website and an AI-powered conversation.",

      description:
        "Instead of treating the website as a static marketing layer, the project connects customer-facing content with the studio's real scheduling and service data. The same information can be managed by the business, used by the booking engine, and accessed by the AI assistant, reducing the gap between what customers see and how the studio actually operates.",
    },

    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "shadcn/ui",
      "Google ADK",
      "Vercel",
    ],

    ogImage: "/case-studies/the-buff.png",
  },

  {
    slug: "alm-traders",

    name: "ALM Traders",

    client: "ALM Traders",

    category: "B2B Corporate Website",

    industry: "IT Hardware Trading & Distribution",

    year: "December 2024 — February 2025",

    description:
      "A responsive B2B website created for an international IT hardware trading and wholesale distribution company to present its business, product categories, and market positioning more professionally to prospective buyers.",

    services: [
      "Website Development",
      "UI/UX Implementation",
      "Responsive Design",
      "SEO Implementation",
      "Performance Optimization",
    ],

    situation: [
      "ALM Traders operates in the global IT hardware trading and export market, where credibility and clarity are important when potential buyers are evaluating a supplier remotely.",

      "The company had a limited online presence, which made it difficult for prospective customers to quickly understand what the business does, the product categories it deals in, and how it positions itself within the wholesale technology market.",

      "The website therefore needed to function as more than a simple company page. It needed to communicate the business clearly, support international visibility, and provide a more credible first impression to buyers discovering the company online.",
    ],

    challenge: {
      description:
        "The main challenge was translating a traditional B2B trading business into a structured digital presence that could communicate credibility, product scope, and business positioning without overwhelming visitors with unnecessary complexity.",

      points: [
        "The business needed a clearer online explanation of its services and product categories.",

        "The information architecture had to support B2B buyers who may be evaluating the company before making direct contact.",

        "The website needed to work reliably across desktop and mobile devices for international visitors.",

        "The implementation needed strong semantic structure and metadata so the site could be understood by search engines.",

        "The final website needed to remain easy to revise as stakeholder feedback changed the presentation and content.",
      ],
    },

    approach: {
      intro:
        "The project focused on improving clarity, responsiveness, and credibility rather than introducing unnecessary interactive complexity. The website was structured around the information a potential B2B buyer would need when evaluating the company.",

      points: [
        {
          title: "Structure the site around buyer understanding.",
          description:
            "Pages and sections were organized to make the company's business model, product categories, and positioning easier to understand without requiring visitors to search through dense content.",
        },

        {
          title: "Use reusable components for consistency.",
          description:
            "The interface was developed with reusable components so recurring patterns remained consistent and future revisions could be made without duplicating implementation work.",
        },

        {
          title: "Treat responsive behavior as part of the layout.",
          description:
            "The experience was designed to adapt across desktop, tablet, and mobile rather than treating mobile responsiveness as a final adjustment after the desktop version was complete.",
        },

        {
          title: "Build SEO fundamentals into the implementation.",
          description:
            "Semantic markup, metadata, hierarchy, and page structure were considered during development so the website had a stronger technical foundation for search visibility.",
        },
      ],
    },

    solution: {
      intro:
        "The resulting website gives ALM Traders a structured B2B presence designed to communicate its offering clearly and provide potential customers with a more professional point of reference.",

      features: [
        {
          title: "B2B-focused website structure",
          description:
            "The page hierarchy and content sections were organized around the company's services, product categories, and business credibility.",
        },

        {
          title: "Responsive implementation",
          description:
            "Layouts were developed to remain usable and visually consistent across desktop and mobile screen sizes.",
        },

        {
          title: "Reusable interface components",
          description:
            "Common visual and structural patterns were componentized to keep the codebase consistent and easier to maintain.",
        },

        {
          title: "SEO-friendly page structure",
          description:
            "Metadata, semantic HTML, and content hierarchy were implemented to provide a stronger technical foundation for search indexing.",
        },

        {
          title: "Performance-focused frontend",
          description:
            "The frontend was implemented using Next.js with attention to efficient rendering, responsive behavior, and production performance.",
        },

        {
          title: "Stakeholder-driven refinements",
          description:
            "The final implementation incorporated revisions from the business to ensure the website reflected how ALM Traders wanted to present itself to potential buyers.",
        },
      ],
    },

    outcome: {
      summary:
        "ALM Traders gained a more structured and professional digital presence that makes the company's offering easier for prospective B2B customers to understand.",

      description:
        "The finished website provides the business with a clearer online identity, stronger responsive presentation, and a more search-friendly technical foundation. It gives potential international buyers a more complete point of reference before beginning a direct business conversation.",
    },

    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],

    ogImage: "/case-studies/alm-traders.png",
  },

  {
    slug: "sysvelop",

    name: "Sysvelop",

    client: "Sysvelop",

    category: "Software Company Website",

    industry: "Software & Digital Services",

    year: "March 2024 — April 2024",

    description:
      "A modern marketing website for a software company offering web, mobile, and digital product development services, designed to improve service communication, responsiveness, credibility, and lead generation.",

    services: [
      "Frontend Development",
      "Responsive Implementation",
      "UI Development",
      "SEO Implementation",
      "Lead Capture Integration",
      "Performance Optimization",
    ],

    situation: [
      "Sysvelop operates as a software services company offering web, mobile, and broader digital product development services.",

      "Its website acts as one of the primary places where potential clients evaluate the company before deciding whether to begin a conversation. That means the website must communicate both capability and credibility quickly.",

      "The existing website needed stronger content structure, improved responsive behavior, and clearer presentation of the company's services so visitors could better understand what Sysvelop offers and how to take the next step.",
    ],

    challenge: {
      description:
        "The main challenge was to rebuild the marketing experience around clarity and lead generation while maintaining strong frontend quality across devices and improving the technical foundation of the site.",

      points: [
        "The service offering needed to be presented more clearly so prospective clients could understand the company's capabilities faster.",

        "The interface needed stronger responsive behavior across different viewport sizes.",

        "The website had to support lead generation rather than acting only as a passive company profile.",

        "SEO-related metadata and page structure needed improvement.",

        "Performance needed to remain strong despite the visual and interactive requirements of a modern software company website.",
      ],
    },

    approach: {
      intro:
        "The project was approached as a marketing and lead-generation website rather than a purely visual redesign. The implementation focused on improving the relationship between service communication, responsive behavior, performance, and conversion paths.",

      points: [
        {
          title: "Prioritize service clarity.",
          description:
            "The layout was structured so potential clients could understand Sysvelop's major capabilities without navigating through unnecessary layers of content.",
        },

        {
          title: "Build reusable frontend patterns.",
          description:
            "Reusable components were created for recurring sections and interface elements, improving consistency and making the website easier to maintain.",
        },

        {
          title: "Design responsive behavior deliberately.",
          description:
            "Layouts, spacing, navigation, and content presentation were adapted across desktop and mobile breakpoints rather than relying on simple stacking behavior.",
        },

        {
          title: "Connect marketing pages to lead capture.",
          description:
            "The website was structured to guide interested visitors toward a concrete next action, with lead capture integrated into the experience.",
        },

        {
          title: "Protect performance while improving presentation.",
          description:
            "Frontend implementation decisions were made with performance in mind, helping the site maintain strong Lighthouse results alongside the updated interface.",
        },
      ],
    },

    solution: {
      intro:
        "The completed website gives Sysvelop a clearer and more credible company presence while supporting the practical goal of converting interested visitors into leads.",

      features: [
        {
          title: "Clear service presentation",
          description:
            "The website structure gives each major service area clearer positioning so visitors can understand what Sysvelop offers without unnecessary friction.",
        },

        {
          title: "Responsive frontend",
          description:
            "The interface was implemented to work consistently across desktop, tablet, and mobile screen sizes.",
        },

        {
          title: "Reusable component system",
          description:
            "Shared UI patterns were developed as reusable components, improving consistency and maintainability across the site.",
        },

        {
          title: "SEO-oriented metadata and structure",
          description:
            "Metadata, semantic structure, and page hierarchy were improved to strengthen the website's technical SEO foundation.",
        },

        {
          title: "Lead capture integration",
          description:
            "HubSpot was integrated into the website to support lead collection and connect website interest with the company's sales process.",
        },

        {
          title: "Performance-focused implementation",
          description:
            "The frontend was optimized to maintain strong Lighthouse performance across key categories.",
        },
      ],
    },

    outcome: {
      summary:
        "Sysvelop received a clearer, more responsive, and more conversion-oriented company website that better communicates its services and supports lead generation.",

      description:
        "The updated implementation improved how the company's capabilities are presented across screen sizes while strengthening the technical structure of the site. The finished website also integrated lead capture into the customer journey rather than treating contact as an isolated page.",
    },

    results: [
      {
        value: "95+",
        label: "Lighthouse scores across key categories",
      },
    ],

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "HubSpot",
      "Vercel",
    ],

    ogImage: "/case-studies/sysvelop.png",
  },
];
