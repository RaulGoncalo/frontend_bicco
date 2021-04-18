import React from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

const Area = styled.TouchableOpacity`
    background-color: #fff;
    width: 120px;
    height : 120px;
    justify-content: space-between;
    align-items: flex-start;
    border-radius: 8px;
    padding: 15px;
    margin-right: 10px;
`;

const TextCard = styled.Text`
    font-family: 'Poppins-Bold';
    font-size: 14px;
    color: #6A6180;
    margin-bottom:5px;
`;



export default ({IconSvg, text, route, user}) => {
    const navigation = useNavigation();
    return(
        <Area onPress = {() => navigation.navigate(route, user)}>
            <IconSvg width = {24} height = {24}fill = "#6A6180"/>
            <TextCard>{text}</TextCard>
        </Area>
    )
}