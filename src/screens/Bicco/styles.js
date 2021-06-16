import React from 'react';
import styled from 'styled-components/native';


export const Container = styled.View`
    flex: 1;
    background-color:  #1C92FF;
`;

export const TextArea = styled.View`
    justify-content: flex-start;
    align-items: flex-start;
    margin-top:20px;
    margin-bottom: 10px;
    padding-left:20px;

`;

export const IconLoading = styled.ActivityIndicator`
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const AreaCards = styled.View`
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const AreaScroller = styled.ScrollView`
    flex: 1;
    width: 100%;
`;

export const CardHeader = styled.View`
    background-color: #1C92FF;
    justify-content: center;
    align-items: center;
`;

export const Titulo = styled.Text`
    font-family: 'Poppins-Bold';
    font-size: 20px;
    margin: 20px;
    color: white;
`;

export const Card = styled.ScrollView`
    flex-grow: 8;
    padding: 20px;
    background-color: #E5E5E5;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
`;