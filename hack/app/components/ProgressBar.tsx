"use client";

import { useState } from "react";

export default function ProgressBar() {
  const [input, setInput] = useState("");
  const [percentage, setPercentage] = useState(0);
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setInput(val);

    const num = Number(val);
    if (val === "") {
      setError("");
      setPercentage(0);
    } else if (isNaN(num) || !Number.isInteger(num)) {
      setError("Please enter a valid integer.");
      setPercentage(0);
    } else if (num < 0 || num > 100) {
      setError("Value must be between 0 and 100.");
      setPercentage(0);
    } else {
      setError("");
      setPercentage(num);
    }
  }

  return (
    <div className="flex flex-col items-center gap-4 p-10 bg-white rounded-2xl shadow-lg w-80">
      <h2 className="text-xl font-bold text-gray-900">Progress bar</h2>

      {/* Bar container */}
      <div
        style={{
          position: "relative",
          background: "#d1d5db",
          borderRadius: "9999px",
          height: "1.5rem",
          width: "100%",
          margin: "0.5rem 0",
          overflow: "visible",
        }}
      >
        {/* Filled portion */}
        <div
          style={{
            background: "#6b7280",
            borderRadius: "9999px",
            height: "100%",
            width: `${percentage}%`,
            transition: "width 0.3s ease",
          }}
        />

        {/* Percentage Badge */}
        <span
          style={{
            position: "absolute",
            left: `max(0px, calc(${percentage}% - 1.5rem))`,
            top: "50%",
            transform: "translateY(-50%)",
            background: "#ef4444",
            color: "white",
            fontSize: "0.7rem",
            fontWeight: "bold",
            padding: "0.15rem 0.35rem",
            borderRadius: "9999px",
            whiteSpace: "nowrap",
          }}
        >
          {percentage}%
        </span>
      </div>

      {/* Input */}
      <div style={{ marginTop: "1rem" }}>
        <label htmlFor="percentInput" style={{ fontWeight: "bold", color: "#111827" }}>
          Input Percentage:{" "}
        </label>
        <input
          id="percentInput"
          type="number"
          value={input}
          onChange={handleChange}
          min={0}
          max={100}
          style={{
            borderRadius: "9999px",
            border: "1px solid #d1d5db",
            padding: "0.25rem 0.75rem",
            width: "5rem",
            textAlign: "center",
            color: "#111827",
            background: "white",
          }}
        />
      </div>

      {error && (
        <p style={{ color: "#ef4444", marginTop: "0.5rem", fontSize: "0.85rem" }}>
          {error}
        </p>
      )}
    </div>
  );
}
