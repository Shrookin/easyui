import { motion } from 'framer-motion';
import type { ComponentPreviewProps } from '../types';

const fill = { duration: 0.35, ease: [0.32, 0.72, 0, 1] } as const;
const spring = { type: 'spring', stiffness: 420, damping: 34 } as const;

export default function Preview({ isHovered = false }: ComponentPreviewProps) {
  const currentStep = isHovered ? 1 : 0;

  return (
    <div className="h-52 flex flex-col items-center justify-center p-4 pointer-events-none select-none">
      <div className="flex w-full max-w-[240px] items-center">
        {/* Step 1 */}
        <div className="flex items-center">
          <span
            className={`relative grid size-6 place-items-center rounded-full border text-[10px] font-medium transition-colors duration-300 ${
              currentStep > 0
                ? 'border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900'
                : 'border-neutral-900 text-neutral-900 dark:border-white dark:text-white'
            }`}
          >
            {currentStep === 0 && (
              <motion.span
                layoutId="stepper-preview-ring"
                transition={spring}
                className="absolute -inset-[4px] rounded-full border border-neutral-300 dark:border-neutral-700"
              />
            )}
            {currentStep > 0 ? (
              <svg
                viewBox="0 0 24 24"
                className="size-3"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <motion.path
                  d="M5 12.5l4.5 4.5L19 7.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </svg>
            ) : (
              '1'
            )}
          </span>
        </div>

        {/* Connector 1 */}
        <div className="relative mx-2 h-0.5 flex-1 overflow-hidden bg-neutral-200 dark:bg-neutral-800">
          <motion.span
            initial={false}
            animate={{ scaleX: currentStep > 0 ? 1 : 0 }}
            transition={fill}
            className="absolute inset-0 origin-left bg-neutral-900 dark:bg-white"
          />
        </div>

        {/* Step 2 */}
        <div className="flex items-center">
          <span
            className={`relative grid size-6 place-items-center rounded-full border text-[10px] font-medium transition-colors duration-300 ${
              currentStep === 1
                ? 'border-neutral-900 text-neutral-900 dark:border-white dark:text-white'
                : 'border-neutral-200 text-neutral-400 dark:border-neutral-800 dark:text-neutral-500'
            }`}
          >
            {currentStep === 1 && (
              <motion.span
                layoutId="stepper-preview-ring"
                transition={spring}
                className="absolute -inset-[4px] rounded-full border border-neutral-300 dark:border-neutral-700"
              />
            )}
            2
          </span>
        </div>

        {/* Connector 2 */}
        <div className="relative mx-2 h-0.5 flex-1 overflow-hidden bg-neutral-200 dark:bg-neutral-800">
          <motion.span
            initial={false}
            animate={{ scaleX: 0 }}
            className="absolute inset-0 origin-left bg-neutral-900 dark:bg-white"
          />
        </div>

        {/* Step 3 */}
        <div className="flex items-center">
          <span className="grid size-6 place-items-center rounded-full border border-neutral-200 text-[10px] font-medium text-neutral-400 dark:border-neutral-800 dark:text-neutral-500">
            3
          </span>
        </div>
      </div>

      <div className="mt-4 flex w-full max-w-[240px] justify-between px-1 text-[9px] text-[var(--text-muted)]">
        <span className={currentStep >= 0 ? 'text-[var(--text-primary)] font-medium' : ''}>Details</span>
        <span className={currentStep >= 1 ? 'text-[var(--text-primary)] font-medium' : ''}>Review</span>
        <span>Finish</span>
      </div>
    </div>
  );
}
