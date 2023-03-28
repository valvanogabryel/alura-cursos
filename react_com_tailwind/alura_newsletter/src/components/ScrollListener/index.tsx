import { useEffect } from "react";

interface ScrollProps {
  onScroll: () => void;
};

const ScrollListener = ({ onScroll }: ScrollProps) => {
  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  return null;
}

export default ScrollListener;