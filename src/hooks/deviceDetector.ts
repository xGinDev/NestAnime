"use client";

import { useEffect, useState } from "react";

export const useDeviceDetector = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const mobileRegex =
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i;
    setIsMobile(mobileRegex.test(userAgent));
  }, []);

  return { isMobile, isDesktop: !isMobile };
};
