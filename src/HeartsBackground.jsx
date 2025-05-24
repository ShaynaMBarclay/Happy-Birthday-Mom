// HeartsBackground.jsx
import React from 'react';


const NUM_HEARTS = 20;

function HeartsBackground() {
  const hearts = [];

  for (let i = 0; i < NUM_HEARTS; i++) {
    const style = {
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 10}s`,
      animationDuration: `${5 + Math.random() * 5}s`,
      fontSize: `${12 + Math.random() * 24}px`,
      opacity: 0.7 + Math.random() * 0.3,
    };
    hearts.push(
      <div key={i} className="heart" style={style}>
        ❤️
      </div>
    );
  }

  return <div className="hearts-background">{hearts}</div>;
}

export default HeartsBackground;
