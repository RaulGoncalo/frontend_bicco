import React from 'react';
import { useReducer } from 'react';
import styled from 'styled-components/native';


const Container = styled.View`
    margin-bottom: 10px;
    flex-direction: row;
    display: flex;
`;

const MessageCard = styled.View`
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 1px 1px #CCC;

    display: flex;
    flex-direction: column;

    padding: 3px;
    max-width: 90%;
`;

const Text = styled.Text`
    font-family: 'Poppins-Regular';
    font-size: 14px;
    color:  #6A6180;
    margin: 5px 45px 5px 5px;
`;

const Date = styled.Text`
    font-family: 'Poppins-Ligth';
    font-size: 12px;
    color:  #999;
    margin-top: -8px;
    margin-bottom: 5px;
    margin-right: 5px;
    text-align: right;
    height: 15px;
`;

 export default ({data, user}) => {
     return(
         <Container
            style= {{
                justifyContent: user === data.author ? 'flex-end' : 'flex-start',
            }}
         >
             <MessageCard
                style= {{
                    backgroundColor: user === data.author ? '#c0c0c0' : '#fff'
                }}
             >
                <Text
                    style= {{
                        color: user === data.author ? '#FFF' : '#999'
                    }}
                >
                    {data.content}
                </Text> 
                <Date
                    style= {{
                        color: user === data.author ? '#FFF' : '#999'
                    }}
                >
                    {data.date}
                </Date>
             </MessageCard>
         </Container>
     )
 }