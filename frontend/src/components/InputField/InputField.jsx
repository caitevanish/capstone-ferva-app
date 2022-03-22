import React from 'react';

const InputField = ({ label, type='text', value, className, onChange }) => {
  return (
    <div>
      <label>{label}</label>
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
