import React, {useState, useContext} from 'react';
import { Alert } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import { Container, 
    Titulo, 
    CustomButton,
    CustomButtonText,
    SubTitulo,
    InputArea,
    InputAreaRegister,
    SignMessageButton,
    SignMessageButtonTextForget,
    SignMessageButtonText2,
    SignMessageButtonForget,
} from './styles';

import { UserContext } from '../../contexts/UserContext'
import Api from '../../Api';
import Input from '../../components/Input';
import StatusBar from '../../components/StatusBar';


export default () => {

    const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();
    
    const [email, setEmail] = useState('');
    const [password, setPassWord] = useState('');

    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassWord] = useState('');

    const handleSignClick = async () => {
        setErrorEmail(null)
        setErrorPassWord(null) 
        if(email != '' && password != ''){
            if(validateEmail(email)){
                if (password.length == 8 ){
                    if(validatePassWord(password)){
                        let res = await Api.signIn(email, password)
                        if(!res.error){
                            //passo 1 salva o token no async storage
                            await AsyncStorage.setItem('token', res.data.token);
        
                            //2 passo salva o dados iniciais no context
                            userDispatch({
                                type: 'setUser',
                                payload:{
                                    name: res.data.name,
                                    email: res.data.email,
                                    avatar: res.data.avatar
                                }
                            });
                            
                            //3 passo redirecionar para o home
                            navigation.reset({
                                routes: [{name: 'MainTab'}]
                            });
                        }else{
                            if(res){
                                Alert.alert("Error:", res.error, [{
                                    text : "Ok"
                                }]);
                            }else{
                                Alert.alert("Error:", "Problema ao efetuar login", [{
                                    text : "Ok"
                                }]);
                            }
                            navigation.reset({
                                routes: [{name: 'SignIn'}]
                            });
                        }
                    }else{
                        setErrorPassWord("A senha deve conter pelo menos 1 letra minúscula, 1 letra maiúscula, 1 número e 1 caractere especial")
                    }
                    
                }else{
                    setErrorPassWord("A senha deve conter 8 dígitos")
                }
            }else{
                setErrorEmail("Preencha seu email corretamente")
            }
        }else{
            if(email == '')
                setErrorEmail("Preencha seu email")
            if(password == '')
                setErrorPassWord("Preencha sua senha")
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

    const handleForgetPasswordClick = () => {
        navigation.navigate('Forget')
    } 

    const handleRegisterClick = () => {
        navigation.navigate('SignUp')
    }


    return(
        <Container>
            <StatusBar/>
            <Titulo>Bem vindo!</Titulo>
            <SubTitulo>Entre com seu login</SubTitulo>
            
            <InputArea>
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

                <SignMessageButtonForget onPress = {handleForgetPasswordClick}>
                    <SignMessageButtonTextForget>Esqueceu a senha?</SignMessageButtonTextForget>
                </SignMessageButtonForget>

                <CustomButton onPress = {handleSignClick}>
                    <CustomButtonText>
                        Entrar
                    </CustomButtonText>
                </CustomButton>
            </InputArea>


            <InputAreaRegister>
                <SignMessageButton onPress = {handleRegisterClick}>
                    <SignMessageButtonText2>Cadastre-se</SignMessageButtonText2>
                </SignMessageButton>
            </InputAreaRegister>
            
        </Container>
    );
}