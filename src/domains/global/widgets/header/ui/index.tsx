import { Flex } from '@kom-shared/ui/primitives';

export function Header() {
  return (
    <Flex as='header' className='border-divider bg-background sticky top-0 z-50 h-16 items-center gap-8 border-b px-4'>
      <Flex className='items-center gap-2'></Flex>
    </Flex>
  );
}
