"use client"
import { useState, useEffect } from 'react';

export const useMediaQuery = (query : any) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    const updateMatches = () => {
      setMatches(mediaQuery.matches);
    };

    const handleMediaQueryChange = (ev : any) => {
      setMatches(ev.matches);
    };

    updateMatches();

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, [query]);

  return matches;
};