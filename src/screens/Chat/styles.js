import React from 'react';
import styled from 'styled-components/native';

export const TituloName = styled.Text`
    text-align: center;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins-Bold';
    font-size: 18px;
    color: #6A6180;
    margin-bottom: 8px;
`;

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #E5E5E5;
    padding: 10px;
`;


export const AreaHeader = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 20px;
    border-bottom-width: 0.5px;
    border-bottom-color:  #6A6180;
`;

export const Header = styled.TouchableOpacity`
    flex:0.5;
`;

export const AreaBody = styled.View`
    flex: 1;
    padding: 10px 10px;
`;


export const Body = styled.ScrollView`
    margin-bottom: 20px;
`;
export const AreaFooter = styled.View`
    margin-bottom: 15px;
    flex-direction: row;
    align-items: center;
`;

export const InputArea = styled.View`
    flex: 1;
    background-color: #fff;
    border-radius: 30px;
    height: 50px;
    width: 100%;
`;

export const Input = styled.TextInput`
    flex: 1;
    font-family: 'Poppins-Regular';
    font-size: 14px;
    color: #3F3D56;
    margin-left: 10px;
    justify-content: center;
    align-items: center;
`;

export const AreaBottom = styled.TouchableOpacity`
    background-color: #1C92FF;
    height: 50px;
    width: 50px;
    border-radius: 30px;
    margin-left: 10px;
    justify-content: center;
    align-items: center;
`;

export const ButtonSend = styled.View`
    
`;
