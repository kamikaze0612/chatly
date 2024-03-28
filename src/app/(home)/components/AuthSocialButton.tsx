import React, { ReactNode } from "react";
import { IconType } from "react-icons";

type AuthSocialButtonProps = {
  icon: IconType;
  onClick: () => void;
};

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
  icon: Icon,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center justify-center rounded-md border border-gray-300 py-2 hover:bg-gray-50"
    >
      <Icon />
    </button>
  );
};

export default AuthSocialButton;
