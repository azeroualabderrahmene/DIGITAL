export interface ProductItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  categorySlug: string;
  licenseType: "PLR" | "MRR" | "RESELL" | "LICENSED";
  resourceType: "EBOOK" | "TEMPLATE" | "COURSE" | "GRAPHIC" | "PROMPT_PACK";
  accessLevel: "BASIC" | "PRO" | "LIFETIME";
  thumbnailUrl?: string;
  previewUrl?: string;
  fileSize?: string;
  downloadCount: number;
  featured?: boolean;
  createdAt: string;
}

export const MOCK_CATEGORIES = [
  {
    name: "Templates & Kits",
    slug: "templates",
    description: "Canva kits, social media bundles, landing page layouts, and copywriting scripts.",
    icon: "🎨",
    count: 42,
  },
  {
    name: "AI Prompt Packs",
    slug: "prompts",
    description: "High-converting Midjourney prompts, ChatGPT copywriting frameworks, and Claude workflows.",
    icon: "⚡",
    count: 28,
  },
  {
    name: "Video Courses",
    slug: "courses",
    description: "Step-by-step masterclasses on agency scaling, media buying, and client acquisition.",
    icon: "📹",
    count: 19,
  },
  {
    name: "Graphics & UI",
    slug: "graphics",
    description: "Figma design systems, 3D icons, vector assets, and dark-themed UI component libraries.",
    icon: "💎",
    count: 35,
  },
  {
    name: "eBooks & Guides",
    slug: "ebooks",
    description: "Actionable growth playbooks, startup validation guides, and PLR/MRR niche ebooks.",
    icon: "📚",
    count: 31,
  },
];

export const MOCK_PRODUCTS: ProductItem[] = [
  {
    id: "prod-1",
    title: "Instagram Marketing Mastery Template Pack",
    slug: "instagram-marketing-mastery-template-pack",
    description: "Complete editable Canva templates for luxury fashion, real estate, and digital business brands. Includes carousel layouts, story highlights, and post copy prompts.",
    category: "Templates & Kits",
    categorySlug: "templates",
    licenseType: "PLR",
    resourceType: "TEMPLATE",
    accessLevel: "BASIC",
    fileSize: "142 MB",
    downloadCount: 1240,
    featured: true,
    createdAt: "2026-08-20",
  },
  {
    id: "prod-2",
    title: "ChatGPT Prompts for SaaS Launch & Copywriting",
    slug: "chatgpt-prompts-for-saas-launch",
    description: "Over 500 copy-paste prompt structures for SaaS landing page headlines, email onboarding sequences, cold outreach, and SEO article generation.",
    category: "AI Prompt Packs",
    categorySlug: "prompts",
    licenseType: "MRR",
    resourceType: "PROMPT_PACK",
    accessLevel: "BASIC",
    fileSize: "8.5 MB",
    downloadCount: 890,
    featured: true,
    createdAt: "2026-08-22",
  },
  {
    id: "prod-3",
    title: "100k Agency Roadmap Video Masterclass",
    slug: "100k-agency-roadmap-video-course",
    description: "Step-by-step masterclass on acquiring high-ticket clients, outreach scripts, pricing calculators, and CRM automated configurations.",
    category: "Video Courses",
    categorySlug: "courses",
    licenseType: "RESELL",
    resourceType: "COURSE",
    accessLevel: "PRO",
    fileSize: "2.4 GB",
    downloadCount: 540,
    featured: true,
    createdAt: "2026-08-15",
  },
  {
    id: "prod-4",
    title: "Sleek UI Dashboard Kit Figma Framework",
    slug: "sleek-ui-dashboard-kit-figma-file",
    description: "Fully customizable dashboard framework components with dark mode support, chart components, tables, and modal design tokens.",
    category: "Graphics & UI",
    categorySlug: "graphics",
    licenseType: "LICENSED",
    resourceType: "GRAPHIC",
    accessLevel: "PRO",
    fileSize: "78 MB",
    downloadCount: 710,
    featured: false,
    createdAt: "2026-08-18",
  },
  {
    id: "prod-5",
    title: "AI Startup Idea Validation eBook & Toolkit",
    slug: "ai-startup-idea-validation-ebook",
    description: "Exclusive guide detailing low-code validation tools, landing page teardowns, cold email templates, and product-market fit evaluation frameworks.",
    category: "eBooks & Guides",
    categorySlug: "ebooks",
    licenseType: "PLR",
    resourceType: "EBOOK",
    accessLevel: "LIFETIME",
    fileSize: "45 MB",
    downloadCount: 320,
    featured: true,
    createdAt: "2026-08-10",
  },
  {
    id: "prod-6",
    title: "Premium Landing Page Copywriting Script Library",
    slug: "premium-copywriting-script-library",
    description: "Proven high-converting sales letter scripts, VSL frameworks, bullet formula templates, and objection handling scripts.",
    category: "Templates & Kits",
    categorySlug: "templates",
    licenseType: "RESELL",
    resourceType: "TEMPLATE",
    accessLevel: "LIFETIME",
    fileSize: "18 MB",
    downloadCount: 460,
    featured: false,
    createdAt: "2026-08-05",
  },
];
