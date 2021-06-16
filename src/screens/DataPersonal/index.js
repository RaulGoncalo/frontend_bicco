import React, {useState, useContext, useEffect}from 'react';

import {
    Container, 
    Header,
    Titulo, 
    TituloHeader, 
    TituloLigth, 
    CardArea, 
    CustomButton, 
    CustomButtonText,
    AreaHeader,
    AreaCards,
} from './styles';

import IconExit from '../../assets/fi-rr-arrow-small-left.svg';
import { TextInputMask } from 'react-native-masked-text';

import { UserContext } from '../../contexts/UserContext';
import Input from '../../components/Input';
import Api from '../../Api';
import {Alert, StyleSheet, Text} from 'react-native';

import Cards from '../../components/CardStrained';
import Redo from '../../assets/fi-rr-redo.svg';
import AsyncStorage from '@react-native-community/async-storage'


export default ({navigation, route}) => {
    const { dispatch: userDispatch } = useContext(UserContext);
    const [user, setUser] = useState(route.params.data);

    //card dados pessoais
    const [errorName, setErrorName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorDate, setErrorDate] = useState('');
    const [errorPhone, setErrorPhone] = useState('');
    
    let dateField = null
    let phoneField = null

    const handleRegisterClick = async () => {
        setErrorName(null)
        setErrorEmail(null)
        setErrorDate(null)
        setErrorPhone(null)
       if(user.name != '' && validateEmail(user.email) && dateField.isValid() && phoneField.isValid()){
            const token = await AsyncStorage.getItem('token');

                let res = await Api.register(user, token)
                
                if(res.success){
                    userDispatch({
                        type: 'setUser',
                        payload:{
                            name: user.name,
                            email: user.email,
                            avatar: user.avatar
                        }
                    });
                    Alert.alert("Sucesso", "Usuário cadastrado com sucesso", [
                        { text : "Ok", onPress : () => navigation.navigate('Home')}]);
                }else{
                    Alert.alert("Erro", res.error, [
                        { text : "Ok", onPress : () => navigation.navigate('Home')}]);
                } 
        }else{
            if(user.name == '')
                setErrorName("Preencha seu nome")
            if(!validateEmail(user.email))
                setErrorEmail("Digite um email válido")
            if(!dateField.isValid())
                setErrorDate("Digite uma data válida")
            if(!phoneField.isValid())
                setErrorPhone("Digite uma telefone válido")
        }  
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    
    return(
        <Container vertical={true} showsVerticalScrollIndicator= {false}>
                <AreaHeader>
                    <Header onPress = {() => navigation.goBack()}>
                        <IconExit width = "30" height = "30px" fill = "#6A6180"/>
                        <TituloHeader>Voltar</TituloHeader>
                    </Header>
                </AreaHeader>
                {
                    user.date == null ? <Titulo>Finalize seu cadastro:</Titulo> : <Titulo>Altere seus dados:</Titulo>
                }
                <CardArea>
                    <TituloLigth>Dados Pessoais:</TituloLigth>
                    <Input
                        placeholder = "Nome e Sobrenome"
                        value = {user.name}
                        onChangeText = { name => {
                            setUser({...user, name})
                            setErrorName(null)
                        }}
                        errorMessage = {errorName}
                    />

                    <Input
                        placeholder = "Email"
                        value = {user.email}
                        onChangeText = { email => {
                            setUser({...user, email})
                            setErrorEmail(null)
                        }}
                        errorMessage = {errorEmail}
                        keyboardType = {"email-address"}
                    />
                    <TextInputMask
                        placeholder = "Data de Nascimento"
                        placeholderTextColor = '#9C98A6'
                        type={'datetime'}
                        options={{
                            format: 'DD/MM/YYYY'
                        }}
                        value = {user.date}
                        onChangeText = { date => {
                            setUser({...user, date})
                            setErrorDate(null)
                        }}
                        style={styles.inputMask}
                        ref = {(ref) => dateField = ref}
                    />
                    <Text style={styles.errorMessage}>{errorDate}</Text>
                    <TextInputMask
                        type={'cel-phone'}
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99) '
                        }}
                        value={user.phone}
                        onChangeText = { phone => {
                            setUser({...user, phone})
                            setErrorPhone(null)
                        }}
                        placeholder = {"Telefone com DDD"}
                        placeholderTextColor = '#9C98A6'
                        style={styles.inputMask}
                        ref = {(ref) => phoneField = ref}
                    />
                    <Text style={styles.errorMessage}>{errorPhone}</Text>    
                </CardArea>
                
                <TituloLigth>Preencha também:</TituloLigth>     
                <AreaCards>
                    <Cards IconSvg = {Redo} text ="Dados residenciais" route = 'RegisterAddress' parms = {user}/>
                    <Cards IconSvg = {Redo} text ="Senha" route = 'ResetePassword' parms = {user}/>
                </AreaCards>
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
        height: 55,
        width: '100%',
        padding: 10,
        fontSize: 14,
        borderRadius: 8,
        borderColor: "#3F3D56",
        borderWidth: 1,
        borderStyle: "solid",
        alignSelf: "flex-start",
        fontFamily: 'Poppins-Regular',
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