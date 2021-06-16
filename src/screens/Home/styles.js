import React from 'react';
import styled from 'styled-components/native';

export const Header = styled.TouchableOpacity`
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    margin: 20px;
`;

export const TituloHeader = styled.Text`
    text-align: center;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins-Bold';
    font-size: 20px;
    color: #fff;
    margin-right: 20px;
`;

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #1C92FF;
`;

export const TextArea = styled.View`
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom:15px;
`;

export const CardHome = styled.View`
    background-color: #fff;
    margin-bottom:30px;
    height : 130px;
    flex-direction: row;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
`;

export const Avatar = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 60px;
`;

export const InfoArea = styled.View`
    flex: 1;
    width: 100%;
    margin: 5px;
`;

export const UserName = styled.Text`
    font-family: 'Poppins-Bold';
    font-size: 16px;
    color: #6A6180;
    margin-bottom:5px;
`;

export const UserEmail = styled.Text`
    font-family: 'Poppins-Light';
    font-size: 14px;
    color: #6A6180;
    margin-bottom:5px;
`;

export const AreaIcon = styled.TouchableOpacity`
    width:25px;
    height: 25px;
    justify-content:center;
    align-items: center;
    margin-right: 5px;
`;
export const AreaScroller = styled.View`
    height: 120px;
    margin-bottom: 20px;
`;
export const ScrollerHorizontal = styled.ScrollView``;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;

export const AvatarArea = styled.TouchableOpacity`
    width:105px;
    height: 105px;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    border-radius:70px;
    border: 1px;
    border-color: #6A6180;
`;

export const Card = styled.View`
    flex-grow: 8;
    padding: 20px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    background-color: #E5E5E5;
`;