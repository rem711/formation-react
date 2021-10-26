import React from "react"

const Login = ({ authenticate }) => {
    return (
        <div className="login">
            <h2>Connecte toi pour créer tes recettes</h2>
            <button className="facebook-button" onClick={authenticate}>Me connecter avec Facebook</button>
        </div>
    )
}

export default Login