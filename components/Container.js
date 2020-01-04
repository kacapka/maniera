import { useState, useLayoutEffect } from 'react';
import LangContext from './Context/langContext';

const Container = ({ children }) => {
    const [lang, setLang] = useState('pl');
    useLayoutEffect(() => {
        const storageLang = localStorage.getItem('lang');
        if (storageLang) setLang(storageLang);
    }, []);

    const toggleLang = () => {
        const langToSet = lang === 'pl' ? 'en' : 'pl';
        setLang(langToSet);
        localStorage.setItem('lang', langToSet);
    };

    const context = {
        lang,
        setLang: toggleLang
    };

    return (
        <LangContext.Provider value={context}>
            {children}
        </LangContext.Provider>
    );
};

export default Container;
