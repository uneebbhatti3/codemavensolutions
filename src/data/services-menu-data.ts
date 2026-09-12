import {
  Globe2Icon,
  SmartphoneIcon,
  LayersIcon,
  BotIcon,
  MegaphoneIcon,
  Share2Icon,
  SearchIcon,
  PaletteIcon,
  ImageIcon,
} from "lucide-react";

export const navLinks = [
  { id: 1, label: "Case Studies", href: "/work" },
  // { id: 2, label: "Blog", href: "/blogs" },
  { id: 2, label: "About", href: "/about" },
  { id: 3, label: "Contact", href: "/contact" },
];

export const serviceGroups = [
  {
    title: "BUILD DIGITAL PRODUCTS",
    services: [
      {
        title: "Website Development",
        href: "/services/website-development",
        icon: Globe2Icon,
        iconClassName:
          "bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400",
        description:
          "Fast, responsive websites built to turn visitors into customers.",
      },
      {
        title: "Mobile App Development",
        href: "/services/mobile-app-development",
        icon: SmartphoneIcon,
        iconClassName:
          "bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-400",
        description:
          "iOS and Android apps that bring your business to your customers.",
      },
      {
        title: "SaaS Development",
        href: "/services/saas-development",
        icon: LayersIcon,
        iconClassName:
          "bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-400",
        description:
          "Custom SaaS platforms, from your first MVP to a growing product.",
      },
      {
        title: "AI & Automation",
        href: "/services/ai-automation",
        icon: BotIcon,
        iconClassName:
          "bg-green-100 text-green-600 dark:bg-green-950 dark:text-green-400",
        description:
          "AI agents and automated workflows that cut repetitive work.",
      },
    ],
  },
  {
    title: "GROW YOUR BUSINESS",
    services: [
      {
        title: "Digital Marketing",
        href: "/services/digital-marketing",
        icon: MegaphoneIcon,
        iconClassName:
          "bg-pink-100 text-pink-600 dark:bg-pink-950 dark:text-pink-400",
        description:
          "Marketing strategies and campaigns to attract qualified leads.",
      },
      {
        title: "Social Media Marketing",
        href: "/services/social-media-marketing",
        icon: Share2Icon,
        iconClassName:
          "bg-sky-100 text-sky-600 dark:bg-sky-950 dark:text-sky-400",
        description:
          "Content and account management to grow your social presence.",
      },
      {
        title: "SEO Services",
        href: "/services/seo",
        icon: SearchIcon,
        iconClassName:
          "bg-lime-100 text-lime-600 dark:bg-lime-950 dark:text-lime-400",
        description:
          "Technical, on-page, and local SEO to help customers find you.",
      },
    ],
  },
  {
    title: "DESIGN EXPERIENCES",
    services: [
      {
        title: "UI/UX Design",
        href: "/services/ui-ux-design",
        icon: PaletteIcon,
        iconClassName:
          "bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-400",
        description:
          "Intuitive web and app interfaces that simplify every interaction.",
      },
      {
        title: "Social Media Design",
        href: "/services/social-media-design",
        icon: ImageIcon,
        iconClassName:
          "bg-violet-100 text-violet-600 dark:bg-violet-950 dark:text-violet-400",
        description:
          "On-brand posts, carousels, and ad creatives for social media.",
      },
    ],
  },
];
