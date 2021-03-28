import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex: 1;
    padding: 20px;
    align-items: flex-start;
    justify-content: flex-start; 
`;
export const Header = styled.TouchableOpacity`
    margin-top: 15px;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: row;
    width: 30%;
`;

export const TituloHeader = styled.Text`
    font-family: 'Poppins-Bold';
    font-size: 22px;
    color: #6A6180;
    margin-bottom:20px;
    margin-left: 10px;
`;

export const SubTitulo = styled.Text`
    font-family: 'poppins-regular';
    font-size: 20px;
    color: #3F3D56;
    margin-bottom:32px;
`;

export const CustomButton = styled.TouchableOpacity`
    height: 55px;
    background-color: #1C92FF;
    border-radius: 8px;
    justify-content: center;
    align-items : center;
    width: 100%;
    margin-bottom: 10px;
`;

export const CustomButtonText = styled.Text`
    font-size: 20px;
    font-family: 'poppins-regular';
    color: #fff;
`;

export const InputArea = styled.View`
    width: 100%;
`;