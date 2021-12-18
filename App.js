import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'

import {
    useFonts,
    SourceSansPro_400Regular,
    SourceSansPro_700Bold,
    SourceSansPro_600SemiBold,
    SourceSansPro_900Black,
} from '@expo-google-fonts/source-sans-pro'

import AppLoading from 'expo-app-loading'

import { ThemeProvider } from 'styled-components'
import { theme } from './src/styles'

import { Routes } from './src/routes'

const App = () => {
    const [fontsLoaded] = useFonts({
        SourceSansPro_400Regular,
        SourceSansPro_700Bold,
        SourceSansPro_600SemiBold,
        SourceSansPro_900Black,
    })

    if (!fontsLoaded) {
        return <AppLoading />
    }

    return (
        <ThemeProvider theme={theme}>
            <Routes />
        </ThemeProvider>
    )
}

export default App