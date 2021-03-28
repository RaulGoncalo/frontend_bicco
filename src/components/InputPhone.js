import React from 'react';
import styled from 'styled-components/native';
import {TextInputMask} from 'react-native-masked-text'


const InputArea = styled.View`
    height: 50px;
    width: 100%;
    flex-direction: row;
    border-radius: 8px;
    margin-bottom: 15px;
    border: 0.5px;
    border-color: #3F3D56;
    justify-content: center;
    align-items: flex-start;
`;

export default ({placeholder, value, onChangeText, type}) => {
    
    return(
        <InputArea>
            <TextInputMask 
                placeholder = {placeholder}
                value = {value}
                onChangeText = {onChangeText}
                type = {type}
            />
        </InputArea>
    );
} 