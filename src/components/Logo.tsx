import React from "react";

type LogoProps = {
  className?: string;
  showText?: boolean;
};

export const LogoIcon: React.FC<{ className?: string }> = ({ className }) => {
  const gradientId = React.useId();
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Digital Accountant logo"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60A5FA" />
          <stop offset="1" stopColor="#2563EB" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="12" fill={`url(#${gradientId})`} />
      {/* Bars */}
      <rect x="12" y="26" width="6" height="10" rx="2" fill="#FFFFFF" opacity="0.95" />
      <rect x="22" y="20" width="6" height="16" rx="2" fill="#FFFFFF" opacity="0.95" />
      <rect x="32" y="14" width="6" height="22" rx="2" fill="#FFFFFF" opacity="0.95" />
      {/* Check mark */}
      <path d="M14 24 L19 29 L34 14" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({ className, showText = true }) => (
  <div className={`flex items-center space-x-2 ${className ?? ''}`}>
    <LogoIcon className="w-8 h-8" />
    {showText && (
      <span className="text-xl font-bold tracking-tight">Digital Accountant</span>
    )}
  </div>
);

export default Logo;