import type { ReactNode } from "react";

interface InfoCardProps {
  title: string;
  children: ReactNode;
}

export default function InfoCard({ title, children }: InfoCardProps) {
  return (
    <div className="info-card bg-white shadow-md rounded-xl p-6 border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-900 mb-3">
        {title}
      </h2>
      <div className="text-gray-600 leading-relaxed">{children}</div>
    </div>
  );
}
