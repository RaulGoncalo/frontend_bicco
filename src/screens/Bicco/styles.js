import React from 'react';
import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
    flex: 1;
    padding-left: 20px;
    padding-right: 20px;
    background-color: #E5E5E5;
    justify-content: flex-start;
    align-items: flex-start;
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

export const AreaScroller = styled.View`
    flex: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const ListBicco = styled.FlatList`

`;