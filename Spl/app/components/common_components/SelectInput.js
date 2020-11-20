import React from 'react';

const Select = props => {
  return (
    <div className="form-group row">
      {/* eslint-disable-next-line react/destructuring-assignment,react/prop-types */}
      <label htmlFor={props.name} className="col-sm-2 col-form-label">
        {/* eslint-disable-next-line react/destructuring-assignment,react/prop-types */}
        {props.title}
      </label>
      <div className="col-sm-10">
        <select
          name={props.name}
          value={props.value}
          onChange={props.handleChange}
          className="custom-select"
        >
          <option value="" disabled>
            {props.placeholder}
          </option>
          {props.options.map(option => {
            return (
              <option key={option} value={option} label={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Select;
