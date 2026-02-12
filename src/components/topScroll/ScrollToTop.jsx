import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const duration = 600;
    const start = window.scrollY;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      window.scrollTo(0, start * (1 - easeInOutQuad(progress)));

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    const easeInOutQuad = (t) => {
      return t < 0.5
        ? 2 * t * t
        : 1 - Math.pow(-2 * t + 2, 2) / 2;
    };

    requestAnimationFrame(animateScroll);

  }, [pathname]);

  return null;
};

export default ScrollToTop;
