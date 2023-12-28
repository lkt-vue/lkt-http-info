import {Settings} from "../settings/Settings";

export const setDefaultHttpInfo = (code: number|string, title: string|undefined, message: string|undefined, icon: string|undefined) => {
    if (typeof title !== 'undefined') Settings.customTitles[code] = title;
    if (typeof message !== 'undefined') Settings.customMessages[code] = message;
    if (typeof icon !== 'undefined') Settings.customIcons[code] = icon;
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

export const getDefaultHttpInfoIcon = (code: number|string) => {
    if (typeof Settings.customIcons[code] !== 'undefined') {
        return Settings.customIcons[code];
    }
    return '';
}