import React from 'react';
import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
    flex: 1;
    padding-left: 20px;
    padding-right: 20px;
    background-color: #E5E5E5;
`;
export const Titulo = styled.Text`
    font-family: 'Poppins-Bold';
    font-size: 16px;
    color: #6A6180;
    margin-bottom:5px;
`;

export const TituloLigth = styled.Text`
    font-family: 'Poppins-Regular';
    font-size: 14px;
    color: #6A6180;
    margin-bottom:5px;
`;

export const CardArea = styled.View`
    background-color: #fff;
    width: 100%;
    border-radius: 8px;
    padding: 12px;
    margin-top: 10px;
    margin-bottom: 15px;
`;
export const Scroller = styled.ScrollView`
`;

export const CustomButton = styled.TouchableOpacity`
    height: 55px;
    background-color: #1C92FF;
    border-radius: 8px;
    justify-content: center;
    align-items : center;
    width: 100%;
    margin-top: 5px;
    margin-bottom: 10px;
`;

export const CustomButtonText = styled.Text`
    font-size: 20px;
    font-family: 'poppins-regular';
    color: #fff;
`;

export const TituloHeader = styled.Text`
    font-family: 'Poppins-Bold';
    font-size: 18px;
    color: #6A6180;
    margin-bottom:5px;
    margin-left: 10px;
`;
export const Header = styled.TouchableOpacity`
    margin-top: 20px;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: row;
    width: 30%;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;


export const CardSchedules = styled.View`
    width: 100%;
    border-radius: 8px;
    margin-bottom: 15px;
`;



