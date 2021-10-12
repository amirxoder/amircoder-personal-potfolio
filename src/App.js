import React from 'react';
import { ThemeProvider } from 'styled-components';
import About from './Components/About';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Project from './Components/Project';
import Services from './Components/Services';
import Skills from './Components/Skills';
import Toggle from './Components/Toggle';
import { GlobalStyle, light, dark } from './Styles/GlobalStyle';
import useTheme from './Styles/useTheme';


const App = () => {

    const [theme, toggleTheme] = useTheme();
    const themeMode = theme === 'dark' ? light : dark;

    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyle />
            <Hero />
            <Toggle theme={theme} toggleTheme={toggleTheme} />
            <About />
            <Project />
            <Services />
            <Skills />
            <Footer />
        </ThemeProvider>
    );
}



export default App;