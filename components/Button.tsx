import { ButtonHTMLAttributes, FC } from "react";

const Button: FC<{ type: any }> = ({ children, type }) => {
  return (
    <button
      type={type}
      className="w-full flex items-center justify-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-accent text-xs md:text-xl tracking-widest rounded-lg"
    >
      {children}
    </button>
  );
};

export default Button;
