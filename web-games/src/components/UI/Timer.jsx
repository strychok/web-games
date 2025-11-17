import { time } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export function Timer({ initialSeconds = 60, endgameFunction }) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const timerId = useRef(null);

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, []);

  function startTimer() {
    if (timerId.current) {
      return;
    }
    timerId.current = setInterval(() => {
      setSeconds((prev) => {
        console.log(prev);
        if (prev <= 1) {
          stopTimer();
          setTimeout(() => endgameFunction(), 0);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerId.current);
    timerId.current = null;
  }

  return <div className="timer">{seconds}</div>;
}
