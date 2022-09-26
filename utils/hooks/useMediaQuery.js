import { useState, useEffect, useRef } from "react";
import { useDebouncedCallback } from "use-debounce";

const useMediaQuery = (query) => {
  const [didMount, setDidMount] = useState(false);
  const [matches, setMatches] = useState(false);

  const media = useRef();

  useEffect(() => {
    if (typeof window === "undefined") return;

    media.current = window.matchMedia(query);

    if (media.current && media.current.matches !== matches) {
      setMatches(media.current.matches);
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, [matches, query]);

  const cb =
    typeof window !== "undefined"
      ? () => setMatches(media.current.matches)
      : () => console.log("NOT READY YET");

  const handleResize = useDebouncedCallback(cb, 150);

  return matches;
};

export default useMediaQuery;
