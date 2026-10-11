import type { EasyUIComponentMeta } from '../../types/component';

const meta: EasyUIComponentMeta = {
  title: 'Stepper',
  description: 'A multi-step progress indicator with line fills, gliding active rings, drawing checkmarks, and direction-aware sliding step panels.',
  category: 'Navigation',
  tagline: 'Animated connector line, gliding focus ring, and step panels',
  badges: ['Connector Line', 'Draw Checkmark', 'Directional Panels', 'Light & Dark'],
  createdAt: '2026-10-11',
  features: [
    'Connector line fills smoothly as you advance through steps',
    'A single active indicator ring glides between steps using Framer Motion layoutId',
    'Completed step checkmark animates its stroke path on completion',
    'Direction-aware StepPanels: slides left/right depending on forward or backward navigation',
    'Horizontal and vertical layouts, clickable completed steps, and responsive mobile labels',
  ],
  props: [
    { name: 'steps', type: 'Step[]', default: 'undefined', description: 'List of steps with title and optional description' },
    { name: 'current', type: 'number', default: '0', description: 'Zero-based index of the active step' },
    { name: 'onStepChange', type: '(index: number) => void', default: 'undefined', description: 'Callback enabling jump-back clicks on completed steps' },
    { name: 'orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'", description: 'Layout direction of the stepper line' },
    { name: 'className', type: 'string', default: 'undefined', description: 'Additional CSS classes for the stepper container' },
  ],
  accessibility: [
    'Uses semantic <ol aria-label="Progress"> and <li> elements with aria-current="step"',
    'Provides hidden text "(completed)" for screen readers on completed steps',
    'Full keyboard navigation and visible focus rings for interactive step buttons',
  ],
  usageCode: `import { Stepper, StepPanels, type Step } from "@/components/ui/stepper";

const steps: Step[] = [
  { title: "Account", description: "Your details" },
  { title: "Workspace", description: "Name it" },
  { title: "Invite", description: "Optional" },
  { title: "Done" },
];

const [current, setCurrent] = React.useState(0);

<Stepper steps={steps} current={current} onStepChange={setCurrent} />
<StepPanels current={current}>
  <div>Step 1 content</div>
  <div>Step 2 content</div>
  <div>Step 3 content</div>
  <div>Step 4 content</div>
</StepPanels>`,
};

export default meta;
