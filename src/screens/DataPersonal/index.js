import React, {useState, useContext}from 'react';

import {
    Container, 
    Header,
    Titulo, 
    TituloHeader, 
    TituloLigth, 
    CardArea, 
    Scroller, 
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


export default ({navigation, route}) => {
    const { dispatch: userDispatch } = useContext(UserContext);
    const [user, setUser] = useState(route.params.data);

    //card dados pessoais
    const [errorName, setErrorName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');

    const handleRegisterClick = async () => {
        setErrorName(null)
        setErrorEmail(null)
       if(user.name != '' && user.email != '' ){
            if(validateEmail(user.email)){
                let res = await Api.register(user)
                if(res.success){
                    userDispatch({
                        type: 'setUser',
                        payload:{
                            name: user.name,
                            email: user.email,
                            avatar: user.avatar
                        }
                    });
    
                    Alert.alert("Sucesso", "Usuário cadastrado", [{
                        text : "Ok"
                    }]);
    
                    navigation.reset({
                        routes: [{name: 'Home'}]
                    })
                }else{
                    alert("Erro:" + res.error)
                    navigation.reset({
                        routes: [{name: 'Home'}]
                    })
                } 
            }else{
                setErrorEmail("Digite um email válido")
            }
        }else{
            if(user.name == '')
                setErrorName("Preencha seu nome")
            if(user.email == '')
                setErrorEmail("Preencha seu email")
        }
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    return(
        <Container>
            <Scroller vertical={true} showsVerticalScrollIndicator= {false}>
                <AreaHeader>
                    <Header onPress = {() => navigation.navigate('Home')}>
                        <IconExit width = "30" height = "30px" fill = "#6A6180"/>
                        <TituloHeader>Voltar</TituloHeader>
                    </Header>
                </AreaHeader>
                {
                    user.avatar == null ? <Titulo>Finalize seu cadastro:</Titulo> : <Titulo>Altere seus dados:</Titulo>
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
                        onChangeText = { date => setUser({...user, date})}
                        style={styles.inputMask}
                    />
                    <Text style={styles.errorMessage}></Text>
                    
                    <TextInputMask
                        type={'cel-phone'}
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99) '
                        }}
                        value={user.phone}
                        onChangeText = { phone => setUser({...user, phone})}
                        placeholder = {"Telefone com DDD"}
                        placeholderTextColor = '#9C98A6'
                        style={styles.inputMask}
                    />
                    <Text style={styles.errorMessage}></Text>

                    <Input
                        placeholder = "URL do Perfil"
                        value = {user.avatar}
                        onChangeText = { avatar => setUser({...user, avatar})}
                    />     
                </CardArea>
                
                <AreaCards>
                    <Cards IconSvg = {Redo} text ="Dados residenciais"/>
                    <Cards IconSvg = {Redo} text ="Senha"/>
                </AreaCards>

                <CustomButton onPress = {handleRegisterClick}>
                    <CustomButtonText >
                        Salvar
                    </CustomButtonText>
                </CustomButton>    
            </Scroller>           
        </Container>
    )
}

const styles = StyleSheet.create({
    containerMask : {
        flex: 1,
        flexDirection: 'row',
      },
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
        marginLeft: 15,
        color: "#f00",
        fontSize: 12
    }
})