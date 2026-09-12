import { BotIcon, Globe2Icon, MegaphoneIcon, PaletteIcon } from "lucide-react";

export const businessNeeds = [
  {
    number: "01",
    title: "Your business has evolved. Your website hasn't.",
    description:
      "Your services have changed, your work has improved, and your website still tells the old story. We rethink the content, structure, and experience around the business you run today.",
  },
  {
    number: "02",
    title: "You have a product idea that needs a first version.",
    description:
      "You know the problem you want to solve. We help define the essential features, design how people will use them, and develop a working product you can put in their hands.",
  },
  {
    number: "03",
    title: "Routine work is taking time from important work.",
    description:
      "Moving information between tools, answering recurring questions, and tracking updates manually can consume the day. We identify where integrations and AI automation can help.",
  },
  {
    number: "04",
    title: "Your offer is clear to you. It needs to reach customers.",
    description:
      "We bring clarity to your message and connect it with search, social content, and campaigns, giving people a clearer path from discovering your business to taking action.",
  },
];

export const capabilities = [
  {
    icon: Globe2Icon,
    title: "Develop the experience.",
    description:
      "A website that presents your business. An app your customers can use on the move. A SaaS product with the workflows and features its users need.",
    links: [
      {
        label: "Website Development",
        href: "/services/website-development",
      },
      {
        label: "Mobile App Development",
        href: "/services/mobile-app-development",
      },
      {
        label: "SaaS Development",
        href: "/services/saas-development",
      },
    ],
  },
  {
    icon: PaletteIcon,
    title: "Make every interaction clear.",
    description:
      "Help people understand your offer, navigate your product, and recognise your brand across screens, posts, and campaigns.",
    links: [
      {
        label: "UI/UX Design",
        href: "/services/ui-ux-design",
      },
      {
        label: "Social Media Design",
        href: "/services/social-media-design",
      },
    ],
  },
  {
    icon: BotIcon,
    title: "Connect the work behind it.",
    description:
      "Build AI agents, connect business tools, and automate repeatable tasks with clear rules for what runs automatically and what needs your review.",
    links: [
      {
        label: "AI & Automation",
        href: "/services/ai-automation",
      },
    ],
  },
  {
    icon: MegaphoneIcon,
    title: "Bring it to your audience.",
    description:
      "Give your website and offer a plan for reaching people through search, social media, and marketing campaigns, with measurement built into the work.",
    links: [
      {
        label: "Digital Marketing",
        href: "/services/digital-marketing",
      },
      {
        label: "SEO Services",
        href: "/services/seo",
      },
      {
        label: "Social Media Marketing",
        href: "/services/social-media-marketing",
      },
    ],
  },
];

export const process = [
  {
    number: "01",
    title: "Define the outcome.",
    description:
      "We discuss what you want to launch or improve, who it is for, and what is getting in the way. Existing tools, budget, and deadlines shape the conversation.",
    detail: "Discovery & priorities",
  },
  {
    number: "02",
    title: "Make the scope concrete.",
    description:
      "We agree on the deliverables, responsibilities, pricing, and timeline. You can see what is included and what belongs in a later phase.",
    detail: "Scope & proposal",
  },
  {
    number: "03",
    title: "Review as the work takes shape.",
    description:
      "We share progress at agreed checkpoints and work through your feedback, so decisions about the content, design, or functionality happen during delivery.",
    detail: "Delivery & feedback",
  },
  {
    number: "04",
    title: "Put the work into use.",
    description:
      "We complete the checks relevant to the project, prepare the handover, and agree on what happens after delivery, including any ongoing support or marketing.",
    detail: "Launch & next steps",
  },
];

export const faqs = [
  {
    question: "Can we work together on just one service?",
    answer:
      "Yes. You can engage us for a website, an app, a design project, automation, or marketing. We scope the work around what you need rather than requiring a package of services.",
  },
  {
    question: "Can you work with what we already have?",
    answer:
      "Yes. We can review your existing website, product, designs, or workflows and discuss what can be improved. If a rebuild is worth considering, we explain why before including it in a proposal.",
  },
  {
    question: "What if our idea is not fully defined yet?",
    answer:
      "Start with the problem, who experiences it, and what you want to change. We can help turn that into a clearer set of requirements and a practical scope for the first phase.",
  },
  {
    question: "How do you determine pricing and timelines?",
    answer:
      "We consider the deliverables, complexity, integrations, content requirements, and review process. After discussing these with you, we provide a proposal with pricing and a timeline.",
  },
  {
    question: "Is ongoing support available?",
    answer:
      "We can discuss maintenance, further development, or ongoing marketing as a separate scope. The responsibilities, availability, and fees are agreed based on the support you need.",
  },
];
