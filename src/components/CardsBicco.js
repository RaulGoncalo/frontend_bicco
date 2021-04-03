import React from 'react';
import styled from 'styled-components/native';

import AccontProfile from '../assets/fi-rr-user.svg';

import Info from '../assets/fi-rr-exclamation.svg';

const Area = styled.View`
    flex-direction: row;
    background-color: #fff;
    width: 100%;
    justify-content: space-between;
    border-radius: 20px;
    padding: 12px;
    margin-bottom: 20px;
`;

const TextBold = styled.Text`
    font-family: 'Poppins-Bold';
    font-size: 16px;
    color: #6A6180;
`;

const TextRegular = styled.Text`
    font-family: 'Poppins-Regular';
    font-size: 14px;
    color: #6A6180;
`;

const AvatarArea = styled.View`
    width:85px;
    height: 85px;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    border-radius: 20px;
    border: 2px;
    border-color: #6A6180;
`;

const InfoArea = styled.View`
    flex: 1;
    width: 100%;
`;

const IconArea = styled.TouchableOpacity`
    width: 25px;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 10px;
`;

export default ({name, work, value}) => {
    return(
        <Area>
            <AvatarArea>
                <AccontProfile width = "40" height = "40" fill = "#6A6180"/>
            </AvatarArea> 

            <InfoArea>
                <TextBold>{name}</TextBold>
                <TextRegular>{work}</TextRegular>
                <TextRegular>Valor por hora R$: {value}</TextRegular>
            </InfoArea>
            
            <IconArea>
                <Info width = "20" height = "20" fill = "#6A6180"/>
            </IconArea>
        </Area>
    )
}