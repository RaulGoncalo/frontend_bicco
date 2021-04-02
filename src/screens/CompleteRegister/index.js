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
} from './styles';

import IconExit from '../../assets/fi-rr-arrow-small-left.svg';
import NewPass from '../../assets/fi-rr-arrow-small-right.svg';
import { UserContext } from '../../contexts/UserContext';
import Input from '../../components/Input';
import Api from '../../Api';
import {Alert} from 'react-native';


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
                    <Header onPress = {() => navigation.navigate('ResetePassword')}>
                        <TituloHeader>Senha</TituloHeader>
                        <NewPass width = "30" height = "30px" fill = "#6A6180"/>
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
                    <Input
                        placeholder = "Data de Nascimento"
                        value = {user.date}
                        onChangeText = { date => setUser({...user, date})}
                        keyboardType = {"numeric"}
                    />
                    <Input
                        placeholder = "Telefone com DDD"
                        value = {user.phone}
                        onChangeText = { phone => setUser({...user, phone})}
                        keyboardType = {"numeric"}

                    />
                    <Input
                        placeholder = "URL do Perfil"
                        value = {user.avatar}
                        onChangeText = { avatar => setUser({...user, avatar})}
                    />     
                </CardArea>
                <CardArea>
                    <TituloLigth>Dados Residenciais:</TituloLigth>
                    <Input 
                        placeholder = "Cep"
                        value = {user.cep}
                        onChangeText = { cep => 
                            setUser({...user, cep})
                        }
                        keyboardType = {"numeric"}
                    />
                    <Input 
                        placeholder = "Rua"
                        value = {user.street}
                        onChangeText = { street => 
                            setUser({...user, street})
                        }
                    />
                    <Input
                        placeholder = "Numero"
                        value = {user.number}
                        onChangeText = { number => 
                            setUser({...user, number})
                        }
                        keyboardType = {"numeric"}
                    />
                    <Input
                        placeholder = "Bairro"
                        value = {user.district}
                        onChangeText = { district => 
                            setUser({...user, district})
                        }
                        
                    />
                    <Input
                        placeholder = "Cidade"
                        value = {user.city}
                        onChangeText = { city => 
                            setUser({...user, city})
                        }
                    />
                    <Input
                        placeholder = "Estado"
                        value = {user.state}
                        onChangeText = { state => 
                            setUser({...user, state})
                        }
                        maxLength = {2}
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