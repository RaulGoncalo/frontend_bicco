import React from 'react';
import styled from 'styled-components/native';
import AccontProfile from '../assets/fi-rr-user.svg';
import {useNavigation} from '@react-navigation/native'
import Info from '../assets/fi-rr-eye.svg';

const Area = styled.TouchableOpacity`
    flex-direction: row;    
    width: 100%;
    height: 100px;
    background-color: #fff;
    align-items:center;
    justify-content: space-between;
    border-color: #6A6180;
    border-radius: 4px;
    padding: 20px;
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
    border: 1px;
    border-color: #6A6180;
`;

const InfoArea = styled.View`
    justify-content: flex-start;
    align-items: flex-start;
    margin-right: 20px;
`;

const IconArea = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`;

const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;
export default (props) => {
    const navigation = useNavigation();
    return(
        <Area activeOpacity = {0.7} onPress= {() => props.showModal(props.data)}>
            <Container>
                <AvatarArea>
                    <AccontProfile width = "40" height = "40" fill = "#6A6180"/>
                </AvatarArea> 

                <InfoArea>
                    <TextBold>{props.data.name}</TextBold>
                    <TextRegular>{props.data.specialty}</TextRegular>
                    <TextRegular>Valor {props.data.value}</TextRegular>
                </InfoArea>
            </Container>
            <IconArea>
                <Info width = "20" height = "20" fill = "#6A6180"/>
            </IconArea>
        </Area>
    )
}