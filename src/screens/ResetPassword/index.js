import React, {useState, useContext}from 'react';

import {
    Container, 
    Header,
    TituloHeader, 
    TituloLigth, 
    CardArea, 
    Scroller, 
    CustomButton, 
    CustomButtonText,
} from './styles';

import IconExit from '../../assets/fi-rr-arrow-small-left.svg';
import { UserContext } from '../../contexts/UserContext';
import Input from '../../components/Input';
import Api from '../../Api';
import {Alert} from 'react-native';


export default ({navigation, route}) => {
    const { dispatch: userDispatch } = useContext(UserContext);

    const [newPassword, setNewPassWord] = useState('');
    const [confirmatioNewPassword, setConfirmationNewPassWord] = useState('');

    const [errorNewPassword, setErrorNewPassWord] = useState('');
    const [errorConfirmatioNewPassword, setErrorConfirmationNewPassWord] = useState(''); 

    const handleRegisterClick = async () => {
        if(newPassword != '' && confirmatioNewPassword != ''){
            setErrorNewPassWord(null)
            setErrorConfirmationNewPassWord(null)
            if(newPassword == confirmatioNewPassword){
                if(validatePassWord()){
                    upadatePassword = await Api.updatePassword(newPassword)
                    if(upadatePassword.success){
                        Alert.alert("Sucesso", "Senha atualizada", [{
                            text : "Ok"
                        }]);
        
                        navigation.reset({
                            routes: [{name: 'Home'}]
                        })
                    }else{
                        Alert.alert("Error", upadatePassword.error, [{
                            text : "Ok"
                        }]);
                    }
                    
                }else{
                    setErrorNewPassWord("A senha deve conter pelo menos 1 letra minúscula, 1 letra maiúscula, 1 número e 1 caractere especial")
                }
            }else{
                setErrorConfirmationNewPassWord("Defina a mesma senha")
            }
        }
    }

    function validatePassWord(password){
        const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        return re.test(String(password));
    }
    return(
        <Container>
            <Scroller vertical={true} showsVerticalScrollIndicator= {false}>
                <Header onPress = {() => navigation.navigate('Register')}>
                    <IconExit width = "30" height = "30px" fill = "#6A6180"/>
                    <TituloHeader>Voltar</TituloHeader>

                </Header>
                <CardArea>
                    <TituloLigth>Redefinir senha:</TituloLigth>
                    <Input 
                        placeholder = "Nova senha"
                        value = {newPassword}
                        onChangeText = { t => {
                            setNewPassWord(t)
                            setErrorNewPassWord(null)
                        }}
                        password = {true}
                        maxLength = {8}
                        errorMessage = {errorNewPassword}
                    />
                    <Input
                         placeholder = "Confirmar nova senha"
                         value = {confirmatioNewPassword}
                         onChangeText = { t => {
                            setConfirmationNewPassWord(t)
                            setErrorConfirmationNewPassWord(null)
                         }}
                         password = {true}
                         maxLength = {8}
                         errorMessage = {errorConfirmatioNewPassword}
                    />
                </CardArea>
                <CustomButton onPress = {handleRegisterClick}>
                    <CustomButtonText >
                        Salvar
                    </CustomButtonText>
                </CustomButton>    
            </Scroller>           
        </Container>
    )
}