import { Header } from '@kom-domains/global/widgets/header';
import { createFileRoute, Navigate, Outlet } from '@tanstack/react-router';

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
