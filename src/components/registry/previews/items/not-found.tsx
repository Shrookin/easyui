import { Illustration } from '../../../ui/NotFound';
import type { ComponentPreviewProps } from '../types';

export default function Preview({ isHovered = false }: ComponentPreviewProps) {
  return (
    <div className="w-full h-full min-h-[220px] flex flex-col items-center justify-center p-3 select-none overflow-hidden">
      <div className="scale-[0.52] sm:scale-[0.58] origin-center shrink-0 -my-12 sm:-my-10 flex items-center justify-center pointer-events-none">
        <Illustration parallax={isHovered} />
      </div>

      <div className="text-center mt-2 space-y-0.5">
        <p className="text-xs font-semibold text-text-primary tracking-tight">
          This page took a wrong turn.
        </p>
        <p className="text-[11px] text-text-muted">
          Error 404 · Page not found
        </p>
      </div>
    </div>
  );
}
