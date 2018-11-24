import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import MessageInputContainer from './MessageInputContainer'
import Context from './Context'
import MessageList from './MessageList'
import firebase from 'firebase'









class App extends Component {
    constructor() {
        super()
        this.state = {
            MessageContent: '',
            messages: [],

        }

        firebase.firestore().collection('msgs').orderBy('date', 'asc').onSnapshot((snapshot) => {
            let msgs = []
            snapshot.forEach((doc) => {
                msgs.push(doc.data())
            })
            this.setState({
                messages: msgs
            })
        })
    }

    render() {
        return (
            <Context.Provider value={{
                state: this.state,
                actions: {
                    updateList: () => {
                        console.log(this.state.messageContent)
                        firebase.firestore().collection('msgs').add({
                            date: Date.now(),
                            content: this.state.messageContent
                        })


                    },

                    updateInput: (value) => {

                        this.setState({
                            messageContent: value
                        })

                    }
                    
                }
            }}>
                <MessageList />
                <MessageInputContainer />
            </Context.Provider>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'))