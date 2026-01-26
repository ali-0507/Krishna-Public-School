import { useEffect, useState } from "react";

const useCountUp = (target, duration = 1500, start = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      const value = Math.min(
        Math.floor((progress / duration) * target),
        target
      );

      setCount(value);

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [start, target, duration]);

  return count;
};

export default useCountUp;
