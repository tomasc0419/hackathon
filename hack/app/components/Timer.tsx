"use client";

import { useRef, useState } from "react";

export default function Timer() {
  const [actualTime, setActualTime] = useState(0);
  const counter = useRef<ReturnType<typeof setInterval> | null>(null);

  const mins = Math.floor(actualTime / 60);
  const secs = Math.floor(actualTime % 60);
  const ms = Math.floor((actualTime * 100) % 100);

  function initTimer() {
    if (counter.current) {
      pauseTimer();
    } else {
      counter.current = setInterval(() => {
        setActualTime((t) => t + 0.1);
      }, 100);
    }
  }

  function pauseTimer() {
    clearInterval(counter.current!);
    counter.current = null;
  }

  function clearTimer() {
    setActualTime(0);
    clearInterval(counter.current!);
    counter.current = null;
  }

  return (
    <div className="flex flex-col items-center gap-6 p-10 bg-white rounded-2xl shadow-lg w-fit">
      <h1 className="text-4xl font-black tracking-wide text-gray-900">Timer</h1>

      <p className="text-2xl font-mono font-semibold text-gray-800 tabular-nums">
        {String(mins).padStart(2, "0")}:{String(secs).padStart(2, "0")}.{String(ms).padStart(2, "0")}
      </p>

      <div className="flex gap-3">
        <button
          onClick={() => { if (!counter.current) initTimer(); }}
          className="px-6 py-2 bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-semibold rounded-md transition-colors"
        >
          Start
        </button>
        <button
          onClick={() => { if (counter.current) initTimer(); }}
          className="px-6 py-2 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold rounded-md transition-colors"
        >
          Stop
        </button>
        <button
          onClick={clearTimer}
          className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-gray-900 font-semibold rounded-md transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
