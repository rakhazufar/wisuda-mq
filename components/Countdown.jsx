import { useEffect, useState } from "react";

export default function Countdown() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "June, 1, 2024";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center pb-0">
      <div className="text-white">Menuju Wisuda:</div>
      <div className="flex items-center gap-1 justify-center">
        <div className="text-3xl font-bold text-white">
          {days < 10 ? "0" + days : days}
        </div>
        <div className="text-xl font-bold text-red-500">:</div>
        <div className="text-3xl font-bold text-white">
          {hours < 10 ? "0" + hours : hours}
        </div>
        <div className="text-xl font-bold text-red-500">:</div>
        <div className="text-3xl font-bold text-white">
          {minutes < 10 ? "0" + minutes : minutes}
        </div>
        <div className="text-xl font-bold text-red-500">:</div>
        <div className="text-3xl font-bold text-white">
          {seconds < 10 ? "0" + seconds : seconds}
        </div>
      </div>
    </div>
  );
}
