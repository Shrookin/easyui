import { motion } from 'framer-motion';
import { ChevronRight, Home, FolderGit2, Layers } from 'lucide-react';
import type { ComponentPreviewProps } from '../types';

const spring = { type: 'spring', stiffness: 450, damping: 35 } as const;

export default function Preview({ isHovered = false }: ComponentPreviewProps) {
  // Gliding highlight pill shifts between breadcrumbs on hover
  const activeIndex = isHovered ? 2 : 1;

  const items = [
    { label: 'Home', icon: <Home className="size-3" /> },
    { label: 'Components', icon: <Layers className="size-3" /> },
    { label: 'Breadcrumb', icon: <FolderGit2 className="size-3" /> },
  ];

  return (
    <div className="h-52 flex flex-col items-center justify-center p-4 pointer-events-none select-none">
      <div className="flex items-center gap-1 rounded-xl border border-[var(--border)] bg-[var(--bg)]/80 px-3 py-2 shadow-[var(--shadow-card)] backdrop-blur-xs">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          const isActive = idx === activeIndex;

          return (
            <div key={item.label} className="flex items-center gap-1">
              {idx > 0 && (
                <ChevronRight className="size-3 text-[var(--text-muted)] opacity-60" />
              )}
              <div
                className={`relative flex items-center gap-1.5 rounded-md px-2 py-1 text-xs transition-colors duration-200 ${
                  isLast
                    ? 'font-medium text-[var(--text-primary)]'
                    : 'text-[var(--text-secondary)]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="preview-breadcrumb-pill"
                    transition={spring}
                    className="absolute inset-0 rounded-md bg-neutral-200/70 dark:bg-neutral-800"
                  />
                )}
                <span className="relative z-10 text-[var(--text-muted)]">{item.icon}</span>
                <span className="relative z-10 text-[11px]">{item.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
