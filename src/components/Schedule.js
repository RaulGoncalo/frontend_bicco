import React, {useState} from 'react';
import styled from 'styled-components/native';
import {TextInputMask} from 'react-native-masked-text'
import {StyleSheet} from 'react-native'
import Minus from '../assets/fi-rr-minus.svg';
import {View, Text} from 'react-native'
import { useCallback } from 'react';
import { set } from 'react-native-reanimated';

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
    errorMessage: {
        alignSelf: "flex-start",
        marginLeft: 10,
        color: "red",
        fontSize: 10,
        fontFamily: "Poppins-Regular",
        marginBottom: 5,
        marginLeft: 15,
        color: "#f00",
        fontSize: 12
    }
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

const Day = styled.Picker`
    color: #6A6180;
    width: 120px;
`;



export default ({ id, day, from, to}) => {
    
  /*  const [schedule, setSchecule] = useState(
        {
            id: id,
            day : day,
            from : from,
            to : to
        },
    )

    
    let scheduleField1 = null
    let scheduleField2 = null

    if(schedule.day != 'Dia' && scheduleField1.isValid() && scheduleField2.isValid()){
        console.log(schedule)
    }*/

    return(
            <Shedules>
                <Day>
                    <Day.Item   label = "Dia" value = ""/>
                    <Day.Item   label = "Dom" value = "Dom"/>
                    <Day.Item   label = "Seg" value = "Seg"/>
                    <Day.Item   label = "Ter" value = "Ter"/>
                    <Day.Item   label = "Qua" value = "Qua"/>
                    <Day.Item   label = "Qui" value = "Qui"/>
                    <Day.Item   label = "Sex" value = "Sex"/>
                    <Day.Item   label = "Sáb" value = "Sáb"/>
                </Day>
                <AreaShedules>
                    <Hour>dás</Hour>
                    <TextInputMask
                        placeholder = "00:00"
                        placeholderTextColor = '#9C98A6'
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
                        options={{
                            format: 'HH:mm'
                        }}
                        style={styles.inputMask}
                    />
                </AreaShedules>                                
            </Shedules>
    )
}
