import { createFileRoute } from '@tanstack/react-router';

import { Flex } from '@/global/ui/primitives/flex';
import { Typo } from '@/global/ui/primitives/typo';

export const Route = createFileRoute('/(guard)/_guard/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Flex className=''>
      <Typo as='h5'>Hello</Typo>
    </Flex>
  );
}
