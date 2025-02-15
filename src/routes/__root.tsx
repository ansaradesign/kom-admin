import { createRootRoute, Outlet } from '@tanstack/react-router';
import { lazy, Suspense } from 'react';

const enableDevtools = false; //process.env.NODE_ENV === "development";

const TanStackRouterDevtools = !enableDevtools
  ? () => null
  : lazy(() =>
      import('@tanstack/router-devtools').then((res) => ({
        default: res.TanStackRouterDevtools,
        // For Embedded Mode
        // default: res.TanStackRouterDevtoolsPanel
      })),
    );

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />

      <Suspense>
        <TanStackRouterDevtools position='bottom-right' />
      </Suspense>
    </>
  ),
});
