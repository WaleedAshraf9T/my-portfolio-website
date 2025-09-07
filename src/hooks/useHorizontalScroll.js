'use client';
import { useRef, useEffect } from 'react';

export function useHorizontalScroll() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const element = scrollRef.current;
    if (element) {
      let isDown = false;
      let startX;
      let scrollLeft;

      // Mouse wheel scroll (existing functionality)
      const onWheel = (e) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        element.scrollLeft += e.deltaY;
      };

      // Mouse drag functionality
      const onMouseDown = (e) => {
        isDown = true;
        element.style.cursor = 'grabbing';
        element.style.userSelect = 'none';
        startX = e.pageX - element.offsetLeft;
        scrollLeft = element.scrollLeft;
      };

      const onMouseLeave = () => {
        isDown = false;
        element.style.cursor = 'grab';
        element.style.userSelect = '';
      };

      const onMouseUp = () => {
        isDown = false;
        element.style.cursor = 'grab';
        element.style.userSelect = '';
      };

      const onMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - element.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scroll speed multiplier
        element.scrollLeft = scrollLeft - walk;
      };

      // Set initial cursor
      element.style.cursor = 'grab';

      // Add event listeners
      element.addEventListener('wheel', onWheel);
      element.addEventListener('mousedown', onMouseDown);
      element.addEventListener('mouseleave', onMouseLeave);
      element.addEventListener('mouseup', onMouseUp);
      element.addEventListener('mousemove', onMouseMove);

      // Cleanup
      return () => {
        element.removeEventListener('wheel', onWheel);
        element.removeEventListener('mousedown', onMouseDown);
        element.removeEventListener('mouseleave', onMouseLeave);
        element.removeEventListener('mouseup', onMouseUp);
        element.removeEventListener('mousemove', onMouseMove);
      };
    }
  }, []);

  return scrollRef;
}