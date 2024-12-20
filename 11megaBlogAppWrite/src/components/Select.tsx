import React, { useId } from "react";

type Props = {
  label?: string;
  className?: string;
  options?: string[];
} & React.InputHTMLAttributes<HTMLSelectElement>;

const Select: React.FC = React.forwardRef<HTMLSelectElement, Props>(
  ({ options = [], label, className = "", ...props }, ref) => {
    const id = useId();
    return (
      <>
        <div className="w-full">
          {label && (
            <label htmlFor={id} className="">
              {label}
            </label>
          )}

          <select
            id={id}
            ref={ref}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            {...props}
          >
            {options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </>
    );
  }
);

export default Select;
