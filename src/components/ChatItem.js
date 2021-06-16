import React from 'react';
import styled from 'styled-components/native';
import AccontProfile from '../assets/fi-rr-user.svg';
import {useNavigation} from '@react-navigation/native';

const Area = styled.TouchableOpacity`
    flex: 1;
    background-color: #E5E5E9;
    padding: 10px;
    flex-direction: row;
`;
const Name = styled.Text`
    font-family: 'Poppins-Medium';
    font-size: 18px;
    color: #6A6180;
`;
const AvatarArea = styled.View`
    width:70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    border-radius: 35px;
    border: 1px;
    border-color: #6A6180;
    margin-right: 15px;
`;

const InfoArea = styled.View`
    justify-content: flex-start;
    align-items: flex-start;
`;

const DateArea = styled.View`
    flex:1;
    justify-content: flex-end;
    align-items: flex-end;
`;

const Message = styled.Text`
    font-family: 'Poppins-Regular';
    font-size: 14px;
    color: #6A6180;
`;

const Date = styled.Text`
    font-family: 'Poppins-Regular';
    font-size: 11px;
    color: #6A6180;
    margin-bottom: 5px;
`;

const Border = styled.View`
    flex-direction: row;
    flex:1;
    margin-right: 10px;
    border-bottom-width: 0.5px;
    border-bottom-color:  #6A6180;
`;
export default (props) => {

  const abrevia = (message) => {
      if(message.length > 20){
        const messageAbre = message.substring(0, 20)
        return messageAbre + ' ...'
      }     
      return message
  }

  const navigation = useNavigation();
  
    return(
        <Area onPress = {() => navigation.navigate('Chat', props)}>
            <AvatarArea>
                <AccontProfile width = "30" height = "30" fill = "#6A6180"/>
            </AvatarArea>
            <Border>
                <InfoArea >
                    <Name>{props.name}</Name>
                    <Message>{abrevia(props.message)}</Message>
                </InfoArea>
                <DateArea>
                    <Date>{props.date}</Date>
                </DateArea>
            </Border>
        </Area>
    )
}