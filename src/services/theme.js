import { STORAGE_KEYS } from "../config/storage_keys.config";

export const THEME_KEY = "@airbnb-Token"

export const getTheme = () => {
    const theme = localStorage.getItem(STORAGE_KEYS.theme);

    if(theme === null) {
        return 'light'
    }

    else {
        return JSON.parse(theme);
    }
}

export const setTheme = (theme) => {
    if(theme === null) {
        localStorage.removeItem(STORAGE_KEYS.theme);
    }
    else{
        localStorage.setItem(STORAGE_KEYS.theme, JSON.stringify(theme))
    }
}
