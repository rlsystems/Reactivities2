
import React, { useEffect, useState } from 'react';

export const useDarkMode = () => {
    const [theme, setTheme] = useState('dark');
    const colorTheme = theme === 'dark' ? 'light' : 'dark';
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.add(theme);
    }, [theme])

    return [colorTheme, setTheme];
}
