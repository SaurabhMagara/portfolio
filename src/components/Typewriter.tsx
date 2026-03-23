"use client";

import { useState, useEffect } from "react";

interface TypewriterProps {
  words: string[];
}

export default function Typewriter({ words }: TypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typeSpeed = 100;

    if (isDeleting) {
      typeSpeed /= 2;
    }

    const handleType = () => {
      const currentWord = words[currentWordIndex];

      if (isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
      } else {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === currentWord) {
        setIsDeleting(true);
        typeSpeed = 2000; // Pause at end of word
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        typeSpeed = 500; // Pause before typing next word
      }
    };

    const timer = setTimeout(handleType, typeSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className="inline-block min-w-[20px]">
      {currentText}
      <span className="animate-[blink_1s_infinite] text-accent-cyan">_</span>
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </span>
  );
}
