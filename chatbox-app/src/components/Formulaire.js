import React, { useState } from 'react'

function Formulaire({ addMessage, pseudo, length : lengthBase }) {
    const [messageText, setMessageText] = useState('')
    const [length, setLength] = useState(lengthBase)

    function createMessage() {
        const message = {
            pseudo,
            message : messageText
        }

        addMessage(message)

        setMessageText('')
        setLength(lengthBase)
    }

    function handleSubmit(event) {
        event.preventDefault()
        createMessage()
    }

    function handleChange(event) {
        const message = event.target.value
        setMessageText(message)
        setLength(lengthBase - message.length)
    }

    function handleKeyUp(event) {
        if (event.key === 'Enter') {
            createMessage()
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <textarea required maxLength={lengthBase} value={messageText} onChange={handleChange} onKeyUp={handleKeyUp} />
            <div className="info">
                {length}
            </div>
            <button type="submit">Envoyer</button>
        </form>
    )
}

export default Formulaire