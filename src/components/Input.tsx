import clsx from "clsx";
import React, { ReactNode } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type InputProps = {
  type: string;
  id: string;
  errors: FieldErrors;
  register: UseFormRegister<FieldValues>;
  placeholder?: string;
  required?: boolean;
};

const Input: React.FC<InputProps> = ({
  type,
  id,
  placeholder,
  register,
  required,
  errors,
}) => {
  return (
    <>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        {...register(id, {
          required: {
            value: !!required,
            message: "This input is required",
          },
        })}
        className={clsx(
          "rounded-md px-3 py-2 ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500",
          errors[id] && "ring-2 ring-rose-500",
        )}
      />
      {errors[id] && (
        <p className="mt-2 text-sm text-rose-600">
          {errors[id]?.message as ReactNode}
        </p>
      )}
    </>
  );
};

export default Input;
