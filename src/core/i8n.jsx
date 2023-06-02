import {useSafeState} from 'ahooks';
import React, {createContext, useEffect} from 'react';
import intl from 'react-intl-universal';

export const identifyLocale = () =>
{
    const locale = intl.determineLocale({
        localStorageLocaleKey: 'app.lang',
        fallbackLocale: 'en'
    });

    const [lang] = locale.split('-');
    return lang ?? 'en';
};

export const LocalesContext = createContext({
    locale: identifyLocale(),
    label: () =>
    {
    },
    setLocale: () =>
    {
    }
});

export const LocalizedApp = props =>
{
    const {children} = props;

    const setLocale = locale =>
        new Promise(resolve =>
        {
            localStorage.setItem('app.lang', locale);

            intl
                .init({
                    currentLocale: identifyLocale(),
                    locales: window.__LOCALES__ || {}
                })
                .then(() =>
                {
                    setState({
                        ...state,
                        locale
                    });
                    resolve();
                });
        });

    const initState = {
        locale: identifyLocale(),

        label: (id, variables) => intl.formatMessage({
            id,
            defaultMessage: `%${id.toUpperCase()}%`
        }, variables),

        setLocale
    };

    const [state, setState] = useSafeState(initState);
    useEffect(() =>
    {
        setLocale(state.locale);
    }, []);

    return <LocalesContext.Provider value={state}>{children}</LocalesContext.Provider>;
};

/**
 * Loads language data from the remote resource
 * @returns {Promise<void>}
 */
export const loadLocales = async () =>
{
    const body = await fetch('/locales.json').then(res => res.json());
    window.__LOCALES__ = body ?? {};

    Promise.resolve(true);
};
