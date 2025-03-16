import { ReactNode } from "react";

interface ButtonProps {
  title?: string; 
  id?: string; 
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  containerClass?: string; 
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, id, rightIcon, leftIcon, containerClass,onClick }) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden ring-fuchsia-50 bg-violet-50 py-3 px-7 text-black ${containerClass}`}
      onClick={onClick}
    >
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">{title}</span>
      {rightIcon}
    </button>
  );
};

export default Button;