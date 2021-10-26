import React, { useEffect, useState } from 'react'
// CSS
import '../styles/App.css'

import { updateDatabaseRecipes, addDatabaseRecipesListener, removeDatabaseRecipesListener } from '../utils/DataBase'
import Header from './Header'
import defaultRecettes from '../utils/Data/recettes'
import Admin from './Admin'
import Card from './Card'
import ThemeProvider from '../context/ThemeContext'

function App(props) {
  const [pseudo, ] = useState(props.match.params.pseudo)
  const [recettes, updateRecettes] = useState({})

  useEffect(() => {
    const onNewDatabaseRecipe = data => updateRecettes(data)
    addDatabaseRecipesListener(pseudo, onNewDatabaseRecipe)

    return () => {
      removeDatabaseRecipesListener(pseudo)
    }
  }, [])

  function ajouterRecette (recette) {
    const listeRecettes = { ...recettes }
    listeRecettes[`recette-${Date.now()}`] = recette
    updateDatabaseRecipes(pseudo, listeRecettes)
  }

  function majRecette (key, recette) {
    const listeRecettes = { ...recettes }
    listeRecettes[key] = recette
    updateDatabaseRecipes(pseudo, listeRecettes)
  }

  function supprimerRecette (key) {
    const listeRecettes = { ...recettes }
    listeRecettes[key] = null
    updateDatabaseRecipes(pseudo, listeRecettes)
  }

  function chargerExemple() {
    updateDatabaseRecipes(pseudo, defaultRecettes)
  }

  const cards = Object
    .keys(recettes)
    .map(key => <Card key={key} details={recettes[key]} />)

  return (
    <ThemeProvider>
      <div className='box'>
        <Header pseudo={pseudo} />
        <div className='cards'>
          {cards}
        </div>
        <Admin
          pseudo={pseudo}
          recettes={recettes}
          ajouterRecette={ajouterRecette}
          majRecette={majRecette}
          supprimerRecette={supprimerRecette}
          chargerExemple={chargerExemple}
        />
      </div>
    </ThemeProvider>
  )
}

// class App extends Component {
//   state = {
//     pseudo: this.props.match.params.pseudo,
//     recettes : {}
//   }

//   componentDidMount() {
//     const onNewDatabaseRecipe = data => this.setState({ recettes: data })
//     addDatabaseRecipesListener(this.state.pseudo, onNewDatabaseRecipe)
//   }

//   componentWillUnmount() {
//     removeDatabaseRecipesListener(this.state.pseudo)
//   }

//   ajouterRecette = recette => {
//     const recettes = { ...this.state.recettes }
//     recettes[`recette-${Date.now()}`] = recette
//     updateDatabaseRecipes(this.state.pseudo, recettes)
//   }

//   majRecette = (key, recette) => {
//     const recettes = { ...this.state.recettes }
//     recettes[key] = recette
//     updateDatabaseRecipes(this.state.pseudo, recettes)
//   }

//   supprimerRecette = key => {
//     const recettes = { ...this.state.recettes }
//     recettes[key] = null
//     updateDatabaseRecipes(this.state.pseudo, recettes)
//   }

//   chargerExemple = () => updateDatabaseRecipes(this.state.pseudo, recettes)

//   render() {
//     const cards = Object
//       .keys(this.state.recettes)
//       .map(key => <Card key={key} details={this.state.recettes[key]} />)


//     return (
//       <ThemeProvider>
//         <div className='box'>
//           <Header pseudo={this.state.pseudo} />
//           <div className='cards'>
//             {cards}
//           </div>
//           <Admin
//             pseudo={this.state.pseudo}
//             recettes={this.state.recettes}
//             ajouterRecette={this.ajouterRecette}
//             majRecette={this.majRecette}
//             supprimerRecette={this.supprimerRecette}
//             chargerExemple={this.chargerExemple}
//           />
//         </div>
//       </ThemeProvider>
//     )
//   }
// }

export default App
