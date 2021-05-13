import React from 'react';
import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background-color:  #1C92FF;
`
export const FlatList = styled.FlatList``;

export const AreaFilter = styled.ScrollView`
    flex: 1;
    width: 100%;
    border-radius: 10px;
    padding: 15px;
    margin-bottom: 40px;
`;

export const Titulo = styled.Text`
    font-family: 'Poppins-Bold';
    font-size: 20px;
    margin: 20px;
    color: white;
`;

export const SubTitulo = styled.Text`
    font-family: 'Poppins-Bold';
    font-size: 16px;
    color: #6A6180;
    margin-bottom:5px;
    margin-left: 5px;
`;

export const Location = styled.View`
    flex-direction: row;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-color:  #1C92FF;
    margin-bottom:15px; 
`;

export const InputLocation = styled.TextInput`
    flex-grow: 1;
    font-family: 'Poppins-Regular';
    font-size: 14px;
    color: #6A6180;
    margin-right: 10px;
    margin-top: 20px;

`;


export const ButtonIcon = styled.TouchableOpacity`
    margin-right: 15px;
`;

export const Specialty = styled.View`
    flex-direction: row;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-color:  #1C92FF;
    margin-bottom:15px;          
`;

export const Schedule = styled.View`
    flex-direction: row;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-color:  #1C92FF;
    margin-bottom:30px;  
`;
export const InputSpecialty = styled.TextInput`
    flex-grow: 1;
    font-family: 'Poppins-Regular';
    font-size: 14px;
    color: #6A6180;
    margin-right: 10px;
`;
export const Picker = styled.Picker`
    width: 100%;
    height: 55px;
    color:  #6A6180;
    font-size: 10px;
    font-family: 'Poppins-Regular';
`;

export const BottomFilter = styled.View`
    flex-direction: row;
    height: 60px;
    justify-content: space-between;
    align-items: center;
`;

export const Card = styled.ScrollView`
    flex-grow: 8;
    padding: 20px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    background-color: #E5E5E5;
`;
export const CardHeader = styled.View`
    background-color: #1C92FF;
    justify-content: center;
    align-items: center;
`;
export const Scroll = styled.ScrollView`
    padding: 10px;
`;

export const Hour = styled.Text`
    font-family: 'Poppins-Bold';
    font-size: 14px;
    color: #6A6180;
    text-align: center;
`;

export const Shedules = styled.View`
    flex:1;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-color:  #1C92FF;
    margin-top: 5px;
`;

export const CustomButton = styled.TouchableOpacity`
    height: 40px;
    background-color: #1C92FF;
    border-radius: 8px;
    justify-content: center;
    align-items : center;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 10px;
`;

export const CustomButtonText = styled.Text`
    font-size: 20px;
    font-family: 'poppins-regular';
    color: #fff;
`;

export const IconLoading = styled.ActivityIndicator`
    margin-bottom: 30px;
`;