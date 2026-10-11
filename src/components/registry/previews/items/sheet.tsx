import { motion } from 'framer-motion';
import type { ComponentPreviewProps } from '../types';

const SPRING = { type: 'spring', stiffness: 380, damping: 36 } as const;

export default function Preview({ isHovered = false }: ComponentPreviewProps) {
  return (
    <div className="h-52 flex items-center justify-center p-4 pointer-events-none">
      {/* mini page */}
      <div className="relative h-40 w-60 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg)] shadow-[var(--shadow-elevated)]">
        <div className="space-y-2 p-3.5">
          <div className="h-2 w-24 rounded-full bg-[var(--surface-raised)]" />
          <div className="h-2 w-36 rounded-full bg-[var(--surface-raised)]" />
          <div className="h-2 w-28 rounded-full bg-[var(--surface-raised)]" />
        </div>

        {/* backdrop */}
        <motion.div
          aria-hidden
          initial={false}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 bg-black/30"
        />

        {/* sheet sliding in from the right */}
        <motion.div
          initial={false}
          animate={{ x: isHovered ? 0 : '100%' }}
          transition={SPRING}
          className="absolute inset-y-0 right-0 flex w-28 flex-col border-l border-[var(--border)] bg-[var(--surface)] p-2.5"
        >
          <p className="text-[9px] font-semibold text-[var(--text-primary)]">Edit profile</p>
          <div className="mt-2 space-y-1.5">
            <div className="h-1.5 w-full rounded-full bg-[var(--surface-raised)]" />
            <div className="h-1.5 w-4/5 rounded-full bg-[var(--surface-raised)]" />
            <div className="h-1.5 w-3/5 rounded-full bg-[var(--surface-raised)]" />
          </div>
          <div className="mt-auto flex items-center justify-end gap-1.5 border-t border-[var(--border)] pt-2">
            <span className="text-[8px] text-[var(--text-muted)]">Cancel</span>
            <span className="rounded bg-[var(--text-primary)] px-1.5 py-0.5 text-[8px] text-[var(--bg)]">Save</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
