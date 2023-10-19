import { useCallback, useEffect, useState } from 'react';
import { SectionEnum, sections } from '@/types';

function getElementWindowTop(elem: HTMLElement) {
  return elem && typeof elem.getBoundingClientRect === 'function'
    ? elem.getBoundingClientRect().top -
        document.body.getBoundingClientRect().top
    : 0;
}

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState<SectionEnum>(
    SectionEnum.ABOUT
  );

  const updateActiveState = useCallback(() => {
    const firstActiveSection = Object.keys(sections).find((section) => {
      const element = document.getElementById(section);
      if (element != null) {
        const elementTop = getElementWindowTop(element);
        if (elementTop > window.scrollY) {
          return section;
        }
      }
    });
    setActiveSection(firstActiveSection as SectionEnum);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', updateActiveState);
    return () => window.removeEventListener('scroll', updateActiveState);
  }, [updateActiveState]);

  return activeSection;
}
