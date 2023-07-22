import React from "react";
const useViewport = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);
  React.useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      setIsSmallScreen(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return { width, isSmallScreen };
};
export default useViewport;
