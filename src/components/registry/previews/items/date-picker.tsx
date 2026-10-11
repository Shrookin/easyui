import { motion } from 'framer-motion';
import { CalendarDays } from 'lucide-react';
import type { ComponentPreviewProps } from '../types';

// October 2026 — the 1st falls on a Thursday (offset 4 with Sunday first)
const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const DAYS = [...Array(35)].map((_, i) => (i >= 4 ? i - 3 : null));
const SPRING = { type: 'spring', stiffness: 520, damping: 38 } as const;

export default function Preview({ isHovered = false }: ComponentPreviewProps) {
  return (
    <div className="h-52 flex flex-col items-center justify-center p-4 pointer-events-none">
      {/* trigger */}
      <div className="flex h-8 w-44 items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--bg)] px-2.5 text-[11px] text-[var(--text-primary)] shadow-2xs">
        <CalendarDays className="h-3.5 w-3.5 shrink-0 text-[var(--text-muted)]" />
        <span className="truncate font-medium">Oct 11, 2026</span>
      </div>

      {/* popover pops from the trigger edge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: -4 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.96,
          y: isHovered ? 0 : -4,
        }}
        transition={SPRING}
        style={{
          transformOrigin: 'top center',
          visibility: isHovered ? 'visible' : 'hidden',
        }}
        className="mt-1.5 w-44 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg)] p-2 shadow-[var(--shadow-elevated)]"
      >
        <p className="mb-1 text-center text-[9px] font-medium text-[var(--text-primary)]">October 2026</p>

        {/* weekdays */}
        <div className="grid grid-cols-7" aria-hidden>
          {WEEKDAYS.map((w, i) => (
            <div key={i} className="grid h-3.5 w-5 place-items-center text-[7px] text-[var(--text-muted)]">
              {w}
            </div>
          ))}
        </div>

        {/* days */}
        <div className="grid grid-cols-7">
          {DAYS.map((d, i) => (
            <span
              key={i}
              className={`grid h-4.5 w-5 place-items-center rounded-md text-[8px] tabular-nums ${
                d === 11
                  ? 'bg-[var(--text-primary)] font-medium text-[var(--bg)]'
                  : 'text-[var(--text-secondary)]'
              }`}
            >
              {d ?? ''}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
