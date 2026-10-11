import { motion } from 'framer-motion';
import { Alert, AlertTitle, AlertDescription } from '../../../ui/alert';
import type { ComponentPreviewProps } from '../types';

export default function Preview({ isHovered = false }: ComponentPreviewProps) {
  return (
    <div className="h-52 flex flex-col items-center justify-center p-4 pointer-events-none select-none">
      <motion.div
        animate={{
          scale: isHovered ? 1.02 : 1,
          y: isHovered ? -2 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="w-full max-w-[250px]"
      >
        <Alert tone="success" dismissible className="p-3 text-xs">
          <AlertTitle className="text-xs">Operation successful</AlertTitle>
          <AlertDescription className="text-[11px] leading-tight">
            Your components have been deployed cleanly to production.
          </AlertDescription>
        </Alert>
      </motion.div>
    </div>
  );
}
