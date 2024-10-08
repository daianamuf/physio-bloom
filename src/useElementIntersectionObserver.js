import { useEffect, useRef, useState } from "react";

function useElementIntersectionObserver({
  root = null,
  threshold = 0.2,
  rootMargin = "0px",
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const currentRef = elementRef.current;

    if (currentRef) {
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(currentRef);
          }
        },
        { root, threshold, rootMargin }
      );

      observer.observe(currentRef);

      return () => {
        observer.unobserve(currentRef);
        observer.disconnect();
      };
    }
  }, [root, threshold, rootMargin]);

  return { elementRef, isVisible };
}
export default useElementIntersectionObserver;
