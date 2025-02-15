import { createFileRoute, Navigate, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/(auth)/_auth')({
  component: RouteComponent,
});

function RouteComponent() {
  const token = localStorage.getItem('token');

  if (token) {
    return <Navigate to='/' />;
  }

  return <Outlet />;
}
