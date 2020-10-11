import React from 'react';
import { useTranslation } from 'react-i18next';
import Language from './component/Language'

// import logo from './logo.svg';
import './App.css';

function App() {
  const { t } = useTranslation("welcome");

  return (
    <div className="App">
      <Language />

      <header className="App-header">

        <div>{t('hello')}</div>

      </header>
    </div>
  );
}

export default App;
