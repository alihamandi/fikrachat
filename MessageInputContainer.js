import React, { Component } from 'react';
import styled from 'styled-components';
import Context from './Context'

let MessageInput = styled.input`
width : 80%;
border : none;
background-color:#f5f5f5;
height: 50px;
width:1000px;
padding:20px;

`

let Button = styled.button`
border-radius:4px;
background-color:#466a83;
border:none;


`

let Container = styled.div `
display:flex;
position:fixed;
bottom:0px;
margin: 0 5%;

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