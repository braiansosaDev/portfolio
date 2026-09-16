"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE_SELECTOR =
  "a, button, summary, select, [role='button'], [tabindex]:not([tabindex='-1'])";
const TEXT_SELECTOR = "input, textarea, [contenteditable='true']";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    if (!finePointer.matches) return;

    document.documentElement.classList.add("has-custom-cursor");

    const moveCursor = (event: PointerEvent) => {
      cursor.style.setProperty("--cursor-x", `${event.clientX}px`);
      cursor.style.setProperty("--cursor-y", `${event.clientY}px`);
      cursor.classList.add("is-visible");

      const target = event.target as Element | null;
      cursor.classList.toggle("is-interactive", Boolean(target?.closest(INTERACTIVE_SELECTOR)));
      cursor.classList.toggle("is-text", Boolean(target?.closest(TEXT_SELECTOR)));
    };

    const hideCursor = () => cursor.classList.remove("is-visible");

    window.addEventListener("pointermove", moveCursor);
    document.addEventListener("mouseleave", hideCursor);
    window.addEventListener("blur", hideCursor);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", moveCursor);
      document.removeEventListener("mouseleave", hideCursor);
      window.removeEventListener("blur", hideCursor);
    };
  }, []);

  return (
    <div ref={cursorRef} className="custom-cursor" aria-hidden="true">
      <svg className="custom-cursor__pointer" viewBox="0 0 24 24">
        <path d="M3.4 2.7v16.05l4.42-4.16 3.08 6.05 3.08-1.57-3.05-5.98 6.05-.75L3.4 2.7Z" />
      </svg>
    </div>
  );
}
