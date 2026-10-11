import type { EasyUIComponentMeta } from '../../types/component';

const meta: EasyUIComponentMeta = {
  title: 'Date Picker',
  description: 'A date picker (and date range picker) whose popover pops from the trigger edge with a spring, flips above when there is no room below, lands the selection pill, then closes and hands focus back to the trigger.',
  category: 'Forms',
  tagline: 'Origin-aware popover with a spring landing',
  badges: ['Spring In', 'Flip Up', 'Keyboard Friendly', 'Light & Dark'],
  createdAt: '2026-10-11',
  features: [
    'Popover scales from the trigger edge with a spring and flips above when space is tight',
    'Single date + date range pickers share the same Calendar underneath',
    'Selection pill lands before the popover closes, then focus returns to the trigger',
    'Esc and outside-click close; controlled or uncontrolled value',
    'Supports all Calendar options: minDate, maxDate, isDateDisabled, weekStartsOn, locale',
  ],
  props: [
    { name: 'value', type: 'Date | null | DateRange', default: 'undefined', description: 'Controlled selected value' },
    { name: 'defaultValue', type: 'Date | null | DateRange', default: 'null', description: 'Initial value (uncontrolled)' },
    { name: 'onChange', type: '(date: Date | null) => void | (range: DateRange) => void', default: 'undefined', description: 'Selection change callback' },
    { name: 'placeholder', type: 'string', default: "'Pick a date' / 'Pick a range'", description: 'Trigger placeholder text' },
    { name: 'align', type: "'start' | 'end'", default: "'start'", description: 'Popover alignment relative to the trigger' },
    { name: 'side', type: "'bottom' | 'top' | 'auto'", default: "'auto'", description: "Popover placement; 'auto' opens downward on mobile and flips on desktop when tight" },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the trigger' },
    { name: 'className', type: 'string', default: 'undefined', description: 'Additional class for the wrapper (set width, e.g. w-80)' },
  ],
  accessibility: [
    'Trigger has aria-haspopup="dialog" and aria-expanded',
    'Popover closes on Escape and returns focus to the trigger',
    'Calendar inside is fully keyboard navigable',
  ],
  usageCode: `import { DatePicker, DateRangePicker } from "@/components/ui/date-picker";

<DatePicker value={date} onChange={setDate} placeholder="Due date" minDate={new Date()} />

<DateRangePicker value={range} onChange={setRange} />`,
};

export default meta;
