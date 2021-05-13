import React from 'react';
import styled from 'styled-components/native';


export const Container = styled.ScrollView`
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

export const AreaShedules = styled.View`
    width: 50%;
    flex-direction: row;
    background-color: #FAFAFa;
    height : 50px;
    justify-content: center;
    align-items: center;
`;

export const Hour = styled.Text`
    font-family: 'Poppins-Bold';
    font-size: 12px;
    color: #6A6180;
    text-align: center;
`;


export const Shedules = styled.View`
    flex:1;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-radius: 8px;
    border: 1px;
    margin-top: 5px;
`;

export const Money = styled.View`
    flex:1;
    width: 40%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    border-radius: 8px;
    border: 1px;
`;

export const AreaPicker = styled.View`
   
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-radius: 8px;
    border: 1px;
`;

export const Picker = styled.Picker`
    width: 100%;
    height: 55px;
    color:  #6A6180;
    font-size: 12px;
    font-family: 'Poppins-Regular';
`;