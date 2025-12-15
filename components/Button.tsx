import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  children: React.ReactNode;
  icon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  icon = false,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 font-semibold transition-all duration-300 ease-out uppercase tracking-wider text-sm md:text-base";
  
  const variants = {
    primary: "bg-ink-gold text-black hover:bg-ink-goldHover shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)]",
    secondary: "bg-transparent text-white border border-white hover:bg-white hover:text-black",
    outline: "bg-transparent text-ink-gold border border-ink-gold hover:bg-ink-gold hover:text-black",
    text: "bg-transparent text-gray-300 hover:text-ink-gold p-0"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
      {icon && <ArrowRight className="ml-2 w-4 h-4" />}
    </button>
  );
};

export default Button;