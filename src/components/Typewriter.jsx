import React, { useState, useEffect } from 'react';
import '../css/Typewriter.css'

const Typewriter = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset the animation when text changes
  useEffect(() => {
    setDisplayedText('');
    setCurrentIndex(0);
  }, [text]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <div className="typewriter-container">
      <span className="typewriter-text">{displayedText}</span>
      {currentIndex < text.length ? (
        <span className="typewriter-cursor">|</span>
      ) : null}
    </div>
  );
};

export default Typewriter;