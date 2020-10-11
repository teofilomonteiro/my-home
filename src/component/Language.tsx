import React, { useState, useEffect, ChangeEvent } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Language.css';

const DEFAULT_LANGUAGE = "en";
const SEARCH_PARAMETER_LANGUAGE = "lng";

const SUPPORTED_LANGUAGES = ["en", "pt"];


function Language() {
    const { t, i18n } = useTranslation("welcome");

    const history = useHistory();
    const { search } = useLocation();

    const params = new URLSearchParams(search);

    useEffect(() => {
        if (value !== params.get(SEARCH_PARAMETER_LANGUAGE)) {
            history.push(`?${SEARCH_PARAMETER_LANGUAGE}=${value}`);
            i18n.changeLanguage(value);
        }
    });

    const [value, setValue] = useState(params.get(SEARCH_PARAMETER_LANGUAGE) || DEFAULT_LANGUAGE);

    function handleSelect(e: ChangeEvent<HTMLSelectElement>) {
        setValue(e.target.value);
    }

    return (
        <div className="App-language">
            <div>{t('language')}</div>
            <select value={value} onChange={handleSelect}>
                {
                    SUPPORTED_LANGUAGES.map(lng => <option value={lng} key={lng}>{lng}</option>)
                }
            </select>
        </div>
    );
}

export default Language;
