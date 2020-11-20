import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({
  name,
  type,
  placeholder,
  onChange,
  className,
  value, // eslint-disable-next-line react/prop-types
  error, // eslint-disable-next-line react/prop-types
  children, // eslint-disable-next-line react/prop-types
  label, // eslint-disable-next-line no-unused-vars
  labelClassName,
  inputContainerClassName,
  ...props
}) => {
  return (
    <>
      <div className="form-group row">
        <label htmlFor={name} className={labelClassName}>
          {label}
        </label>
        <div className={inputContainerClassName}>
          <input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            className={className}
            style={error && { border: 'solid 1px red' }}
          />
        </div>
        {error && <p>{error}</p>}
      </div>
    </>
  );
};

FormInput.defaultProps = {
  type: 'text',
  className: '',
  labelClassName: '',
  inputContainerClassName: ''
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  // type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  // eslint-disable-next-line no-dupe-keys
  type: PropTypes.oneOf(['text', 'number', 'password']),
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  inputContainerClassName: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types,react/require-default-props
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired
};

export default FormInput;
