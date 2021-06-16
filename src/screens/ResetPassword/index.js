import React, {useState}from 'react';

import {
    Container, 
    Header,
    TituloHeader, 
    TituloLigth, 
    CardArea, 
    Scroller, 
    CustomButton, 
    CustomButtonText,
    Titulo,
} from './styles';

import IconExit from '../../assets/fi-rr-arrow-small-left.svg';
import Input from '../../components/Input';
import Api from '../../Api';
import {Alert} from 'react-native';


export default ({navigation, route}) => {
    const [email, setEmail] = useState(route.params.data.email)

    const [newPassword, setNewPassWord] = useState('');
    const [confirmatioNewPassword, setConfirmationNewPassWord] = useState('');

    const [errorNewPassword, setErrorNewPassWord] = useState('');
    const [errorConfirmatioNewPassword, setErrorConfirmationNewPassWord] = useState(''); 

    const handleRegisterClick = async () => {
        if(newPassword != '' && confirmatioNewPassword != ''){
            setErrorNewPassWord(null)
            setErrorConfirmationNewPassWord(null)
            if(newPassword == confirmatioNewPassword){
                if(validatePassWord(newPassword)){
                    console.log(newPassword, email)
                    res = await Api.updatePassword(newPassword, email)
                    if(res.success){
                        Alert.alert("Sucesso", "Senha atualizada", [
                            { text : "Ok", onPress : () => navigation.navigate('Home')}]);
                    }else{
                        Alert.alert("Erro", res.error, [
                            { text : "Ok", onPress : () => navigation.navigate('Home')}]);
                    }
                    
                }else{
                    setErrorNewPassWord("Defina uma senha válida")
                }
            }else{
                setErrorConfirmationNewPassWord("Defina a mesma senha")
            }
        }else{
            if(newPassword =="")
                setErrorNewPassWord("Digite a senha")
            
            if(confirmatioNewPassword == "")
                setErrorConfirmationNewPassWord("Confirme a senha")
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
                <Titulo>A senha deve conter pelo menos:</Titulo>
                <TituloLigth>
                    * 1 letra minúscula;
                    {"\n"}
                    * 1 letra maiúscula;
                    {"\n"}
                    * 1 caractere especial;
                    {"\n"}
                    * 1 número
                </TituloLigth>
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