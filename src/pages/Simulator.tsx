import React, { useState, useRef, useEffect } from "react";

// Simple utility to compute the center of a DOMRect
const rectCenter = (rect: DOMRect) => ({
  x: rect.left + rect.width / 2,
  y: rect.top + rect.height / 2,
});

const distance = (a: { x: number; y: number }, b: { x: number; y: number }) =>
  Math.hypot(a.x - b.x, a.y - b.y);

const Simulator = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const positiveRef = useRef<HTMLDivElement>(null);
  const negativeRef = useRef<HTMLDivElement>(null);
  const redRef = useRef<HTMLDivElement>(null);
  const blackRef = useRef<HTMLDivElement>(null);

  const [redPos, setRedPos] = useState({ x: 50, y: 50 });
  const [blackPos, setBlackPos] = useState({ x: 100, y: 50 });
  const [dragging, setDragging] = useState<"red" | "black" | null>(null);
  const [connected, setConnected] = useState(false);

  // Update probe position while dragging
  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      if (!dragging || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (dragging === "red") setRedPos({ x, y });
      if (dragging === "black") setBlackPos({ x, y });
    };
    const handleUp = () => setDragging(null);
    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
    };
  }, [dragging]);

  // Check if probes touch terminals
  useEffect(() => {
    if (
      !positiveRef.current ||
      !negativeRef.current ||
      !redRef.current ||
      !blackRef.current
    )
      return;
    const pos = rectCenter(positiveRef.current.getBoundingClientRect());
    const neg = rectCenter(negativeRef.current.getBoundingClientRect());
    const red = rectCenter(redRef.current.getBoundingClientRect());
    const black = rectCenter(blackRef.current.getBoundingClientRect());
    const touchingPositive = distance(pos, red) < 20;
    const touchingNegative = distance(neg, black) < 20;
    setConnected(touchingPositive && touchingNegative);
  }, [redPos, blackPos]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-gray-100 touch-none"
    >
      {/* Car body */}
      <div
        className="absolute left-1/2 top-1/2 w-72 h-40 -translate-x-1/2 -translate-y-1/2 bg-blue-400" 
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateX(20deg) rotateY(-20deg)",
        }}
      >
        {/* HV Battery */}
        <div
          className="absolute w-32 h-16 bg-yellow-400 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div
            ref={positiveRef}
            className="absolute w-4 h-4 bg-red-600 rounded-full -top-2 left-4"
          />
          <div
            ref={negativeRef}
            className="absolute w-4 h-4 bg-black rounded-full -top-2 right-4"
          />
        </div>
      </div>

      {/* Probes */}
      <div
        ref={redRef}
        onPointerDown={() => setDragging("red")}
        className="absolute w-5 h-5 bg-red-600 rounded-full cursor-pointer"
        style={{ left: redPos.x - 10, top: redPos.y - 10 }}
      />
      <div
        ref={blackRef}
        onPointerDown={() => setDragging("black")}
        className="absolute w-5 h-5 bg-black rounded-full cursor-pointer"
        style={{ left: blackPos.x - 10, top: blackPos.y - 10 }}
      />

      {/* Multimeter display */}
      <div className="absolute bottom-4 right-4 bg-gray-900 text-green-400 font-mono p-4 rounded">
        {connected ? "400V" : "---"}
      </div>
    </div>
  );
};

export default Simulator;

