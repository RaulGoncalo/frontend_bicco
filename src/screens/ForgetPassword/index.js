import React, {useState} from 'react';
import { Container,  
    CustomButton,
    CustomButtonText,
    SubTitulo,
    InputArea,
    ButtonArea,
    Header,
    TituloHeader,
} from './styles';

import { Alert } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Api from '../../Api';

import Input from '../../components/Input'
import StatusBar from '../../components/StatusBar'
import IconExit from '../../assets/fi-rr-arrow-small-left.svg';


export default () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    
    const handleSendClick = async () => {
        setErrorEmail(null)
        if(email != ''){
            if(validateEmail(email)){
                let res = await Api.newpassword(email)
                if(res.error){
                    Alert.alert("Error:", res.error, [{
                        text : "Ok"
                    }]);
                }else{
                    Alert.alert("Sucesso:", "E-mail enviado", [{
                        text : "Ok"
                    }]);

                    navigation.reset({
                        routes: [{name: 'SignIn'}]
                    });
                }
            }else{
                setErrorEmail("Preencha seu email corretamente")
            }
        }else{
            setErrorEmail("Preencha seu email")   
        }
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    return(
        <Container>
            <StatusBar/>
            <Header onPress = {() => navigation.navigate('SignIn')}>
                    <IconExit width = "20" height = "20px" fill = "#6A6180"/>
                    <TituloHeader>Voltar</TituloHeader>
            </Header>
            <InputArea>
                <SubTitulo>Enviaremos uma nova senha temporária em seu e-mail:</SubTitulo>
                
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
            </InputArea>

            <ButtonArea>
                <CustomButton onPress = {handleSendClick}>
                    <CustomButtonText>
                        Enviar
                    </CustomButtonText>
                </CustomButton>
            </ButtonArea>
        </Container>
    );
}