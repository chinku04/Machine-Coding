import { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval); // Cleanup when component unmounts
    };
  }, []);

  return <p>Time: {seconds}s</p>;
};
export default Timer;
