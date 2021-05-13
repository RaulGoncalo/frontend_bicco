import React from 'react';
import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
    flex: 3.5;
    padding: 20px;
    background-color: #E5E5E5;
    justify-content: space-between;
`;


export const AreaPersonal = styled.View`
    flex-direction: row;
    width: 100%;
    padding: 10px;
    justify-content: flex-start;
    align-items: flex-start;
    
`;

export const AvatarArea = styled.TouchableOpacity`
    width:85px;
    height: 85px;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    border-radius:20px;
    border: 2px;
    border-color: #6A6180;
`;
export const AreaDataPersonal = styled.View`
    align-items: flex-start;
    justify-content: flex-start;
`;

export const Name = styled.Text`
    font-family: 'Poppins-Bold';
    font-size: 16px;
    color: #6A6180;
    margin-bottom:5px;
`;

export const TextInfos = styled.Text`
    font-family: 'Poppins-regular';
    font-size: 14px;
    color: #6A6180;
    margin-bottom:5px;
`;

export const Divider = styled.View`
    flex-direction: row;
    margin: 5px;
    background-color: rgba(0, 0, 0, 0.2);
    width: 95%;
    height: 1px;
`;
export const AreaSpecialty = styled.View`
    padding: 10px;
    align-items: flex-start;
    justify-content: flex-start;
`;
export const Titulo = styled.Text`
    font-family: 'Poppins-Bold';
    font-size: 14px;
    color: #6A6180;
    margin-bottom:5px;
`;

export const AreaAvailability = styled.View`
    padding: 10px;
    align-items: flex-start;
    justify-content: flex-start;
`;
export const AreaDesc = styled.View`
    padding: 10px;
    align-items: flex-start;
    justify-content: flex-start;
`;
export const AreaValue = styled.View`
    padding: 10px;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const ButtonArea = styled.View`
    flex-direction: row;
    padding: 20px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

export const ButtonEdit = styled.TouchableOpacity`
    flex-direction: row;
    padding: 5px;
    height: 40px;
    width: 45%;
    background-color: #1C92FF;
    border-radius: 8px;
    justify-content: space-around;
    align-items : center;  
`;
export const ButtonDelete = styled.TouchableOpacity`
    flex-direction: row;
    padding: 5px;
    height: 40px;
    width: 45%;
    background-color: #FF5E5E;
    border-radius: 8px;
    justify-content: space-around;
    align-items : center;
    
`;
export const TextButton = styled.Text`
    font-size: 20px;
    font-family: 'poppins-regular';
    color: #fff;
    margin-left: 10px;
`;
export const Header = styled.TouchableOpacity`
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: row;
    width: 30%;
    margin-bottom : 50px;
`;