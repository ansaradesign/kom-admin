import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(guard)/_guard/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div className=''></div>;
}
