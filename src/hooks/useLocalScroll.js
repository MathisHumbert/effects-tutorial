import { useEffect } from 'react';
import locomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';

export default function useLocalScroll(start) {
  useEffect(() => {
    if (!start) return;

    const scrollEl = document.querySelector('#main-container');
    new locomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      class: 'is-reveal',
    });
  }, [start]);
}
