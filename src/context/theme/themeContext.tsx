import { createContext, useReducer, useEffect } from "react";
import { lightTheme, themeReducer, ThemeState, darkTheme } from './themeReducer';
import { Appearance, AppState } from 'react-native'

interface ThemeContextProps {
    theme: ThemeState;
    setDarkTheme: () => void;
    setLightTheme: () => void;
}

interface ThemeProviderProps {
    children: JSX.Element | JSX.Element[]
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {

    const [theme, dispatch] = useReducer(themeReducer, (Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme)); // Obtiene el tema del sistema

    // Se actuliza cuando la aplicacion se cierra o se minimiza
    useEffect(() => {
        // Estado de la aplicacion en los eventos del SO
        AppState.addEventListener('change', (status)=>{
            if(status === 'active') {
                Appearance.getColorScheme() === 'light' ? setLightTheme : setDarkTheme
            }
        })
    }, [])
    

    const setDarkTheme = () => {
        dispatch({ type: "set_Dark_Theme" });
        console.log('Dark');
    };

    const setLightTheme = () => {
        dispatch({ type: "set_Light_Theme" });
        console.log('Light');
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            setDarkTheme,
            setLightTheme,
        }}>
            {children}
        </ThemeContext.Provider>
    )
}