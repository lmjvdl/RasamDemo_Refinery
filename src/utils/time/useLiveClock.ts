'use client';

import { useEffect, useState } from 'react';
import { formatUnixTimestamp } from './formatDate';

export function useLiveClock(initialUnixTime: number) {
  const [unixTime, setUnixTime] = useState(initialUnixTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setUnixTime(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return formatUnixTimestamp(unixTime);
}
