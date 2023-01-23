import React, { useState, useContext, useEffect } from 'react'

const ThemeContext = React.createContext({
  error: 'Context not accessible'
})

export const useThemeContext = () => {
  return useContext(ThemeContext)
}

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleTheme = () => {
    setDarkMode(previousMode => !previousMode)
  }

  useEffect(() => {
    const bodyElement = document.body

    if (!darkMode) delete bodyElement.dataset.theme
    else bodyElement.dataset.theme = 'dark'

    return () => delete bodyElement.dataset.theme
  }, [darkMode])

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
