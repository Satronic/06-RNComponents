import { Theme } from '@react-navigation/native';


type ThemeAction =
    | { type: 'set_Light_Theme' }
    | { type: 'set_Dark_Theme' }

export interface ThemeState extends Theme {
    currentTheme: 'light' | 'dark',
}

// Se pueden agreagar otras propiedades de estilo
export const lightTheme: ThemeState = {
    currentTheme: 'light',
    dark: false,
    colors: {
        primary: 'green',
        background: 'white',
        card: 'white',
        text: 'black',
        border: 'black',
        notification: 'red',
    }
}

export const darkTheme: ThemeState = {
    currentTheme: 'dark',
    dark: true,
    colors: {
        primary: '#009900',
        background: 'black',
        card: 'black',
        text: 'white',
        border: 'white',
        notification: 'red',
    }
}

export const themeReducer = (state: ThemeState, action: ThemeAction) => {
    switch (action.type) {
        case 'set_Light_Theme':
            return {
                ...lightTheme
            }

        case 'set_Dark_Theme':
            return {
                ...darkTheme
            }
        default:
            return state;
    }
}
