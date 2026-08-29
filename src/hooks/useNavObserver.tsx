import {useEffect} from 'react';

import {SectionId} from '../data/data';

export const useNavObserver = (selectors: string, handler: (section: SectionId | null) => void) => {
  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      const headings = Array.from(document.querySelectorAll(selectors)).filter(Boolean) as HTMLElement[];
      if (!headings.length) return;

      const scrollY = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // 1. Near the very top of the page -> First section (Hero / Home)
      if (scrollY < 120) {
        const firstId = headings[0].getAttribute('id');
        if (firstId) handler(firstId as SectionId);
        return;
      }

      // 2. Near the bottom of the page -> Last section (Portfolio / Projects)
      if (scrollY + windowHeight >= docHeight - 80) {
        const lastId = headings[headings.length - 1].getAttribute('id');
        if (lastId) handler(lastId as SectionId);
        return;
      }

      // 3. Focal point: section that spans across the 35% line from the top of the viewport
      const focalPoint = windowHeight * 0.35;
      let activeId: string | null = null;

      for (const section of headings) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= focalPoint && rect.bottom > focalPoint) {
          activeId = section.getAttribute('id');
          break;
        }
      }

      // Fallback: Pick the section with top edge closest to the viewport focal line
      if (!activeId) {
        let minDistance = Infinity;
        for (const section of headings) {
          const rect = section.getBoundingClientRect();
          const distance = Math.abs(rect.top - focalPoint);
          if (distance < minDistance) {
            minDistance = distance;
            activeId = section.getAttribute('id');
          }
        }
      }

      if (activeId) {
        handler(activeId as SectionId);
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial check on mount
    updateActiveSection();

    window.addEventListener('scroll', handleScroll, {passive: true});
    window.addEventListener('resize', handleScroll, {passive: true});

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [selectors, handler]);
};
