import React, {useState, useEffect} from 'react';
import {
    Container, 
    Header,
    Titulo, 
    TituloHeader, 
    TituloLigth, 
    CardArea, 
    CustomButton, 
    CustomButtonText,
    Hour,
    Shedules,
    Picker,
    AreaPicker,
    Money
} from './styles';

import IconExit from '../../assets/fi-rr-arrow-small-left.svg';
import Input from '../../components/Input';
import {Alert, StyleSheet, Text}  from 'react-native';
import Api from '../../Api';
import {TextInputMask} from 'react-native-masked-text'
import { ceil } from 'react-native-reanimated';
import AsyncStorage from '@react-native-community/async-storage';


export default (props) => {
    
    const [data, setData] = useState(props.route.params)
    const [errorSpecialty, setErrorSpecialty] = useState('');
    const [errorCity, setErrorCity] = useState('');
    const [errorDesc, setErrorDesc] = useState('');
    const [errorValue, setErrorValue] = useState('');
    const [errorTo, setErrorTo] = useState('');
    const [errorInterval, setErrorInterval] = useState('');

    let toField = null
    let fromField = null

    const handleRegisterClick = async () => {
        setErrorSpecialty(null)
        setErrorCity(null)
        setErrorDesc(null)
        setErrorValue(null)
        setErrorTo(null)
        setErrorInterval(null)
       if(data.specialty != '' && data.desc != '' && data.city != '' && data.value != '' && fromField.isValid() && toField.isValid() && data.interval != ''){
            let token = await AsyncStorage.getItem('token')
            if(data.id || data.id == '' ){
                let resUpdate = await Api.updateBicco(data.id, data, token)
                if(resUpdate.success){
                    Alert.alert("Sucesso", "Bicco cadastrado", [
                        { text : "Ok", onPress : () => props.navigation.navigate('Bicco')}]);

                }else{
                    Alert.alert("Erro", resUpdate.error, [
                        { text : "Ok", onPress : () => props.navigation.navigate('Bicco')}]);
                } 
            }else{
                
                let res = await Api.registerBicco(data, token)
                console.log(data, token)
                if(res.success){
                    Alert.alert("Sucesso", "Bicco cadastrado", [
                        { text : "Ok", onPress : () => props.navigation.navigate('Bicco')}]);

                }else{
                    Alert.alert("Erro", res.error, [
                        { text : "Ok", onPress : () => props.navigation.navigate('Bicco')}]);
                } 
            }
        }else{
            if(data.specialty == '')
                setErrorSpecialty("Digite sua profissão")
            if(data.city == '')
                setErrorCity("Digite sua cidade")
            if(data.desc == '')
                setErrorDesc("Digite uma descrição")
            if(data.value == '')
                setErrorValue("Digite um valor")
            if(!fromField.isValid())
                setErrorTo("Digite um horário válido")
            if(!toField.isValid())
                setErrorTo("Digite um horário válido")
            if(data.interval == '')
                setErrorInterval("Digite um intervalo")
        }  
    }
    const day = [
        "Dias da semana",
        "Finais de semana",
        "Semana inteira",
        "Há combinar",
    ]

    return(
        <Container  vertical={true} showsVerticalScrollIndicator= {false}>
            <Header onPress = {() => props.navigation.navigate('Bicco')}>
                <IconExit width = "30" height = "30px" fill = "#6A6180"/>
                <TituloHeader>Voltar</TituloHeader>
            </Header>

            
            <Titulo>Preencha todos os campos:</Titulo>
            <CardArea>
                <TituloLigth>Dados do Bico:</TituloLigth>
                <Input
                    placeholder = "Profissão"
                    value = {data.specialty}
                    onChangeText = { specialty => {
                        setData({...data, specialty})
                        setErrorSpecialty(null)
                    }}
                    errorMessage = {errorSpecialty}
                />
                
                <Input
                    placeholder = "Cidade"
                    value = {data.city}
                    onChangeText = { city => {
                        setData({...data, city})
                        setErrorCity(null)
                    }}
                    errorMessage = {errorCity}
                />
                
                <Input
                    placeholder = "Descrição de até 150 caracteres"
                    multiline = {true}
                    value = {data.desc}
                    onChangeText = { desc => {
                        setData({...data, desc})
                        setErrorDesc(null)
                    }}
                    maxLength = {150}
                    errorMessage = {errorDesc}
                />
                <Money>
                    <TextInputMask
                        placeholder = "Valor por hora"
                        placeholderTextColor = '#9C98A6'
                        type={'money'}
                        value= {data.value}
                        options={{
                            precision: 2,
                            separator: ',',
                            delimiter: '.',
                            unit: 'R$',
                            suffixUnit: ''
                        }}
                        onChangeText = {value => {
                            setData({...data, value})
                            setErrorValue(null)
                        }}
                        style={styles.inputMaskMoney}
                    />     
                </Money>
                <Text style={styles.errorMessage}>{errorValue}</Text>                   

                <TituloLigth>Disponibilidade:</TituloLigth> 
                <Shedules>
                        <Hour>Dás</Hour>
                        <TextInputMask
                            placeholder = "00:00"
                            placeholderTextColor = '#9C98A6'
                            value = {data.from}
                            type={'datetime'}
                            options={{
                                format: 'HH:mm'
                            }}
                            onChangeText = {from => {
                                setData({...data, from})
                                setErrorTo(null)
                            }}
                            style={styles.inputMask}
                            ref = {(ref) => fromField = ref}
                        />
                        <Hour>ás</Hour>
                        <TextInputMask
                            placeholder = "00:00"
                            placeholderTextColor = '#9C98A6'
                            value = {data.to}
                            type={'datetime'}
                            options={{
                                format: 'HH:mm'
                            }}
                            onChangeText = {to =>{
                                setData ({...data, to})
                                setErrorTo(null)
                            }}
                            style={styles.inputMask}
                            ref = {(ref) => toField = ref}
                        />
                </Shedules>
                <Text style={styles.errorMessage}>{errorTo}</Text> 
                <AreaPicker>
                    <Picker
                        selectedValue = {data.interval}
                        onValueChange = {
                            (interval) => {
                                setData({...data, interval})
                                setErrorInterval(null)
                            }
                        }
                    >
                        <Picker.Item   label = "Disponibilidade" value = ""/>
                        {day.map((item, index) =>{
                            return <Picker.Item   label = {item} value = {item} key ={index}/>
                        })} 
                    </Picker>  
                </AreaPicker>
                <Text style={styles.errorMessage}>{errorInterval}</Text> 
            </CardArea>

                        
            <CustomButton onPress = {handleRegisterClick}>
                <CustomButtonText >
                    Salvar
                </CustomButtonText>
            </CustomButton>

            
        </Container>
    )
}


const styles = StyleSheet.create({
    inputMask: {
        height: 50,
        width: '25%',
        padding: 10,
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: "#3F3D56",
        marginTop: 5,
    },
    inputMaskMoney: {
        height: 50,
        width: '100%',
        padding: 10,
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: "#3F3D56",
        marginTop: 5,
    },
    errorMessage: {
        alignSelf: "flex-start",
        marginLeft: 10,
        color: "red",
        fontFamily: "Poppins-Regular",
        marginBottom: 5,
        marginLeft: 10,
        color: "#f00",
        fontSize: 10,
    }
})