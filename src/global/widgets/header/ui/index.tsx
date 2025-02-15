import { Trans } from '@lingui/react/macro';

import { dynamicActivate } from '@/global/i18n/init';

export function Header() {
  return (
    <header className='sticky top-0 z-50 flex h-16 items-center gap-8 border-b border-divider bg-background px-4'>
      <h1>
        <Trans>Хедер</Trans>
      </h1>

      <div className='flex items-center gap-2'>
        <button className='rounded-md border border-divider p-2' onClick={() => void dynamicActivate('ru')}>
          русский
        </button>
        <button className='rounded-md border border-divider p-2' onClick={() => void dynamicActivate('en')}>
          английский
        </button>
      </div>
    </header>
  );
}
