import React from 'react';
import { Badge, type BadgeVariant, type BadgeTone } from '../ui/badge';
import { cn } from '../../lib/utils';

export interface NewBadgeProps {
  className?: string;
  size?: 'sm' | 'xs';
  variant?: BadgeVariant;
  tone?: BadgeTone;
}

export const NewBadge: React.FC<NewBadgeProps> = ({
  className,
  size = 'xs',
  variant = 'soft',
  tone = 'neutral',
}) => {
  return (
    <Badge
      variant={variant}
      tone={tone}
      role="status"
      aria-label="New component"
      style={{ fontFamily: "var(--font-sans, 'Geist', sans-serif)" }}
      className={cn(
        'font-sans select-none font-medium tracking-wide uppercase rounded-full border border-neutral-200/80 dark:border-neutral-700/60 shadow-2xs',
        size === 'xs'
          ? 'h-4.5 px-2 text-[10px] leading-none'
          : 'h-5.5 px-2.5 text-[11px] leading-none',
        className
      )}
    >
      NEW
    </Badge>
  );
};
