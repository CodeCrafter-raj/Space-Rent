import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Gets the current path, like "/product" or "/faq"

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top whenever "pathname" changes
  }, [pathname]); // Dependency ensures this runs when the route changes

  return null; // This component doesn't render anything visible
};

export default ScrollToTop;

