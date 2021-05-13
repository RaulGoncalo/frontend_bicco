import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet} from 'react-native'


export default ({placeholder, value, onChangeText, password, maxLength, keyboardType, errorMessage, multiline}) => {
    


    return(      
        <>
            <Input 
                placeholder = {placeholder}
                value = {value}
                onChangeText = {onChangeText}
                secureTextEntry = {password}
                maxLength = {maxLength}
                keyboardType = {keyboardType}
                placeholderTextColor = '#9C98A6'
                multiline = {multiline}
                style = {multiline ? styles.textAlignDesc : styles.textAlign}
                            
            />
            <TextErro>{errorMessage}</TextErro>
        </>  
            
    );
}

const styles = StyleSheet.create({
    textAlignDesc:{
        textAlignVertical: 'top',
    },
    textAlign:{
        textAlign: 'left',
    }
})

const Input = styled.TextInput`
    height: ${props => props.multiline ? '150px' : '55px'};
    border: 1px;
    border-radius: 8px;
    border-color:  #3F3D56;
    padding: 10px;
    font-family: 'Poppins-Regular';
    font-size: 14px;
    color: #3F3D56;
`;

const TextErro = styled.Text`
    font-family: 'Poppins-Regular';
    font-size: 10px;
    color: red;
    margin-left:10px;
    margin-bottom: 5px;
`;