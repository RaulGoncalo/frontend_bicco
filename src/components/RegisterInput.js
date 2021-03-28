import React from 'react';
import styled from 'styled-components/native';


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

const Input = styled.TextInput`
    flex: 1;
    font-family: 'Poppins-Regular';
    font-size: 14px;
    color: #3F3D56;
    margin-left:10px;
`;

export default ({placeholder, value, onChangeText, password, maxLength, keyboardType}) => {
    
    return(
        <InputArea>
            <Input 
                placeholder = {placeholder}
                value = {value}
                onChangeText = {onChangeText}
                secureTextEntry = {password}
                maxLength = {maxLength}
                keyboardType = {keyboardType}
                placeholderTextColor = '#9C98A6'
            />
        </InputArea>
    );
}