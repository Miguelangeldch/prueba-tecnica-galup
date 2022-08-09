import React from 'react';

const FormFields = ({
  label,
  id,
  type,
  placeholder,
  value,
  onChange,
  required,
  readOnly,
  maxLength,
  minLength,
}) => {
  return (
    <div className='form-floating mb-3 col-md-6'>
      <input
        className='form-control'
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        readOnly={readOnly}
        maxLength={maxLength}
        minLength={minLength}
      />
      <label className='form-label' htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default FormFields;
