import type { EasyUIComponentMeta } from '../../types/component';

const meta: EasyUIComponentMeta = {
  title: 'Badge',
  description: 'An animated status badge where numbers and strings roll on value change, with live status pulse dot, removable chip actions, and rich tone variants.',
  category: 'Feedback',
  tagline: 'Rolling number animation & live status pulse',
  badges: ['Roll Animation', 'Status Dot', 'Removable Chip', 'Light & Dark'],
  createdAt: '2026-10-11',
  features: [
    'Numbers and text roll up with spring physics when updated',
    'Optional live status dot with pulsing radar ping effect',
    'Interactive removable chip support with animated onRemove trigger',
    '3 styles (soft, solid, outline) × 4 tones (neutral, success, warning, danger)',
    'Motion-ready component accepting initial, animate, and layout animations directly',
  ],
  props: [
    { name: 'variant', type: "'soft' | 'solid' | 'outline'", default: "'soft'", description: 'Visual style of the badge' },
    { name: 'tone', type: "'neutral' | 'success' | 'warning' | 'danger'", default: "'neutral'", description: 'Color tone of the badge' },
    { name: 'dot', type: 'boolean', default: 'false', description: 'Displays a leading status indicator dot' },
    { name: 'pulse', type: 'boolean', default: 'false', description: 'Adds a soft animated pulse ring to the status dot' },
    { name: 'onRemove', type: '() => void', default: 'undefined', description: 'Callback enabling dismissible chip mode with an × icon' },
    { name: 'children', type: 'React.ReactNode', default: 'undefined', description: 'Badge contents (strings & numbers auto-roll on change)' },
  ],
  accessibility: [
    'Removable chips provide aria-label="Remove" and focus visible rings',
    'Pulse animations respect motion-reduce preferences',
    'High-contrast tone combinations tested in both light and dark modes',
  ],
  usageCode: `import { Badge } from "@/components/ui/badge";

<Badge>Draft</Badge>
<Badge tone="success" dot pulse>Live</Badge>
<Badge variant="solid" tone="danger">{unreadCount}</Badge>
<Badge variant="outline" tone="warning" onRemove={() => removeTag()}>Tag</Badge>`,
};

export default meta;
