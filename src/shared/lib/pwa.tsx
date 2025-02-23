import { AnimatePresence } from '@kom-shared/ui';
import { useEffect, useState } from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';

export function ReloadPrompt() {
  const {
    needRefresh: [needRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered() {
      // console.log('SW зарегистрирован');
    },
    onRegisterError() {
      // console.log('Ошибка SW:', error);
    },
  });

  const handleRefresh = () => {
    void updateServiceWorker(true);
  };

  if (!needRefresh) {
    return null;
  }

  return (
    <div className='fixed bottom-4 right-4 z-50 rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800'>
      <div className='mb-2 text-sm'>Доступно новое обновление приложения</div>
      <button className='rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600' onClick={handleRefresh}>
        Обновить
      </button>
    </div>
  );
}

export function OfflineIndicator() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <AnimatePresence
      show={!isOnline}
      className='motion-duration-400 fixed bottom-4 left-1/2 z-50 -translate-x-1/2'
      inClass='motion-opacity-in-0 motion-blur-in-md'
      outClass='motion-opacity-out-0 motion-blur-out-md'
    >
      <div className='bg-default/40 rounded-full px-5 py-3 text-sm backdrop-blur-md'>Вы находитесь в офлайн режиме</div>
    </AnimatePresence>
  );
}
