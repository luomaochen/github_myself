import Types from '../type.js'

export function onThemeChange(theme) {
    return {type: Types.THEME_CHANGE, theme: theme}
}