import React from 'react';
import styled from 'styled-components/native';

export const Header = styled.TouchableOpacity`
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    width: 100%;
`;

export const TituloHeader = styled.Text`
    text-align: center;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins-Bold';
    font-size: 20px;
    color: #6A6180;
    margin-right: 15px;
`;

export const Container = styled.SafeAreaView`
    flex: 1;
    padding: 20px;
    background-color: #E5E5E5;
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
    border-radius: 20px;
`;

export const Avatar = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 20px;
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
    width:85px;
    height: 85px;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    border-radius:20px;
    border: 2px;
    border-color: #6A6180;
    border
`;