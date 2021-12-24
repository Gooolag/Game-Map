import * as React from 'react';
import {useTheme} from '../constants/theme';
import Switch from 'expo-dark-mode-switch';
export const SwitchToggle: React.FC<{}> = () => {

    const {setScheme, isDark} = useTheme();

    const toggleScheme = () => {
        isDark ? setScheme('light') : setScheme('dark');
    }

    return (
        <Switch value={isDark} onChange={toggleScheme}/>
    );
}
