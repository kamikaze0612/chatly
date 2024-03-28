import clsx from "clsx";
import React, { ReactNode } from "react";

type ButtonProps = {
  type: "submit" | "button" | "reset";
  fullWidth?: boolean;
  children: ReactNode;
};

const Button: React.FC<ButtonProps> = ({ type, fullWidth, children }) => {
  return (
    <button
      type={type}
      className={clsx(
        "flex items-center justify-center rounded-md bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-sky-600",
        fullWidth && "w-full",
      )}
    >
      {children}
    </button>
  );
};

export default Button;
