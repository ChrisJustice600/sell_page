"use client";

import CountdownTimer from "@/components/CountdownTimer";

export default function TimerSection() {
  return (
    <div className="mb-16">
      <CountdownTimer />
      <div className="mt-8 flex justify-center">
        <div className="bg-red-500/20 border border-red-500/50 rounded-lg px-6 py-3">
          <span className="text-red-400 font-semibold">
            🔥 Seulement 5 places restantes sur 20
          </span>
        </div>
      </div>
    </div>
  );
}
