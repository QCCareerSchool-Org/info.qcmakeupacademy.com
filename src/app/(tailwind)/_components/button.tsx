import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text' | 'white';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = 'px-8 py-4 text-sm uppercase tracking-[0.15em] transition-all duration-500 ease-out font-sans font-bold';

  const variants = {
    primary: 'bg-primary text-white hover:bg-charcoal border border-primary hover:border-charcoal',
    outline: 'bg-transparent text-charcoal border border-charcoal hover:bg-charcoal hover:text-white',
    text: 'bg-transparent text-charcoal underline decoration-1 underline-offset-4 hover:text-charcoal-light px-0 py-2',
    white: 'bg-white text-charcoal border border-white hover:bg-linen',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
