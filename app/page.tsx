"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import type { Locale } from "./data";

function detectLocale(): Locale {
  const saved = window.localStorage.getItem("locale");
  if (saved === "es" || saved === "en") return saved;

  const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
  return languages.some((language) => language.toLowerCase().startsWith("es")) ? "es" : "en";
}

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/${detectLocale()}`);
  }, [router]);

  return (
    <main className="site-shell">
      <div className="scanline" />
      <section className="hero" id="top">
        <div className="hero-copy reveal is-visible">
          <p className="terminal-line typing-line">detecting locale</p>
          <h1>Braian Sosa</h1>
        </div>
      </section>
    </main>
  );
}
