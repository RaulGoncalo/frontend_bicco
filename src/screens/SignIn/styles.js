import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex: 1;
    padding: 20px;
    align-items: flex-start;
    justify-content: flex-start; 
`;

export const Titulo = styled.Text`
    font-size: 24px;
    font-family: 'Poppins-Bold';
    color: #3F3D56;
    margin-top: 15px;
    margin-bottom:32px;
`;
export const SubTitulo = styled.Text`
    font-family: 'Poppins-Regular';
    font-size: 20px;
    color: #3F3D56;
    margin-bottom:24px;
`;

export const CustomButton = styled.TouchableOpacity`
    height: 55px;
    background-color: #1C92FF;
    border-radius: 8px;
    justify-content: center;
    align-items : center;
`;

export const CustomButtonText = styled.Text`
    font-family: 'Poppins-Regular';
    font-size: 20px;
    color: #fff;
`;

export const InputArea = styled.View`
    width: 100%;
`;

export const InputAreaRegister = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const SignMessageButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 20px;
`;

export const SignMessageButtonForget = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 30px;
    width: 160px;
`;

export const SignMessageButtonTextForget = styled.Text`
    font-family: 'Poppins-Regular';
    font-size: 14px;
    color: #3F3D56;
`;

export const SignMessageButtonText2 = styled.Text`
    font-size: 16px;
    color: #3F3D56;
    font-family: 'Poppins-Bold';
`;