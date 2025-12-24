import { useEffect } from "react";
import { useLocation } from "react-router";

export const useScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      // Small delay to ensure the page has rendered
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location.state]);
};
