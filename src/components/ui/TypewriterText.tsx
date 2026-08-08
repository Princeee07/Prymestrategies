'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface TypewriterTextProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function TypewriterText({
  words,
  typingSpeed = 120,
  deletingSpeed = 80,
  pauseDuration = 2500,
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  const stateRef = useRef({
    wordIndex: 0,
    charIndex: 0,
    isDeleting: false,
    isPaused: false,
  });

  const tick = useCallback(() => {
    const state = stateRef.current;
    const currentWord = words[state.wordIndex];

    if (state.isPaused) {
      return pauseDuration;
    }

    if (state.isDeleting) {
      state.charIndex -= 1;
      setDisplayText(currentWord.slice(0, state.charIndex));

      if (state.charIndex === 0) {
        state.isDeleting = false;
        state.wordIndex = (state.wordIndex + 1) % words.length;
      }
      return deletingSpeed;
    }

    state.charIndex += 1;
    setDisplayText(currentWord.slice(0, state.charIndex));

    if (state.charIndex === currentWord.length) {
      state.isDeleting = true;
      state.isPaused = true;

      // Schedule unpause
      setTimeout(() => {
        stateRef.current.isPaused = false;
      }, pauseDuration);

      return pauseDuration + deletingSpeed;
    }

    return typingSpeed;
  }, [words, typingSpeed, deletingSpeed, pauseDuration]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const loop = () => {
      const delay = tick();
      timeoutId = setTimeout(loop, delay);
    };

    timeoutId = setTimeout(loop, typingSpeed);

    return () => clearTimeout(timeoutId);
  }, [tick, typingSpeed]);

  return (
    <span className="inline-block relative pr-6">
      <span className="text-[var(--color-bronze)]">{displayText}</span>
      <span
        className="animate-pulse absolute right-0 top-0 bottom-0 w-[4px] bg-white h-full inline-block"
        style={{ animationDuration: '0.8s' }}
      ></span>
    </span>
  );
}
