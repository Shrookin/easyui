import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import type { ComponentPreviewProps } from '../types';

const spring = { type: 'spring', stiffness: 500, damping: 35 } as const;

export default function Preview({ isHovered = false }: ComponentPreviewProps) {
  const count = isHovered ? 12 : 5;

  return (
    <div className="h-52 flex flex-col items-center justify-center gap-3 p-4 pointer-events-none select-none">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {/* Live status badge with pulsing dot */}
        <span className="inline-flex h-6 items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 text-[11px] font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
          <span className="relative flex size-1.5">
            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500 opacity-60" />
            <span className="relative size-1.5 rounded-full bg-emerald-500" />
          </span>
          Live
        </span>

        {/* Rolling count badge */}
        <span className="inline-flex h-6 items-center gap-1 rounded-full bg-neutral-900 px-2.5 text-[11px] font-medium text-white dark:bg-white dark:text-neutral-900">
          <span>Updates</span>
          <span className="relative inline-flex overflow-hidden font-mono text-[10px]">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={count}
                initial={{ y: '70%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '-70%', opacity: 0 }}
                transition={spring}
                className="inline-block"
              >
                +{count}
              </motion.span>
            </AnimatePresence>
          </span>
        </span>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {/* Outline badge */}
        <span className="inline-flex h-6 items-center rounded-full border border-amber-200 px-2.5 text-[11px] font-medium text-amber-700 dark:border-amber-500/30 dark:text-amber-400">
          Beta
        </span>

        {/* Chip badge */}
        <span className="inline-flex h-6 items-center gap-1 rounded-full bg-neutral-100 pl-2.5 pr-1.5 text-[11px] font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
          <span>Component</span>
          <span className="grid size-3.5 place-items-center rounded-full opacity-60">
            <X className="size-2.5" />
          </span>
        </span>
      </div>
    </div>
  );
}
