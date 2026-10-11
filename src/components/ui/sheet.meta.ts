import type { EasyUIComponentMeta } from '../../types/component';

const meta: EasyUIComponentMeta = {
  title: 'Sheet',
  description: 'A draggable sheet / drawer that slides in from any side and can be dragged away to dismiss — swipe left/right sheets anywhere on touch, top/bottom sheets via the grab handle. Springs back if you let go early.',
  category: 'Overlays',
  tagline: 'Drag-to-dismiss sheet with spring physics',
  badges: ['Drag to Dismiss', 'Spring Physics', 'Accessible', 'Light & Dark'],
  createdAt: '2026-10-11',
  features: [
    'Four sides: right, left, top, bottom with directional drag-to-dismiss',
    'Touch: swipe left/right sheets anywhere; top/bottom sheets use the grab handle',
    'Springs back when released early; rubber-band elastic resistance',
    'Portal rendering, focus trap + focus return, Esc, scroll lock without layout shift',
    'ARIA dialog wired to SheetTitle/SheetDescription; backdrop click closes',
  ],
  props: [
    { name: 'open', type: 'boolean', default: 'undefined', description: 'Controlled open state (on Sheet)' },
    { name: 'defaultOpen', type: 'boolean', default: 'false', description: 'Initial open state (uncontrolled)' },
    { name: 'onOpenChange', type: '(open: boolean) => void', default: 'undefined', description: 'Open state change callback' },
    { name: 'side', type: "'right' | 'left' | 'top' | 'bottom'", default: "'right'", description: 'Side the sheet slides in from (on SheetContent)' },
    { name: 'showClose', type: 'boolean', default: 'true', description: 'Show the built-in close button' },
    { name: 'className', type: 'string', default: 'undefined', description: 'Additional class for the panel' },
  ],
  accessibility: [
    'role="dialog" with aria-modal, labelled by SheetTitle, described by SheetDescription',
    'Focus is trapped inside and returned to the trigger on close; Escape dismisses',
    'Body scroll locks while open with scrollbar-width compensation (no layout shift)',
  ],
  usageCode: `import {
  Sheet, SheetBody, SheetClose, SheetContent, SheetDescription,
  SheetFooter, SheetHeader, SheetTitle, SheetTrigger,
} from "@/components/ui/sheet";

<Sheet>
  <SheetTrigger className="h-9 rounded-lg bg-neutral-900 px-4 text-sm text-white dark:bg-white dark:text-neutral-900">
    Open
  </SheetTrigger>

  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Edit profile</SheetTitle>
      <SheetDescription>Make changes, then save.</SheetDescription>
    </SheetHeader>
    <SheetBody>{/* scrolls on its own */}</SheetBody>
    <SheetFooter>
      <SheetClose>Cancel</SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>`,
};

export default meta;
