import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

function Connexion() {
  const [pseudo, setPseudo] = useState('')
  const [goToApp, setGoToApp] = useState(false)

  function goToAppFn (event) {
    event.preventDefault()
    setGoToApp(true)
  }

  function handleChange (event) {
    const pseudo = event.target.value
    setPseudo(pseudo)
  }

  if (goToApp) {
    return <Redirect push to={`/pseudo/${pseudo}`} />
  }

  return (
    <div className='connexionBox'>
      <form className='connexion' onSubmit={goToAppFn} >
        <h1>Ma Boîte à Recettes</h1>
        <input
          type='text'
          value={pseudo}
          onChange={handleChange}
          placeholder='Nom du Chef'
          pattern='[A-Za-z-]{1,}'
          required />
        <button type='submit'>GO</button>
        <p>Pas de caractères spéciaux.</p>
      </form>
    </div>
  )
}

// class Connexion extends React.Component {
//   state = {
//     pseudo: '',
//     goToApp: false
//   }

//   goToApp = event => {
//     event.preventDefault()
//     this.setState({ goToApp: true })
//   }

//   handleChange = event => {
//     const pseudo = event.target.value
//     this.setState({ pseudo })
//   }

//   render () {
//     if (this.state.goToApp) {
//       return <Redirect push to={`/pseudo/${this.state.pseudo}`} />
//     }

//     return (
//       <div className='connexionBox'>
//         <form className='connexion' onSubmit={this.goToApp} >
//           <h1>Ma Boîte à Recettes</h1>
//           <input
//             type='text'
//             value={this.state.pseudo}
//             onChange={this.handleChange}
//             placeholder='Nom du Chef'
//             pattern='[A-Za-z-]{1,}'
//             required />
//           <button type='submit'>GO</button>
//           <p>Pas de caractères spéciaux.</p>
//         </form>
//       </div>
//     )
//   }
// }

export default Connexion
