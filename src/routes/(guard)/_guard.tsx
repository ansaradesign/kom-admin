import { createFileRoute, Navigate, Outlet } from '@tanstack/react-router';

import { Header } from '@/global/widgets/header';

export const Route = createFileRoute('/(guard)/_guard')({
  component: RouteComponent,
});

function RouteComponent() {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to='/sign-in' />;
  }

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
