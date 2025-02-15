import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { Trans } from '@lingui/react/macro';

export const Route = createFileRoute('/(auth)/_auth/sign-in')({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          localStorage.setItem('token', '123');
          void navigate({ to: '/' });
        }}
      >
        <Trans>Войти</Trans>
      </button>
    </div>
  );
}
