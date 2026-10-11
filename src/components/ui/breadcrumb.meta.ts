import type { EasyUIComponentMeta } from '../../types/component';

const meta: EasyUIComponentMeta = {
  title: 'Breadcrumb',
  description: 'A navigation trail with a gliding hover pill, smooth expansion for collapsed trails with automatic focus transfer, and light/dark theme adaptation.',
  category: 'Navigation',
  tagline: 'Gliding hover pill with animated trail expansion',
  badges: ['Spring Hover', 'Smart Collapse', 'Focus Transfer', 'Light & Dark'],
  createdAt: '2026-10-11',
  features: [
    'Hover pill smoothly glides between links using Framer Motion layoutId',
    'Long trails collapse the middle items into an ellipsis trigger button',
    'Clicking ellipsis animates hidden crumbs in while focus transfers to the first revealed crumb',
    'Supports chevron or slash separator styles and custom router link components (Next.js Link or <a>)',
    'Full accessibility with aria-label="Breadcrumb", aria-current="page", and keyboard navigation',
  ],
  props: [
    { name: 'items', type: 'BreadcrumbItem[]', default: 'undefined', description: 'Array of breadcrumb items with label, href, and optional icon' },
    { name: 'separator', type: "'chevron' | 'slash'", default: "'chevron'", description: 'Separator style between breadcrumb items' },
    { name: 'maxItems', type: 'number', default: '4', description: 'Collapse the middle items when length exceeds this number' },
    { name: 'as', type: 'React.ElementType', default: "'a'", description: 'Custom link component (e.g. Next.js Link)' },
    { name: 'className', type: 'string', default: 'undefined', description: 'Additional CSS classes for the nav container' },
  ],
  accessibility: [
    'Uses semantic <nav aria-label="Breadcrumb"> and <ol> list structure',
    'Marks the current terminal page with aria-current="page"',
    'Focus automatically transfers to the first newly revealed item upon expanding',
    'Full keyboard focus indicators and focus rings for accessibility',
  ],
  usageCode: `import Link from "next/link";
import { Home } from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb";

<Breadcrumb
  as={Link}
  items={[
    { label: "Home", href: "/", icon: <Home className="size-4" /> },
    { label: "Projects", href: "/projects" },
    { label: "EasyUI", href: "/projects/easyui" },
    { label: "Components", href: "/projects/easyui/components" },
    { label: "Breadcrumb" }, // Current page (no href needed)
  ]}
/>`,
};

export default meta;
