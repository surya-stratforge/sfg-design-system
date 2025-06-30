import React from 'react';
import '../styles/index.css';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700" onClick={onClick}>
      {children}
    </button>
  );
};
