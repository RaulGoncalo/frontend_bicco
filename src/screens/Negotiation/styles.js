import React from 'react';
import styled from 'styled-components/native';

export const Header = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin: 20px;
`;

export const TituloHeader = styled.Text`
    text-align: center;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins-Bold';
    font-size: 20px;
    color: #fff;
    margin-left: 20px;
`;

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #1C92FF;
`;

export const Card = styled.ScrollView`
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    background-color: #E5E5E5;
`;
export const SearchText = styled.Text`
    font-family: 'Poppins-Regular';
    font-size: 14px;
    color: #6A6180;
    margin-left: 10px;
`;

export const Search = styled.View`
    flex-direction: row;
    height: 45px;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    background-color: white;
    border-radius: 20px;
`;

export const Input = styled.TextInput`
    flex: 1;
    font-family: 'Poppins-Regular';
    font-size: 14px;
    color: #3F3D56;
    margin-left: 10px;
`;

export const AreaSearch = styled.View`
    flex: 1;
    padding: 20px;
`;