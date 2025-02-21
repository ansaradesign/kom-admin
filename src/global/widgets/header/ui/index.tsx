import { Flex } from '@/global/ui/primitives/flex';

export function Header() {
  return (
    <Flex as='header' className='sticky top-0 z-50 h-16 items-center gap-8 border-b border-divider bg-background px-4'>
      <Flex className='items-center gap-2'></Flex>
    </Flex>
  );
}
