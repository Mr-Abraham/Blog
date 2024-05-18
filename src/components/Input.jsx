import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  ref,
  { label, type = "text", className = "", ...props }
) {
  const id = useId();
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        className={`${className} p-2 rounded-lg focus:bg-slate-400 `}
        ref={ref}
        id={id}
      />
    </div>
  );
});

export default Input;
