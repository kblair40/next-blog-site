import { useState, useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";

const useMediaQuery = (query) => {
  const media = window.matchMedia(query);

  const [matches, setMatches] = useState(false);

  const handleResize = useDebouncedCallback(
    () => setMatches(media.matches),
    150
  );

  useEffect(() => {
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    // const listener = () => setMatches(media.matches);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
