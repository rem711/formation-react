import React, { createRef, useEffect, useState } from 'react'
import '../styles/App.css'
import '../styles/animations.css'
import Formulaire from './Formulaire'
import Message from './Message'
import { addDatabaseOnChangeListener, addDatabaseNewElement } from '../utils/DB/messagesDB'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

function App(props) {
  const [messagesList, setMessagesList] = useState({})
  const [currentPseudo, ] = useState(props.match.params.pseudo)

  useEffect(() => {
    const onNewDatabaseContent = data => setMessagesList(data)
    addDatabaseOnChangeListener(onNewDatabaseContent)
  }, [])

  useEffect(() => {
    const ref = messagesRef.current
    ref.scrollTop = ref.scrollHeight
  }, [messagesList, currentPseudo])

  const messagesRef = createRef()

  function addMessage(message) {
    let messages = { ...messagesList }
    messages[`message-${Date.now()}`] = message

    Object
      .keys(messages)
      .slice(0, -10)
      .forEach(key => {
        messages[key] = null
      })

    addDatabaseNewElement(messages)
  }

  function isUser(pseudo) {
    return pseudo === currentPseudo
  }

  const messages = Object
      .keys(messagesList)
      .map(key => (
        <CSSTransition
          key={key}
          timeout={200}
          classNames="fade"
        >
          <Message isUser={isUser} pseudo={messagesList[key].pseudo} message={messagesList[key].message} />
        </CSSTransition>
      ))
    
    return (
      <div className='box'>
        <div>
          <div className="messages" ref={messagesRef}>
            <TransitionGroup className="message">
              {messages}
            </TransitionGroup>
          </div>          
        </div>
        <Formulaire length={140} pseudo={currentPseudo} addMessage={addMessage} />
      </div>
    )
}

// class App extends Component {
//   state = {
//     messages: {},
//     pseudo: this.props.match.params.pseudo
//   }

//   messagesRef = createRef()

  // componentDidMount() {
  //   const onNewDatabaseContent = data => this.setState({ messages: data })
  //   addDatabaseOnChangeListener(onNewDatabaseContent)
  // }

  // componentDidUpdate() {
  //   const ref = this.messagesRef.current
  //   ref.scrollTop = ref.scrollHeight
  // }

//   addMessage = message => {
//     let messages = { ...this.state.messages }
//     messages[`message-${Date.now()}`] = message

//     Object
//       .keys(messages)
//       .slice(0, -10)
//       .forEach(key => {
//         messages[key] = null
//       })

//     addDatabaseNewElement(messages)
//   }

//   isUser = pseudo => pseudo === this.state.pseudo

//   render() {
//     const messages = Object
//       .keys(this.state.messages)
//       .map(key => (
//         <CSSTransition
//           key={key}
//           timeout={200}
//           classNames="fade"
//         >
//           <Message isUser={this.isUser} pseudo={this.state.messages[key].pseudo} message={this.state.messages[key].message} />
//         </CSSTransition>
//       ))
    
//     return (
//       <div className='box'>
//         <div>
//           <div className="messages" ref={this.messagesRef}>
//             <TransitionGroup className="message">
//               {messages}
//             </TransitionGroup>
//           </div>          
//         </div>
//         <Formulaire length={140} pseudo={this.state.pseudo} addMessage={this.addMessage} />
//       </div>
//     )
//   }
// }

export default App
