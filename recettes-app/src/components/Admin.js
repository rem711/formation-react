import React, { useEffect, useState } from "react"
import AjouterRecette from './AjouterRecette'
import AdminForm from './AdminForm'
import Login from './Login'

import { FacebookAuthProvider, signInWithPopup, getAuth, signOut } from 'firebase/auth'
import { getDatabaseBox, addDatabaseChefToBox } from '../utils/DataBase'

function Admin({ pseudo, recettes, ajouterRecette, majRecette, supprimerRecette, chargerExemple }) {
    const [uid, setUid] = useState(null)
    const [chef, setChef] = useState(null)
    
    useEffect(() => {
        getAuth().onAuthStateChanged(user => {
            if (user) {
                handleAuth({ user })
            }
        })
    }, [])

    async function handleAuth (authData) {
        const { uid } = authData.user

        const box = await getDatabaseBox(pseudo)

        if (!box.chef) {
            addDatabaseChefToBox(pseudo, uid)
        }

        setUid(uid)
        setChef(box.chef || uid)
    }

    function authenticate () {
        const provider = new FacebookAuthProvider()
        const auth = getAuth()

        signInWithPopup(auth, provider).then(result => handleAuth(result))
    }

    async function logout() {
        const auth = getAuth()
        
        try {
            await signOut(auth)
            setUid(null)
            console.log('Déconnexion')
        }
        catch (err) {
            console.error('Erreur lors de la déconnexion')
        }
    }

    const logoutButton = <button onClick={logout}>Déconnexion</button>

    if (!uid) {
        return <Login authenticate={authenticate}></Login>
    }

    if (uid !== chef) {
        return (
            <div>
                <p>Tu n'es pas le chef de cette boite!</p>
                {logoutButton}
            </div>
        )
    }

    return (
        <div className="cards">
            <AjouterRecette ajouterRecette={ajouterRecette} />
            {
                Object.keys(recettes)
                    .map(key => (
                        <AdminForm
                            key={key}
                            id={key}
                            majRecette={majRecette}
                            supprimerRecette={supprimerRecette}
                            recettes={recettes}
                        />
                    ))
            }
            <footer>
                {logoutButton}
                <button onClick={chargerExemple}>Remplir</button>
            </footer>
        </div>
    )
}

// class Admin extends Component {
//     state = {
//         uid: null,
//         chef: null
//     }

//     componentDidMount = () => {
//         getAuth().onAuthStateChanged(user => {
//             if (user) {
//                 this.handleAuth({ user })
//             }
//         })
//     }

//     handleAuth = async authData => {
//         const { pseudo } = this.props
//         const { uid } = authData.user

//         const box = await getDatabaseBox(pseudo)

//         if (!box.chef) {
//             addDatabaseChefToBox(pseudo, uid)
//         }

//         this.setState({
//             uid,
//             chef : box.chef || uid
//         })
//     }

//     authenticate = () => {
//         const provider = new FacebookAuthProvider()
//         const auth = getAuth()

//         signInWithPopup(auth, provider).then(result => this.handleAuth(result))
//     }

//     logout = async () => {
//         const auth = getAuth()
        
//         try {
//             await signOut(auth)
//             this.setState({ uid : null })
//             console.log('Déconnexion')
//         }
//         catch (err) {
//             console.error('Erreur lors de la déconnexion')
//         }
//     }

//     render() {
//         const { recettes, ajouterRecette, majRecette, supprimerRecette, chargerExemple } = this.props

//         const logout = <button onClick={this.logout}>Déconnexion</button>

//         if (!this.state.uid) {
//             return <Login authenticate={this.authenticate}></Login>
//         }

//         if (this.state.uid !== this.state.chef) {
//             return (
//                 <div>
//                     <p>Tu n'es pas le chef de cette boite!</p>
//                     {logout}
//                 </div>
//             )
//         }

//         return (
//             <div className="cards">
//                 <AjouterRecette ajouterRecette={ajouterRecette} />
//                 {
//                     Object.keys(recettes)
//                         .map(key => (
//                             <AdminForm
//                                 key={key}
//                                 id={key}
//                                 majRecette={majRecette}
//                                 supprimerRecette={supprimerRecette}
//                                 recettes={recettes}
//                             />
//                         ))
//                 }
//                 <footer>
//                     {logout}
//                     <button onClick={chargerExemple}>Remplir</button>
//                 </footer>
//             </div>
//         )
//     }
// }

export default Admin