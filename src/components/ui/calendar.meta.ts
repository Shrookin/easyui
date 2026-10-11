import type { EasyUIComponentMeta } from '../../types/component';

const meta: EasyUIComponentMeta = {
  title: 'Calendar',
  description: 'A dependency-free calendar with a selected-day pill that glides from date to date, range support with a live hover preview band, and months that slide in the direction you navigate.',
  category: 'Forms',
  tagline: 'Gliding selection pill & directional month slides',
  badges: ['Layout Springs', 'Keyboard Friendly', 'Light & Dark', 'Zero Dependencies'],
  createdAt: '2026-10-11',
  features: [
    'Selected day is one pill that springs between dates; range mode glides start and end pills separately',
    'Live hover preview band while picking a range',
    'Months slide in the navigation direction; fixed height so nothing jumps between months',
    'Single + range modes, min/max dates, and custom isDateDisabled',
    'Full keyboard navigation: arrows, Home/End, PageUp/PageDown (Shift = year)',
    'No date library — pure Intl + Date helpers',
  ],
  props: [
    { name: 'mode', type: "'single' | 'range'", default: "'single'", description: 'Selection mode' },
    { name: 'value', type: 'Date | null | DateRange', default: 'undefined', description: 'Controlled selected date or range' },
    { name: 'defaultValue', type: 'Date | null | DateRange', default: 'null', description: 'Initial selection (uncontrolled)' },
    { name: 'onChange', type: '(date: Date | null) => void | (range: DateRange) => void', default: 'undefined', description: 'Selection change callback' },
    { name: 'defaultMonth', type: 'Date', default: 'undefined', description: 'Month shown initially' },
    { name: 'minDate', type: 'Date', default: 'undefined', description: 'Earliest selectable date' },
    { name: 'maxDate', type: 'Date', default: 'undefined', description: 'Latest selectable date' },
    { name: 'isDateDisabled', type: '(date: Date) => boolean', default: 'undefined', description: 'Predicate to disable specific dates' },
    { name: 'weekStartsOn', type: '0 | 1', default: '0', description: 'First day of the week (0 = Sunday, 1 = Monday)' },
    { name: 'locale', type: 'string', default: 'undefined', description: 'BCP 47 locale for formatting' },
    { name: 'className', type: 'string', default: 'undefined', description: 'Additional class for the root' },
  ],
  accessibility: [
    'role="grid" with labeled rows and cells; aria-selected on picked days',
    'Full keyboard navigation with roving tabIndex and aria-live month announcements',
    'Disabled dates expose aria-disabled and skip selection',
  ],
  usageCode: `import { Calendar, type DateRange } from "@/components/ui/calendar";

// single
const [date, setDate] = React.useState<Date | null>(null);
<Calendar value={date} onChange={setDate} />

// range
const [range, setRange] = React.useState<DateRange>({ from: null, to: null });
<Calendar mode="range" value={range} onChange={setRange} />

// limits
<Calendar minDate={new Date()} isDateDisabled={(d) => d.getDay() === 0} weekStartsOn={1} />`,
};

export default meta;
