import React, { useState, ChangeEvent } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// import logo from './logo.svg';
import './App.css';

let defaultLanguage = "pt";

function App() {
  const { t, i18n } = useTranslation("welcome");
  let history = useHistory();
  let { search } = useLocation();
  let params = new URLSearchParams(search);

  function setLanguage(lng: string) {
    setValue(lng);
    history.push(`?lng=${lng}`);
    i18n.changeLanguage(lng);
  }

  function handleSelect(e: ChangeEvent<HTMLSelectElement>) {
    setLanguage(e.target.value)
  }


  if (!params.get("lng")) {
    setLanguage(defaultLanguage)
  }

  const [value, setValue] = useState(params.get("lng") || defaultLanguage);

  return (
    <div className="App">
      <div className="App-language">
        <div>Select Language</div>
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
