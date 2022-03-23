import React from 'react';

const InputField = ({
  label,
  htmlFor,
  type = 'text',
  value,
  className = 'form-control',
  onChange,
}) => {
  return (
    <div>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={className}
      />
    </div>
  );
};

export default InputField;
