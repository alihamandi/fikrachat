import React, { Component } from 'react';
import styled from 'styled-components';
import Context from './Context'

let MessageInput = styled.input`
  width: 90%;
  padding: 0px;
  margin: 0px;
  height: 60px;
  border: none;
  outline: none;
  font-size: 1.4rem;
`
let Button = styled.button`
  border-radius: 5px;
  background-color: #466AB3;
  color: white;
  width: 9%;
  padding: 0px;
  margin: 0px;
  font-size: 1.4rem;
  border:none;
  
`

let Container = styled.div`
  display: flex;
  width: 90%;
  border: 1px solid #000;
  position: fixed;
  padding: 5px;
  height: 60px;
  bottom: 0px;
  margin: 10px 5%;
  border-radius: 5px;
`



class MessageInputContainer extends Component {
    render() {
        return (
            <Context.Consumer>
                {
                    (ctx) => {
                        return (
                            <Container>
                            <React.Fragment>
                                <MessageInput value={ctx.actions.messagesContent} onChange={(event)=>{
                                    ctx.actions.updateInput(event.target.value)
                                }} placeholder='type'/>
                                <Button onClick={ctx.actions.updateList}>Send</Button>
                            </React.Fragment>
                            </Container>
                        )
                    }
                }
            </Context.Consumer>
        )
    }
}


export default MessageInputContainer