import React from 'react';
import './Form.css';

const Form = props => {
  const years = props.years;
  return (
    <form className="Form">
      <select
        value={props.year}
        onChange={event => props.setYear(event.target.value)}
      >
        {years.map(year => (
          <option value={year} key={year}>
            {year}
          </option>
        ))}
      </select>
    </form>
  );
};

export default Form;
