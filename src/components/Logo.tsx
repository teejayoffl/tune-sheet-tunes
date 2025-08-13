import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo = ({ className, showText = true }: LogoProps) => {
  return (
    <div className={cn("flex items-center space-x-3", className)}>
      {/* Custom SVG Logo */}
      <div className="relative">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 lg:w-12 lg:h-12"
        >
          {/* Background circle with gradient */}
          <circle
            cx="24"
            cy="24"
            r="22"
            fill="url(#logo-gradient)"
            className="animate-pulse-slow"
          />
          
          {/* Digital grid pattern */}
          <g opacity="0.3">
            <line x1="12" y1="24" x2="36" y2="24" stroke="white" strokeWidth="0.5" />
            <line x1="24" y1="12" x2="24" y2="36" stroke="white" strokeWidth="0.5" />
            <line x1="16" y1="16" x2="32" y2="32" stroke="white" strokeWidth="0.5" />
            <line x1="32" y1="16" x2="16" y2="32" stroke="white" strokeWidth="0.5" />
          </g>
          
          {/* Calculator/Chart hybrid icon */}
          <g transform="translate(12, 12)">
            {/* Chart bars */}
            <rect x="2" y="14" width="4" height="8" fill="white" rx="1" />
            <rect x="8" y="10" width="4" height="12" fill="white" rx="1" />
            <rect x="14" y="6" width="4" height="16" fill="white" rx="1" />
            <rect x="20" y="12" width="4" height="10" fill="white" rx="1" />
            
            {/* Digital dot accents */}
            <circle cx="4" cy="12" r="1" fill="white" opacity="0.8" />
            <circle cx="10" cy="8" r="1" fill="white" opacity="0.8" />
            <circle cx="16" cy="4" r="1" fill="white" opacity="0.8" />
            <circle cx="22" cy="10" r="1" fill="white" opacity="0.8" />
          </g>
          
          {/* Gradient definition */}
          <defs>
            <linearGradient id="logo-gradient" x1="0" y1="0" x2="48" y2="48">
              <stop stopColor="#3B82F6" />
              <stop offset="0.5" stopColor="#2563EB" />
              <stop offset="1" stopColor="#1D4ED8" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full animate-glow" />
      </div>
      
      {/* Logo text */}
      {showText && (
        <div className="flex flex-col">
          <span className="text-xl lg:text-2xl font-bold text-foreground leading-tight">
            Digital
          </span>
          <span className="text-sm lg:text-base font-medium text-primary leading-tight">
            Accountant
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;