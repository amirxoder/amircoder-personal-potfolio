import { useState } from 'react';


const useTheme = () => {
    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark')
        console.log(theme)
    }

    return [theme, toggleTheme];
}

export default useTheme;