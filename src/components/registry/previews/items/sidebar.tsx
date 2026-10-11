import { motion } from 'framer-motion';
import { Folder, Home, Inbox, Settings } from 'lucide-react';
import type { ComponentPreviewProps } from '../types';

const items = [
  { id: 'home', label: 'Home', Icon: Home },
  { id: 'inbox', label: 'Inbox', Icon: Inbox, badge: '4' },
  { id: 'projects', label: 'Projects', Icon: Folder },
  { id: 'settings', label: 'Settings', Icon: Settings },
];

const SPRING = { type: 'spring', stiffness: 420, damping: 34 } as const;

export default function Preview({ isHovered = false }: ComponentPreviewProps) {
  const activeIndex = isHovered ? 2 : 1;
  return (
    <div className="h-52 flex items-center justify-center p-4 pointer-events-none">
      <div className="w-44 rounded-xl border border-[var(--border)] bg-[var(--bg)] p-2 shadow-[var(--shadow-elevated)]">
        {/* brand */}
        <div className="flex h-8 items-center gap-2 px-1.5">
          <span className="grid size-4 place-items-center rounded bg-[var(--text-primary)] text-[8px] font-bold text-[var(--bg)]">
            e
          </span>
          <span className="text-[11px] font-medium text-[var(--text-primary)]">easyui</span>
        </div>

        {/* items with gliding active pill */}
        <div className="relative mt-1.5 space-y-0.5">
          <motion.span
            aria-hidden
            initial={false}
            animate={{ y: activeIndex * 30 }}
            transition={SPRING}
            className="absolute inset-x-0 top-0 h-7 rounded-md bg-[var(--surface-raised)]"
          />
          {items.map(({ id, label, Icon, badge }, i) => (
            <div
              key={id}
              className={`relative flex h-7 items-center gap-2 rounded-md px-1.5 text-[11px] ${
                i === activeIndex ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              <span className="flex-1 truncate">{label}</span>
              {badge && (
                <span className="rounded bg-[var(--surface-raised)] px-1 text-[9px] tabular-nums text-[var(--text-muted)]">
                  {badge}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
