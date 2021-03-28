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
} from './styles';

import IconExit from '../../assets/fi-rr-arrow-small-left.svg';
import { UserContext } from '../../contexts/UserContext';
import Input from '../../components/RegisterInput';
import Api from '../../Api';
import {Alert} from 'react-native';


export default ({navigation, route}) => {

    const [user, setUser] = useState(route.params.data);

    const { dispatch: userDispatch } = useContext(UserContext);


    console.log(user)

    const handleRegisterClick = async () => {
        console.log(user)
       if(user.name != '' && user.email != '' && user.phone != '' && user.date !='' && user.cep != '' && user.district != '' && user.street != '' && user.city != '' && user.number != '' && user.state != ''){
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
            alert("Preencha os campos obrigatórios")
        }
    }

    return(
        <Container>
            <Scroller vertical={true} showsVerticalScrollIndicator= {false}>
                <Header onPress = {() => navigation.navigate('Home')}>
                    <IconExit width = "30" height = "30px" fill = "#6A6180"/>
                    <TituloHeader>Voltar</TituloHeader>
                </Header>

                {
                    user.avatar == null ? <Titulo>Finalize seu cadastro:</Titulo> : <Titulo>Altere seus dados:</Titulo>
                }
                <CardArea>
                    <TituloLigth>Dados Pessoais:</TituloLigth>
                    <Input
                        placeholder = "Nome e Sobrenome"
                        value = {user.name}
                        onChangeText = { name => setUser({...user, name})}
                    />

                    <Input
                        placeholder = "Email"
                        value = {user.email}
                        onChangeText = { email => setUser({...user, email})}
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
                    < Input
                        placeholder = "Telefone com DDD"
                        value = {user.phone}
                        onChangeText = { phone => setUser({...user, phone})}
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
                        onChangeText = { cep => setUser({...user, cep})}
                        keyboardType = {"numeric"}
                    />
                    <Input 
                        placeholder = "Rua"
                        value = {user.street}
                        onChangeText = { street => setUser({...user, street})}
                    />
                    <Input
                        placeholder = "Numero"
                        value = {user.number}
                        onChangeText = { number => setUser({...user, number})}
                        keyboardType = {"numeric"}
                    />
                    <Input
                        placeholder = "Bairro"
                        value = {user.district}
                        onChangeText = { district => setUser({...user, district})}
                    />
                    <Input
                        placeholder = "Cidade"
                        value = {user.city}
                        onChangeText = { city => setUser({...user, city})}
                    />
                    <Input
                        placeholder = "Estado"
                        value = {user.state}
                        onChangeText = { state => setUser({...user, state})}
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