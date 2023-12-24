import {Settings} from "../settings/Settings";

export const setDefaultHttpInfo = (code: number|string, title: string, message: string) => {
    Settings.customTitles[code] = title;
    Settings.customMessages[code] = message;
}

export const getDefaultHttpInfoTitle = (code: number|string) => {
    if (typeof Settings.customTitles[code] !== 'undefined') {
        return Settings.customTitles[code];
    }
    return '';
}

export const getDefaultHttpInfoMessage = (code: number|string) => {
    if (typeof Settings.customMessages[code] !== 'undefined') {
        return Settings.customMessages[code];
    }
    return '';
}