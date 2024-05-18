import React, { useId } from "react";

function Select(ref, { label, className, options, ...props }) {
  const id = useId();
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <select ref={ref} {...props} className={`${className}`} name="" id={id}>
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
