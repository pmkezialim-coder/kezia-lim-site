export const site = {
  name: "Kezia Lim",
  email: "pm.kezialim@gmail.com",
  linkedin: "https://www.linkedin.com/in/kezialimmz/",
  discoveryCallMailto:
    "mailto:pm.kezialim@gmail.com?subject=Discovery%20Call",
  ctaLabel: "Contact Me",
  workWithMeLabel: "Work With Me",
  becomeUrl: "https://becomeme.app/",
  becomeInstagram: "https://www.instagram.com/becomeme.app/",
  becomeTiktok: "https://www.tiktok.com/@becomeme.app",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/consulting", label: "Consulting" },
  { href: "/proof-of-work", label: "Proof of Work" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

type InsightPost = {
  slug: string;
  title: string;
  teaser: string;
  tag: string;
  readingTime: string;
  assetName: string;
  imageDescription: string;
  imageSrc?: string;
  imageWidth?: number;
  imageHeight?: number;
};

export const insightsPosts: InsightPost[] = [
  {
    slug: "why-i-started-journaling-to-find-my-inner-compass",
    title: "Why I Started Journaling to Find My Inner Compass",
    teaser: "The 37-year story behind BECOME.",
    tag: "Founder Story",
    readingTime: "6 min",
    assetName: "field-notes-notebook-handwriting.jpg",
    imageDescription: "Close-up of a handwritten journal page, warm light",
    imageSrc: "/images/become/field-notes-notebook-handwriting.jpg",
    imageWidth: 1448,
    imageHeight: 1086,
  },
  {
    slug: "the-app-made-me-cry",
    title: "The App Made Me Cry",
    teaser:
      "What two days of debugging the Inner Compass taught me about rest.",
    tag: "Building BECOME",
    readingTime: "4 min",
    assetName: "field-notes-late-night-desk.jpg",
    imageDescription: "Laptop glow at a desk, late evening, hands on keyboard",
    imageSrc: "/images/become/field-notes-late-night-desk.jpg",
    imageWidth: 1536,
    imageHeight: 1024,
  },
  {
    slug: "three-weeks-from-prd-to-live",
    title: "Three Weeks From PRD to Live",
    teaser: "What shipping BECOME solo taught me about my own pace.",
    tag: "Shipping",
    readingTime: "5 min",
    assetName: "field-notes-prd-printout.jpg",
    imageDescription: "PRD document with handwritten annotations on a desk",
    imageSrc: "/images/become/field-notes-prd-printout.jpg",
    imageWidth: 1536,
    imageHeight: 1024,
  },
];
