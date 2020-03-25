import React, { useState } from 'react';
import './App.css';
import * as data from './temp-data.json';

import Form from './components/Form';
import Table from './components/Table';

function App() {
  const [selected, setSelected] = useState('0-0-cell');
  const [entries, setEntries] = useState(data.default);
  const [updates, setUpdates] = useState(entries);
  const [updated, setUpdated] = useState(false);
  const years = Object.keys(entries);
  const [year, setYear] = useState(years[0]);

  document.onkeydown = event => {
    const { keyCode } = event;
    if (keyCode >= 37 && keyCode <= 40) {
      let [y, x] = selected.split('-');
      x = Number(x);
      y = Number(y);
      if (keyCode === 37 || keyCode === 39) {
        x = keyCode === 39 ? (x < 7 ? x + 1 : x) : x > 0 ? x - 1 : 0;
      } else if (keyCode === 38 || keyCode === 40) {
        y = keyCode === 40 ? (y < 3 ? y + 1 : y) : y > 0 ? y - 1 : 0;
      }
      setSelected(`${y}-${x}-cell`);
    } else if ((keyCode >= 48 && keyCode <= 57) || keyCode === 8) {
      const elem = document.getElementById(selected);
      const key = elem.getAttribute('data-ref');
      let value = updates[year][key];
      value = value
        ? keyCode === 8
          ? null
          : value.toString() + event.key
        : event.key;
      let object = updates;
      object[year][key] = Number(value);
      setUpdates(Object.assign({}, object));
      setUpdated(true);
    }
  };

  return (
    <div className="App">
      <h1>Quarterly Finance Editor</h1>
      <Form years={years} year={year} setYear={setYear} />
      <Table
        selected={selected}
        setSelected={setSelected}
        entries={updates[year]}
      />
      <button disabled={!updated} onClick={() => {
        setEntries(Object.assign({}, updates));
        setUpdated(false);
      }}>Save Changes</button>
    </div>
  );
}

export default App;
