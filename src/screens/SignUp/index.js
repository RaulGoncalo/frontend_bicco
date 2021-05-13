import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage';

import { 
    Container,  
    CustomButton,
    CustomButtonText,
    SubTitulo,
    InputArea,
    Header,
    TituloHeader,
} from './styles';

import { UserContext } from '../../contexts/UserContext'    
import Input from '../../components/Input'
import Api from '../../Api';
import { Alert } from 'react-native';
import StatusBar from "../../components/StatusBar";
import IconExit from '../../assets/fi-rr-arrow-small-left.svg';

export default () => {

    const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassWord] = useState('');
    const [confirmatioPassword, setConfirmationPassWord] = useState('');

    const [errorName, setErrorName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassWord] = useState('');
    const [errorConfirmatioPassword, setErrorConfirmationPassWord] = useState(''); 

    const handleSignClick = async () => {
        setErrorName(null)
        setErrorEmail(null)
        setErrorPassWord(null)
        setErrorConfirmationPassWord(null)
        if (name != "" && email != "" && password != "" && confirmatioPassword != ""){
            if(validateEmail(email)){
                if (password.length == 8){
                    if(validatePassWord(password)){
                        if(password == confirmatioPassword){
                            let res = await Api.signUp(name, email, password)
                            console.log(res)
                            if(!res.error){
                                await AsyncStorage.setItem('token', res.data.token);
                                userDispatch({
                                    type: 'setUser',
                                    payload:{
                                        name: res.data.name,
                                        email: res.data.email,
                                        avatar: res.data.avatar
                                    }
                                });
                                Alert.alert("Sucesso", "Faça Login", [
                                    { text : "Ok", onPress : () => navigation.navigate('SignIn')}]);
                            }else{
                                Alert.alert("Erro", res.error, [
                                    { text : "Ok", onPress : () => navigation.navigate('SignIn')}]);
                            }
                        }else{
                            setErrorConfirmationPassWord("Defina a mesma senha")
                        }
                    }else{
                        setErrorPassWord("A senha deve conter pelo menos 1 letra minúscula, 1 letra maiúscula, 1 número e 1 caractere especial")
                    }
                }else{
                    setErrorPassWord("A senha deve conter 8 digitos")
                }
            }else{
                setErrorEmail("Preencha seu email corretamente")
            }
        }else{
            if(name == '')
                setErrorName("Preencha seu nome")
            if(email == '')
                setErrorEmail("Preencha seu email")
            if(password == '')
                setErrorPassWord("Preencha sua senha")
            if(confirmatioPassword == '')
                setErrorConfirmationPassWord("Confirme sua senha")
        }
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    function validatePassWord(password){
        const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        return re.test(String(password));
    }
    
    
    return(
        <Container>
            <StatusBar/>
            <Header onPress = {() => navigation.navigate('SignIn')}>
                    <IconExit width = "30" height = "30px" fill = "#6A6180"/>
                    <TituloHeader>Voltar</TituloHeader>
            </Header>
            <InputArea>
                <SubTitulo>Preencha os campos abaixo:</SubTitulo>
                
                <Input 
                    placeholder = "Nome e Sobrenome"
                    value = {name}
                    onChangeText = { t => {
                        setName(t)
                        setErrorName(null)
                        
                    }}
                    errorMessage = {errorName}
                />
                <Input 
                    placeholder = "E-mail"
                    value = {email}
                    onChangeText = { t => {
                        setEmail(t)
                        setErrorEmail(null)
                    }}
                    keyboardType = {"email-address"}
                    errorMessage = {errorEmail}
                />
                <Input  
                    placeholder = "Senha"
                    value = {password}
                    onChangeText = { t => {
                        setPassWord(t)
                        setErrorPassWord(null)
                    }}
                    password = {true}
                    maxLength = {8}
                    errorMessage = {errorPassword}
                />
                <Input  
                    placeholder = "Confirmar senha"
                    value = {confirmatioPassword}
                    onChangeText = { t => {
                        setConfirmationPassWord(t)
                        setErrorConfirmationPassWord(null)
                    }}
                    password = {true}
                    maxLength = {8}
                    errorMessage = {errorConfirmatioPassword}
                />

                <CustomButton onPress = {handleSignClick}>
                    <CustomButtonText>
                        Cadastrar
                    </CustomButtonText>
                </CustomButton>
            </InputArea>
            
        </Container>
    );
}