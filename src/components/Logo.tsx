
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = 'h-12 w-auto' }) => {
  return (
    <img src="/logo.jpg" alt="Company Logo" className={className} />
  );
};

export default Logo;
