'use client';
import { useRef, useEffect } from 'react';

export function useHorizontalScroll() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const element = scrollRef.current;
    if (element) {
      const onWheel = (e) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        element.scrollLeft += e.deltaY;
      };
      element.addEventListener('wheel', onWheel);
      return () => element.removeEventListener('wheel', onWheel);
    }
  }, []);

  return scrollRef;
}