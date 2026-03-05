import { useState, useEffect } from "react";

export function visibilityObserver(ref) {
  const [visible, setVisible] = useState(null);

  //Setting up observer for progress bar to show animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      { threshold: 1 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return visible;
}
