import React, { useState, createContext } from 'react'
import PropTypes from 'prop-types'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

ThemeProvider.propTypes = {
    children: PropTypes.any,
}

export const SurveyContext = createContext()

export const SurveyProvider = ({ children }) => {
    const [answers, setAnswers] = useState({})
    const saveAnswers = (newAnswers) => {
        setAnswers({ ...answers, ...newAnswers })
    }

    return (
        <SurveyContext.Provider value={{ answers, saveAnswers }}>
            {children}
        </SurveyContext.Provider>
    )
}

SurveyProvider.propTypes = {
    children: PropTypes.any,
}
