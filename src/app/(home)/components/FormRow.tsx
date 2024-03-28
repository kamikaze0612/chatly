import React, { ReactNode } from "react";

type FormRowProps = {
  label: string;
  id: string;
  children: ReactNode;
};

const FormRow: React.FC<FormRowProps> = ({ label, id, children }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium" htmlFor={id}>
        {label}
      </label>
      {children}
    </div>
  );
};

export default FormRow;
