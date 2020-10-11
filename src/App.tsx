import React, { useState, useEffect, ChangeEvent } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// import logo from './logo.svg';
import './App.css';

let defaultLanguage = "en";

function App() {
  const { t, i18n } = useTranslation("welcome");

  let history = useHistory();
  let { search } = useLocation();

  let params = new URLSearchParams(search);
  const currentLng = params.get("lng") || defaultLanguage;

  useEffect(() => {
    if (value !== params.get("lng")) {
      history.push(`?lng=${value}`);
      i18n.changeLanguage(value);
    }
  });

  const [value, setValue] = useState(currentLng);

  function handleSelect(e: ChangeEvent<HTMLSelectElement>) {
    setValue(e.target.value);
  }

  return (
    <div className="App">
      <div className="App-language">
        <div>{t('language')}</div>
        <select value={value} onChange={handleSelect}>
          <option value="en">en</option>
          <option value="pt">pt</option>
        </select>

      </div>


      <header className="App-header">

        <div>{t('hello')}</div>

      </header>
    </div>
  );
}

export default App;
