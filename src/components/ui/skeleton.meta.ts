import type { EasyUIComponentMeta } from '../../types/component';

const meta: EasyUIComponentMeta = {
  title: 'Skeleton',
  description: 'Placeholder blocks with a subtle light sweep, text/avatar presets, and a SkeletonReveal container that eases real content in with a gentle rise and un-blur.',
  category: 'Feedback',
  tagline: 'Subtle shimmer sweep and smooth content reveal',
  badges: ['Light Sweep', 'Content Reveal', 'Avatar & Text', 'Light & Dark'],
  createdAt: '2026-10-11',
  features: [
    'Quiet shimmer blocks with smooth gradient light sweep animation',
    'SkeletonReveal transitions seamlessly to live content using fade, subtle rise, and un-blur',
    'Convenient SkeletonText preset with natural staggered line length distribution',
    'SkeletonAvatar preset for profile pictures and user thumbnails',
    'Clean reduced-motion fallback that disables continuous sweeping',
  ],
  props: [
    { name: 'className', type: 'string', default: 'undefined', description: 'CSS classes to size and position the skeleton block' },
    { name: 'lines', type: 'number', default: '3', description: 'Number of lines for the SkeletonText component' },
    { name: 'size', type: 'number', default: '40', description: 'Pixel size for the circular SkeletonAvatar component' },
    { name: 'loading', type: 'boolean', default: 'undefined', description: 'Active loading state for the SkeletonReveal wrapper' },
    { name: 'skeleton', type: 'React.ReactNode', default: 'undefined', description: 'Placeholder element rendered while loading is true' },
  ],
  accessibility: [
    'Applies aria-hidden to placeholder skeletons to avoid cluttering screen readers',
    'SkeletonReveal uses role="status" and aria-busy="true" during loading',
    'Respects prefers-reduced-motion without disorienting fast flashing',
  ],
  usageCode: `import { Skeleton, SkeletonAvatar, SkeletonText, SkeletonReveal } from "@/components/ui/skeleton";

<SkeletonReveal
  loading={isLoading}
  skeleton={
    <div className="flex gap-3">
      <SkeletonAvatar size={40} />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-1/3" />
        <SkeletonText lines={2} />
      </div>
    </div>
  }
>
  <UserCard user={user} />
</SkeletonReveal>`,
};

export default meta;
