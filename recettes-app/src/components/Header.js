import React, { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

const Header = ({ pseudo }) => {
    const { theme, toggleTheme } = useContext(ThemeContext)

    const formatPseudo = pseudo => /[aeiouy]/i.test(pseudo[0]) ? `d'${pseudo}` : `de ${pseudo}`

    return (
        <header className={theme}>
            <h1>La boîte à recettes {formatPseudo(pseudo)}</h1>
            <button className="themeButton" onClick={toggleTheme}>{ theme === 'light' ? '🌞' : '🌙' }</button>
        </header>
    )
}

// const Header = ({ pseudo }) => {
//     const formatPseudo = pseudo => /[aeiouy]/i.test(pseudo[0]) ? `d'${pseudo}` : `de ${pseudo}`

//     return (
//         <ThemeContext.Consumer>
//             {context => (
//                 <header className={context.theme}>
//                     <h1>La boîte à recettes {formatPseudo(pseudo)}</h1>
//                     <button className="themeButton" onClick={context.toggleTheme}>{ context.theme === 'light' ? '🌞' : '🌙' }</button>
//                 </header>
//             ) }
//         </ThemeContext.Consumer>
//     )
// }

export default Header