import { useEffect, useState } from "react";

type useGameTimerProps = {
  duration: number;
};
export const useGameTimer = ({ duration }: useGameTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<number>(duration);

  useEffect(() => {
    if (!timeLeft) setTimeLeft(0);

    const interval = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  return timeLeft;
};
