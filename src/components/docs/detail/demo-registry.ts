import { DEMO_COMPONENTS } from './demo-components';
import { DEMO_ALIASES, DEMO_ROUTES, DEMO_ROUTE_MODULES } from './demo-route-registry';

export { DEMO_COMPONENTS, DEMO_ALIASES, DEMO_ROUTE_MODULES };

export const DEMOS_INTENTIONALLY_MISSING: readonly string[] = [];

export function resolveDemoId(idOrAlias: string): string {
  return DEMO_ALIASES[idOrAlias] ?? idOrAlias;
}

export function hasDemo(idOrAlias: string): boolean {
  return Object.prototype.hasOwnProperty.call(DEMO_ROUTE_MODULES, resolveDemoId(idOrAlias));
}

export function getDemoLoader(idOrAlias: string): (() => Promise<void>) | undefined {
  const route = DEMO_ROUTE_MODULES[resolveDemoId(idOrAlias) as keyof typeof DEMO_ROUTE_MODULES];
  if (!route) return undefined;
  return async () => {
    const module = await route.load();
    await module.preload();
  };
}

/** Preload a detail demo during prerender so its Suspense boundary is resolved. */
export async function preloadComponentDemo(componentId: string): Promise<void> {
  const demo = DEMO_ROUTES[resolveDemoId(componentId) as keyof typeof DEMO_ROUTES];
  if (!demo) return;

  try {
    await demo.preload();
  } catch {
    // Demo preload failures are non-fatal during prerender.
  }
}
