import { AnimatePresence, motion } from 'framer-motion';
import type { ComponentPreviewProps } from '../types';

export default function Preview({ isHovered = false }: ComponentPreviewProps) {
  // on hover, reveal the actual card with unblur + rise!
  const showContent = isHovered;

  return (
    <div className="h-52 flex flex-col items-center justify-center p-4 pointer-events-none select-none">
      <div className="w-full max-w-[220px] rounded-xl border border-[var(--border)] bg-[var(--bg)] p-3 shadow-xs">
        <AnimatePresence mode="wait" initial={false}>
          {!showContent ? (
            <motion.div
              key="skeleton"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="flex items-center gap-3"
            >
              {/* avatar skeleton with light sweep */}
              <div className="relative size-10 shrink-0 overflow-hidden rounded-full bg-neutral-200/80 dark:bg-neutral-800">
                <motion.span
                  className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.6),transparent)] dark:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)]"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>

              {/* text skeletons */}
              <div className="flex-1 space-y-2">
                <div className="relative h-3 w-3/4 overflow-hidden rounded-sm bg-neutral-200/80 dark:bg-neutral-800">
                  <motion.span
                    className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.6),transparent)] dark:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)]"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </div>
                <div className="relative h-2.5 w-1/2 overflow-hidden rounded-sm bg-neutral-200/80 dark:bg-neutral-800">
                  <motion.span
                    className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.6),transparent)] dark:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)]"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 5, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
              className="flex items-center gap-3"
            >
              <div className="grid size-10 shrink-0 place-items-center rounded-full bg-gradient-to-tr from-sky-500 to-indigo-500 text-xs font-semibold text-white">
                EU
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-medium text-[var(--text-primary)]">
                  EasyUI Studio
                </p>
                <p className="truncate text-[10px] text-[var(--text-muted)]">
                  Active designer
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
