import React from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

const Area = styled.TouchableOpacity`
    flex-direction: row;
    background-color: #fff;
    width: 100%;
    height : 50px;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 10px;
`;

const TextCard = styled.Text`
    font-family: 'Poppins-Bold';
    font-size: 16px;
    color: #6A6180;
    margin-right: 20px;
`;

export default ({IconSvg, text, route}) => {
    const navigation = useNavigation();
    return(
        <Area onPress = {() => navigation.navigate(route)}>
            <TextCard>{text}</TextCard>
            <IconSvg width = {20} height = {20} fill = "#6A6180"/>
        </Area>
    )
}