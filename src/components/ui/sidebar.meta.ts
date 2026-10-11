import type { EasyUIComponentMeta } from '../../types/component';

const meta: EasyUIComponentMeta = {
  title: 'Sidebar',
  description: 'A collapsible application sidebar with a hover pill that follows the cursor and a shared-layout active pill that glides between items. Includes nested sections, icon-only mode with tooltips, ⌘B toggle, and a draggable mobile drawer.',
  category: 'Navigation',
  tagline: 'Cursor-following hover pill & gliding active indicator',
  badges: ['Layout Springs', 'Keyboard Friendly', 'Light & Dark', 'Mobile Drawer'],
  createdAt: '2026-10-11',
  features: [
    'Hover pill tracks the cursor; active pill glides between items with a shared layout spring',
    'Nested items with animated expand/collapse and active dot indicator',
    'Icon-only collapse mode with floating tooltips, toggled via ⌘B / Ctrl+B',
    'Mobile drawer under md with drag-to-dismiss and backdrop blur',
    'Header and footer slots adapt to the collapsed state via useSidebar()',
  ],
  props: [
    { name: 'sections', type: 'SidebarSection[]', default: 'undefined', description: 'Navigation sections with items, optional titles, badges, and nested children' },
    { name: 'activeId', type: 'string', default: 'undefined', description: 'ID of the active item' },
    { name: 'onActiveChange', type: '(id: string) => void', default: 'undefined', description: 'Called when an item or child is selected' },
    { name: 'header', type: 'React.ReactNode', default: 'undefined', description: 'Brand/header slot (use useSidebar() to adapt when collapsed)' },
    { name: 'footer', type: 'React.ReactNode', default: 'undefined', description: 'Footer slot above the collapse toggle' },
    { name: 'collapsed', type: 'boolean', default: 'undefined', description: 'Controlled collapsed (icon-only) state' },
    { name: 'defaultCollapsed', type: 'boolean', default: 'false', description: 'Initial collapsed state (uncontrolled)' },
    { name: 'onCollapsedChange', type: '(collapsed: boolean) => void', default: 'undefined', description: 'Collapse state change callback' },
    { name: 'mobileOpen', type: 'boolean', default: 'undefined', description: 'Controlled mobile drawer open state' },
    { name: 'onMobileOpenChange', type: '(open: boolean) => void', default: 'undefined', description: 'Mobile drawer open state callback' },
    { name: 'className', type: 'string', default: 'undefined', description: 'Additional class for the aside' },
  ],
  accessibility: [
    'aria-current="page" on active items, aria-expanded on parents, aria-label in icon-only mode',
    'Full keyboard support: Tab focusable items, ⌘B / Ctrl+B toggle, Esc closes the mobile drawer',
    'Mobile drawer uses role="dialog" with aria-modal and backdrop click to close',
  ],
  usageCode: `import * as React from "react";
import { Bell, Folder, Home, Inbox, Settings, Users } from "lucide-react";
import { Sidebar, SidebarTrigger, useSidebar, type SidebarSection } from "@/components/ui/sidebar";

const sections: SidebarSection[] = [
  {
    items: [
      { id: "home", label: "Home", icon: <Home /> },
      { id: "inbox", label: "Inbox", icon: <Inbox />, badge: 4 },
    ],
  },
  {
    title: "Workspace",
    items: [
      {
        id: "projects",
        label: "Projects",
        icon: <Folder />,
        children: [
          { id: "active", label: "Active", badge: 12 },
          { id: "archived", label: "Archived" },
        ],
      },
      { id: "team", label: "Team", icon: <Users /> },
      { id: "alerts", label: "Alerts", icon: <Bell /> },
      { id: "settings", label: "Settings", icon: <Settings /> },
    ],
  },
];

export default function Page() {
  const [active, setActive] = React.useState("home");

  return (
    <div className="flex h-screen">
      <Sidebar sections={sections} activeId={active} onActiveChange={setActive} />
      <main className="flex-1 p-4">
        <SidebarTrigger />
      </main>
    </div>
  );
}`,
};

export default meta;
