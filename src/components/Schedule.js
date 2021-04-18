import React from 'react';
import styled from 'styled-components/native';
import {TextInputMask} from 'react-native-masked-text'
import {StyleSheet} from 'react-native'
import Minus from '../assets/fi-rr-minus.svg';

const styles = StyleSheet.create({
    inputMask: {
        width: 65,
        height: '100%',
        fontSize: 14,
        alignSelf: "center",
        justifyContent: "center",
        fontFamily: 'Poppins-Bold',
        color: "#3F3D56",
    },
})

const Shedules = styled.View`
    flex:1;
    flex-direction: row;
    background-color: #FAFAFa;
    height : 50px;
    justify-content: space-around;
    align-items: center;
    border-radius: 4px;
    margin-bottom: 10px;
`;

const AreaShedules = styled.View`
    width: 50%;
    flex-direction: row;
    background-color: #FAFAFa;
    height : 50px;
    justify-content: center;
    align-items: center;
`;

const Hour = styled.Text`
    font-family: 'Poppins-Bold';
    font-size: 12px;
    color: #6A6180;
    margin-right:5px;
`;

const Day = styled.Text`
    font-family: 'Poppins-Bold';
    font-size: 14px;
    color: #6A6180;
`;


export default ({day, from, to}) => {
    return(
        <Shedules>
            <Day>{day}</Day>
            <Minus width = "40" height = "40" fill = "#6A6180"/>
            <AreaShedules>
                <Hour>dás</Hour>
                <TextInputMask
                    placeholder = "00:00"
                    placeholderTextColor = '#9C98A6'
                    value = {from}
                    type={'datetime'}
                    options={{
                        format: 'HH:mm'
                    }}
                    style={styles.inputMask}
                />
                <Hour>ás</Hour>
                <TextInputMask
                    placeholder = "00:00"
                    placeholderTextColor = '#9C98A6'
                    type={'datetime'}
                    value = {to}
                    options={{
                        format: 'HH:mm'
                    }}
                    style={styles.inputMask}
                />
            </AreaShedules>                                
        </Shedules>
    )
}