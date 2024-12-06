"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date();
    // Ajouter 3 jours à partir de maintenant
    const targetDate = new Date(now.getTime() + (3 * 24 * 60 * 60 * 1000));
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, "0");
  };

  return (
    <div className="grid grid-cols-4 gap-4 text-center max-w-xl mx-auto">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-lg shadow-xl border border-gray-700">
        <div className="text-3xl md:text-4xl font-bold text-white mb-1">
          {formatNumber(timeLeft.days)}
        </div>
        <div className="text-sm text-gray-400">Jours</div>
      </div>
      
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-lg shadow-xl border border-gray-700">
        <div className="text-3xl md:text-4xl font-bold text-white mb-1">
          {formatNumber(timeLeft.hours)}
        </div>
        <div className="text-sm text-gray-400">Heures</div>
      </div>
      
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-lg shadow-xl border border-gray-700">
        <div className="text-3xl md:text-4xl font-bold text-white mb-1">
          {formatNumber(timeLeft.minutes)}
        </div>
        <div className="text-sm text-gray-400">Minutes</div>
      </div>
      
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-lg shadow-xl border border-gray-700">
        <div className="text-3xl md:text-4xl font-bold text-white mb-1">
          {formatNumber(timeLeft.seconds)}
        </div>
        <div className="text-sm text-gray-400">Secondes</div>
      </div>
    </div>
  );
}
