import { useRef, useState, useEffect } from "react";

function useHover<T extends HTMLElement>(): [React.RefObject<T>, boolean] {
  const [isHovered, setIsHovered] = useState(false);
  const targetRef = useRef<T>(null);

  useEffect(() => {
    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const target = targetRef.current;

    if (target) {
      target.addEventListener("mouseenter", handleMouseEnter);
      target.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (target) {
        target.removeEventListener("mouseenter", handleMouseEnter);
        target.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return [targetRef, isHovered];
}

export default useHover;
