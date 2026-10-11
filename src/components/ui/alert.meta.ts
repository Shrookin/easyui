import type { EasyUIComponentMeta } from '../../types/component';

const meta: EasyUIComponentMeta = {
  title: 'Alert',
  description: 'An alert component that collapses smoothly in height and opacity on dismissal, with tone-aware icons, action slot, and accessibility roles.',
  category: 'Feedback',
  tagline: 'Smooth height collapse on dismissal with tone styling',
  badges: ['Height Collapse', 'Dismissible', 'Accessible Roles', 'Light & Dark'],
  createdAt: '2026-10-11',
  features: [
    'Dismissing collapses height and fades out smoothly without sudden content jumps',
    'Supports 5 semantic tones: neutral, info, success, warning, and danger',
    'Automatic matching Lucide icons with custom icon or icon={false} override',
    'Action slot on the right for buttons, retry triggers, or secondary actions',
    'Proper accessibility: role="alert" for danger/warning and role="status" for neutral/info/success',
  ],
  props: [
    { name: 'tone', type: "'neutral' | 'info' | 'success' | 'warning' | 'danger'", default: "'neutral'", description: 'Color tone and severity semantic level' },
    { name: 'icon', type: 'React.ReactNode | false', default: 'undefined', description: 'Custom icon element, or false to suppress icon' },
    { name: 'dismissible', type: 'boolean', default: 'false', description: 'Renders an interactive close button' },
    { name: 'onDismiss', type: '() => void', default: 'undefined', description: 'Callback invoked after the exit collapse animation completes' },
    { name: 'action', type: 'React.ReactNode', default: 'undefined', description: 'Optional right-hand action element (e.g. action button)' },
    { name: 'className', type: 'string', default: 'undefined', description: 'Additional CSS classes for the alert container' },
  ],
  accessibility: [
    'Applies role="alert" for high-priority warning/danger tones and role="status" for informative tones',
    'Dismiss button includes aria-label="Dismiss" and clear focus-visible rings',
    'High contrast color ratios in both light and dark themes',
  ],
  usageCode: `import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

<Alert tone="danger" dismissible onDismiss={() => handleDismiss()}>
  <AlertTitle>Payment failed</AlertTitle>
  <AlertDescription>Your card was declined. Please try another card.</AlertDescription>
</Alert>

<Alert tone="success">
  <AlertTitle>Changes saved successfully</AlertTitle>
</Alert>`,
};

export default meta;
