import React from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

const Area = styled.TouchableOpacity`
    flex-direction: row;
    width: 100%;
    background-color: #fff;
    height : 50px;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
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

export default ({IconSvg, text, route, parms}) => {
    const navigation = useNavigation();
    return(
        <Area onPress = {() => navigation.navigate(route, {parms})}>
            <TextCard>{text}</TextCard>
            <IconSvg width = {20} height = {20} fill = "#6A6180"/>
        </Area>
    )
}