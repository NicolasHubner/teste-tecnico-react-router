import type { ReactNode } from "react";
import { Link } from "react-router";

interface HeroProps {
  title: string;
  description: string;
  ctaLabel: string;
  ctaTo: string;
  children?: ReactNode;
}

export default function Hero({
  title,
  description,
  ctaLabel,
  ctaTo,
}: HeroProps) {
  return (
    <section className="hero-section text-center mb-16">
      <h1 className="hero-title text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h1>

      <p className="hero-description text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
        {description}
      </p>

      <Link
        to={ctaTo}
        className="
          inline-block
          bg-blue-600 
          text-white 
          px-6 
          py-3 
          rounded-lg 
          text-lg 
          font-semibold 
          shadow-md 
          hover:bg-blue-700 
          hover:shadow-lg 
          transition-all
        "
      >
        {ctaLabel}
      </Link>
    </section>
  );
}
