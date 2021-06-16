import React from 'react';
import styled from 'styled-components/native';
import AccontProfile from '../assets/fi-rr-user.svg';
import Location from '../assets/fi-rr-marker.svg';
import Calendar from '../assets/fi-rr-calendar.svg';

const Area = styled.TouchableOpacity`
    background-color: #fff;
    padding: 20px;
    justify-content: space-between;
    border-color: #6A6180;
    border-radius: 8px;
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
    margin-right: 5px;
`;

const TextRegularBigger = styled.Text`
    font-family: 'Poppins-Regular';
    font-size: 15px;
    color: #6A6180;
    margin-right: 5px;
`;


const AvatarArea = styled.View`
    width:85px;
    height: 85px;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    border: 1px;
    border-color: #6A6180;
    margin-right: 20px;
`;

const InfoArea = styled.View`
    justify-content: flex-start;
    align-items: flex-start;
    margin-right: 20px;
`;
const InfoAreaTwo = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
const IconArea = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const Container = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 20px;
`;
export default (props) => {
    function abrevia(str) {
        const nome = str.replace(/\s(de|da|dos|das)\s/g, ' ')
            .trim();

        return nome.split(' ')
            .map((parte, index) => (index == 0 || index == 1) ? parte : `${parte[0]}.` )
            .join(' ');
    }
    
    return(
        <Area activeOpacity = {0.7} onPress= {() => props.showModal(props.data)}>
            <Container>
                <AvatarArea>
                    <AccontProfile width = "40" height = "40" fill = "#6A6180"/>
                </AvatarArea> 

                <InfoArea>
                    <TextBold>{abrevia(props.data.name)}</TextBold>
                    <TextRegularBigger>{props.data.specialty}</TextRegularBigger>
                    <TextRegularBigger>{props.data.value}</TextRegularBigger>
                </InfoArea>
            </Container>
            <InfoAreaTwo>
                <IconArea>
                    <TextRegular>{props.data.city}</TextRegular>
                    <Location width = "20" height = "20" fill = "#6A6180"/>
                </IconArea>
                <IconArea>
                    <TextRegular>{props.data.interval}</TextRegular>
                    <Calendar width = "20" height = "20" fill = "#6A6180"/>
                </IconArea>
            </InfoAreaTwo>
        </Area>
    )
}