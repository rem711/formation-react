import React, { createContext, useState } from "react"

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light')

    function toggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
            <ThemeContext.Provider
                value={{
                    theme,
                    toggleTheme
                }}
            >
                {children}
            </ThemeContext.Provider>
        )
}

// class ThemeProvider extends Component {
//     state = {
//         theme : 'light'
//     }

//     toggleTheme = () => {
//         this.setState({ theme : this.state.theme === 'light' ? 'dark' : 'light' })
//     }

//     render() {
//         return (
//             <ThemeContext.Provider
//                 value={{
//                     theme: this.state.theme,
//                     toggleTheme : this.toggleTheme
//                 }}
//             >
//                 {this.props.children}
//             </ThemeContext.Provider>
//         )
//     }
// }

export { ThemeContext }

export default ThemeProvider