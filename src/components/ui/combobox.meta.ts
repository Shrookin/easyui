import type { EasyUIComponentMeta } from '../../types/component';

const meta: EasyUIComponentMeta = {
  title: 'Combobox',
  description: 'A searchable select where one highlight glides between options as you move (keyboard or mouse), the match underlines as you type, and the check pops in on selection.',
  category: 'Forms',
  tagline: 'Gliding highlight & type-to-match underline',
  badges: ['Layout Springs', 'Keyboard Friendly', 'Searchable', 'Light & Dark'],
  createdAt: '2026-10-11',
  features: [
    'Single measured highlight glides to the active row and survives scrolling',
    'Fuzzy-free substring search across labels, descriptions, and keywords with match underline',
    'Descriptions, icons, and disabled options supported',
    'Arrow/Home/End/Enter/Esc keys wired; opens upward when there is no room below',
    'ARIA combobox/listbox with aria-activedescendant wired end to end',
  ],
  props: [
    { name: 'options', type: 'ComboboxOption[]', default: 'undefined', description: 'Options with value, label, description, icon, keywords, disabled' },
    { name: 'value', type: 'string | null', default: 'undefined', description: 'Controlled selected value' },
    { name: 'defaultValue', type: 'string | null', default: 'null', description: 'Initial value (uncontrolled)' },
    { name: 'onValueChange', type: '(value: string | null) => void', default: 'undefined', description: 'Selection change callback' },
    { name: 'placeholder', type: 'string', default: "'Select…'", description: 'Trigger placeholder' },
    { name: 'searchPlaceholder', type: 'string', default: "'Search…'", description: 'Search input placeholder' },
    { name: 'emptyText', type: 'string', default: "'No results.'", description: 'Empty state message' },
    { name: 'align', type: "'start' | 'end'", default: "'start'", description: 'Popover alignment' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the trigger' },
    { name: 'className', type: 'string', default: 'undefined', description: 'Additional class for the wrapper (set width, e.g. w-72)' },
    { name: 'aria-label', type: 'string', default: 'placeholder', description: 'Accessible name for the combobox' },
  ],
  accessibility: [
    'role="combobox" trigger + role="listbox" with role="option" children',
    'aria-activedescendant tracks the highlighted option; aria-disabled on disabled options',
    'Full keyboard support: ArrowDown/Up, Home/End, Enter selects, Escape closes and restores focus',
  ],
  usageCode: `import { Combobox, type ComboboxOption } from "@/components/ui/combobox";

const frameworks: ComboboxOption[] = [
  { value: "next", label: "Next.js", description: "React framework" },
  { value: "remix", label: "Remix", description: "Web standards" },
  { value: "astro", label: "Astro", description: "Content sites", keywords: ["islands"] },
  { value: "vite", label: "Vite", disabled: true },
];

const [fw, setFw] = React.useState<string | null>("next");

<Combobox options={frameworks} value={fw} onValueChange={setFw} placeholder="Framework" />`,
};

export default meta;
