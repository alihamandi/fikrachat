import React, { Component } from 'react';
import styled from 'styled-components';
import Context from './Context'

let Msgs = styled.div `
 font-family:arial;
 font-size:2rem;
 padding-bottom:60px;
 padding: 0 5%;
 hieght:70vh;
`


class MessageList extends Component{

    render(){
        return(
            <Context.Consumer>
                {
                    (ctx)=>{
                        return (
                        <div>
                            {
                                ctx.state.messages.map((item , i)=>{
                                    return(
                                        <Msgs key={i}>{item.content}</Msgs>
                                    )
                                })
                            }
                        </div>
                        )
                    }
                }
            </Context.Consumer>
        )
    }
}




export default MessageList