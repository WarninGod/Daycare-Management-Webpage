import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 rounded-lg";
  
  const variants = {
    primary: "bg-brand-600 text-white hover:bg-brand-700 shadow-sm",
    secondary: "bg-slate-800 text-white hover:bg-slate-900 shadow-sm",
    outline: "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50",
    ghost: "text-slate-600 hover:text-brand-600 hover:bg-brand-50",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3.5 text-lg",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;