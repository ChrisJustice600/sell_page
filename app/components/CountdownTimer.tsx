"use client";

import { useEffect, useState } from 'react';

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const endDate = new Date('2024-05-01'); // Set your target date

    const timer = setInterval(() => {
      const now = new Date();
      const difference = endDate.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 text-center">
      <div className="bg-primary/10 rounded-lg p-4">
        <div className="text-4xl font-bold text-primary">{timeLeft.days}</div>
        <div className="text-sm text-muted-foreground">Jours</div>
      </div>
      <div className="bg-primary/10 rounded-lg p-4">
        <div className="text-4xl font-bold text-primary">{timeLeft.hours}</div>
        <div className="text-sm text-muted-foreground">Heures</div>
      </div>
      <div className="bg-primary/10 rounded-lg p-4">
        <div className="text-4xl font-bold text-primary">{timeLeft.minutes}</div>
        <div className="text-sm text-muted-foreground">Minutes</div>
      </div>
      <div className="bg-primary/10 rounded-lg p-4">
        <div className="text-4xl font-bold text-primary">{timeLeft.seconds}</div>
        <div className="text-sm text-muted-foreground">Secondes</div>
      </div>
    </div>
  );
}