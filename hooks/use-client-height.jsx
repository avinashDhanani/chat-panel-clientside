import { useEffect, useState } from "react";

export default function useClientHeight(ref){
    const [height, setHeight] = useState(0);

  useEffect(() => {
    // Function to update height
    const updateHeight = () => {
      if (ref.current) {
        const newHeight = ref.current.clientHeight;
        setHeight(newHeight);
      }
    };

    // Initial update
    updateHeight();

    // Update height on resize
    const handleResize = () => {
      updateHeight();
    };

    window.addEventListener('resize', handleResize);

    // Clean-up on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [ref]);
  return height;
}