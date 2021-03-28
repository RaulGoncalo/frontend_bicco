import React from 'react';
import styled from 'styled-components/native';

const Text = styled.Text`
    font-family: 'Poppins-Regular';
    font-size: 14px;
    color: #6A6180;
`;

export default ({texto}) => {
    return (<Text>{texto}</Text>)
}