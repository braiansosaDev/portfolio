import { notFound } from "next/navigation";
import PortfolioPage from "../portfolio-page";
import type { Locale } from "../data";

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }];
}

export default async function LocalizedPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (locale !== "es" && locale !== "en") {
    notFound();
  }

  return <PortfolioPage locale={locale as Locale} />;
}
