import React, {useState} from 'react';
import { Container,  
    CustomButton,
    CustomButtonText,
    SubTitulo,
    InputArea,
    ButtonArea,
} from './styles';

import {useNavigation} from '@react-navigation/native';
import Api from '../../Api';

import Input from '../../components/Input'
import StatusBar from '../../components/StatusBar'

export default () => {

    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');

    const handleRecouverClick = async () => {
        if (emailField != ''){
            let resposta = await Api.newpassword(emailField)
            console.log(resposta)
            if(resposta.error){
                alert(resposta.error)
            }else{
                alert("E-mail com nova senha enviado")
                navigation.navigate('SignIn')
            }
        }else{
            alert("Insira o e-mail!")
        }
    }

    return(
        <Container>
            <StatusBar/>
            <InputArea>
                <SubTitulo>Enviaremos uma nova senha temporária em seu e-mail:</SubTitulo>
                
                <Input 
                    placeholder = "E-mail"
                    value = {emailField}
                    onChangeText = { t => setEmailField(t)}
                />
            </InputArea>

            <ButtonArea>
                <CustomButton onPress = {handleRecouverClick}>
                    <CustomButtonText>
                        Enviar
                    </CustomButtonText>
                </CustomButton>
            </ButtonArea>
        </Container>
    );
}