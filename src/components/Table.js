import React from 'react';
import './Table.css';
import { QUARTERS, CATEGORIES, REPORTS } from '../constants';

const Table = props => {
  const { entries } = props;
  return (
    <div className="Table">
      <ul className="headers">
        {Object.keys(REPORTS).map(reportKey =>
          Object.keys(QUARTERS).map((quarterKey, index) => {
            let quarter = QUARTERS[quarterKey];
            return (
              <li
                key={`header-${index}`}
              >{`${quarter} ${REPORTS[reportKey]}`}</li>
            );
          })
        )}
        <li>Category</li>
      </ul>
      {Object.keys(CATEGORIES).map((categoryKey, yIndex) => (
        <ul className="rows" key={categoryKey}>
          {Object.keys(REPORTS).map((reportKey, zIndex) =>
            Object.keys(QUARTERS).map((quarterKey, xIndex) => {
              const key = `${quarterKey}-${categoryKey}-${reportKey}`;
              const id = `${yIndex}-${zIndex > 0 ? 4 + xIndex : xIndex}-cell`;
              return (
                <li
                  key={key}
                  data-ref={key}
                  id={id}
                  className={props.selected === id ? 'selected' : null}
                  onClick={event => props.setSelected(event.target.id)}
                >
                  ${entries[key] ? entries[key].toLocaleString() : 0}
                </li>
              );
            })
          )}
          <li className="category">{CATEGORIES[categoryKey]}</li>
        </ul>
      ))}
    </div>
  );
};

export default Table;
