'use client'
import { useEffect, useRef } from "react";

const Cursor = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let x = 0, y = 0;
    let mx = 0, my = 0;
    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };
    window.addEventListener("mousemove", onMove);
    const animate = () => {
      mx += (x - mx) * 0.08;
      my += (y - my) * 0.08;
      el.style.transform = `translate(${mx - 150}px, ${my - 150}px)`;
      requestAnimationFrame(animate);
    };
    animate();
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none z-50 opacity-20"
      style={{
        background: "radial-gradient(circle, rgba(111, 28, 215, 0.4) 0%, transparent 70%)",
        transition: "opacity 0.3s",
      }}
    />
  );
};

export default Cursor;