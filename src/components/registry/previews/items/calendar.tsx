import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { ComponentPreviewProps } from '../types';

// October 2026 — the 1st falls on a Thursday (offset 4 with Sunday first)
const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const DAYS = [...Array(35)].map((_, i) => (i >= 4 ? i - 3 : null));
const SPRING = { type: 'spring', stiffness: 460, damping: 36 } as const;

export default function Preview({ isHovered = false }: ComponentPreviewProps) {
  // selection pill glides down a column: Oct 11 -> Oct 18
  const pillY = isHovered ? 60 : 40;
  return (
    <div className="h-52 flex items-center justify-center p-4 pointer-events-none">
      <div className="w-fit select-none rounded-xl border border-[var(--border)] bg-[var(--bg)] p-2.5 shadow-[var(--shadow-elevated)]">
        {/* header */}
        <div className="mb-1.5 flex h-5 items-center justify-between px-1">
          <ChevronLeft className="h-3 w-3 text-[var(--text-muted)]" />
          <span className="text-[10px] font-medium text-[var(--text-primary)]">October 2026</span>
          <ChevronRight className="h-3 w-3 text-[var(--text-muted)]" />
        </div>

        {/* weekdays */}
        <div className="grid grid-cols-7" aria-hidden>
          {WEEKDAYS.map((w, i) => (
            <div key={i} className="grid h-4 w-5 place-items-center text-[8px] text-[var(--text-muted)]">
              {w}
            </div>
          ))}
        </div>

        {/* days */}
        <div className="relative grid grid-cols-7">
          <motion.span
            aria-hidden
            initial={false}
            animate={{ x: 0, y: pillY }}
            transition={SPRING}
            className="absolute left-0 top-0 size-5 rounded-md bg-[var(--text-primary)]"
          />
          {DAYS.map((d, i) => {
            const isSelected = isHovered ? d === 18 : d === 11;
            return (
              <span
                key={i}
                className={`relative z-10 grid h-5 w-5 place-items-center rounded-md text-[9px] tabular-nums transition-colors duration-150 ${
                  isSelected ? 'text-[var(--bg)] font-semibold' : 'text-[var(--text-secondary)]'
                }`}
              >
                {d ?? ''}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
