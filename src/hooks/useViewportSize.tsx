import React, { useState, useEffect } from 'react';

const useViewportSize = () => {
  const [currentViewport, setCurrentViewport] = useState({
    mobile: false,
    tablet: false,
    desktop: false,
  });

  useEffect(() => {
    const currentSize = window?.innerWidth;
    if (currentSize >= 992) {
      return setCurrentViewport((prev) => ({ ...prev, desktop: true }));
    }

    if (currentSize >= 768) {
      return setCurrentViewport((prev) => ({ ...prev, tablet: true }));
    }

    return setCurrentViewport((prev) => ({ ...prev, mobile: true }));
  }, []);

  return currentViewport;
};

export default useViewportSize;
