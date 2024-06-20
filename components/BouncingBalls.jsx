import React, { useEffect } from 'react';
import styles from './BouncingBalls.module.css'; // Use CSS Modules for scoped styling

const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];
const numBalls = 50;

const BouncingBalls = () => {
  useEffect(() => {
    const balls = [];

    for (let i = 0; i < numBalls; i++) {
      let ball = document.createElement("div");
      ball.classList.add(styles.ball);
      ball.style.background = colors[Math.floor(Math.random() * colors.length)];

      // Ensure the ball stays within the central region of the viewport
      const maxWidth = .5; // max width in em
      const maxHeight = .5; // max height in em
      const left = 50 - (Math.random() * 20) - maxWidth; // central position
      const top = 10 - (Math.random() * 10) - maxHeight; // central position

      ball.style.left = `${left}vw`;
      ball.style.top = `${top}vh`;
      ball.style.transform = `scale(${Math.random()})`;
      ball.style.width = `${Math.random() * maxWidth}em`;
      ball.style.height = ball.style.width;

      balls.push(ball);
      document.body.append(ball);
    }

    balls.forEach((el, i) => {
      let to = {
        x: Math.random() * (i % 2 === 0 ? -10 : 10),
        y: Math.random() * (i % 20 === 0 ? -50 : 50),
      };

      el.animate(
        [
          { transform: "translate(0, 0)" },
          { transform: `translate(${to.x}rem, ${to.y}rem)` }
        ],
        {
          duration: (Math.random() + 1) * 2000, // random duration
          direction: "alternate",
          fill: "both",
          iterations: Infinity,
          easing: "ease-in-out"
        }
      );
    });

    // Cleanup
    return () => {
      balls.forEach(ball => ball.remove());
    };
  }, []);

  return null;
};

export default BouncingBalls;
