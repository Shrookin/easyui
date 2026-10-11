import { motion } from 'framer-motion';
import { Check, ChevronsUpDown, Search } from 'lucide-react';
import type { ComponentPreviewProps } from '../types';

const OPTIONS = [
  { label: 'Next.js', selected: true },
  { label: 'Remix', selected: false },
  { label: 'Astro', selected: false },
];
const ROW = 24; // h-6 rows, so the highlight steps exactly one row
const SPRING = { type: 'spring', stiffness: 520, damping: 40 } as const;

export default function Preview({ isHovered = false }: ComponentPreviewProps) {
  return (
    <div className="h-52 flex flex-col items-center justify-center p-4 pointer-events-none">
      {/* trigger */}
      <div className="flex h-8 w-48 items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--bg)] px-2.5 text-[11px] text-[var(--text-primary)]">
        <span className="flex-1 truncate text-left">Next.js</span>
        <ChevronsUpDown className="h-3.5 w-3.5 shrink-0 text-[var(--text-muted)]" />
      </div>

      {/* listbox */}
      <motion.div
        initial={false}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.96,
          y: isHovered ? 0 : -6,
        }}
        transition={SPRING}
        style={{ transformOrigin: 'top left' }}
        className="mt-1.5 w-48 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg)] shadow-[var(--shadow-elevated)]"
      >
        {/* search */}
        <div className="flex items-center gap-1.5 border-b border-[var(--border)] px-2.5">
          <Search className="h-3 w-3 shrink-0 text-[var(--text-muted)]" />
          <span className="text-[10px] leading-6 text-[var(--text-muted)]">Search…</span>
        </div>

        <div className="relative p-1">
          {/* one highlight that glides to the active row */}
          <motion.span
            aria-hidden
            initial={false}
            animate={{ y: isHovered ? ROW : 0 }}
            transition={SPRING}
            className="absolute inset-x-1 top-1 h-6 rounded-md bg-[var(--surface-raised)]"
          />
          {OPTIONS.map(({ label, selected }) => (
            <div
              key={label}
              className="relative flex h-6 items-center gap-2 rounded-md px-1.5 text-[10px] text-[var(--text-secondary)]"
            >
              <span className="flex-1 truncate">{label}</span>
              {selected && <Check className="h-3 w-3 text-[var(--text-primary)]" />}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
