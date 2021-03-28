import React, {useEffect, useContext} from 'react';
import { Container, LoadingIcon } from './styles';
import { Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native'

import Logo from '../../assets/bicco.svg'
import Api from '../../Api'
import { UserContext } from '../../contexts/UserContext'

export default () => {
    //dispatch é responsavel por mandar as informações para o context
    const { dispatch:userDispatch } = useContext(UserContext);
    const navigation = useNavigation();

    useEffect(() => {
        //toda vez que abrir o app ira verificar se tem o token e se é valido
        const checkToken = async () =>{
            const token = await AsyncStorage.getItem('token');

            //verifica se tem token 
            if (token != null){
                //envia o token para verificar com o back
                let res = await Api.checkToken(token);
        
                
                //recebe um novo token
                if(!res.error) {
                    //salva o token no AsyncStorage
                    userDispatch({
                        type: 'setUser',
                        payload:{
                            name: res.data.name,
                            email: res.data.email,
                            avatar: res.data.avatar
                        }
                    });
                    
                    navigation.reset({
                        routes: [{name: 'MainTab'}]
                    })

                }else{
                    //caso n for valido ou no existir redireciona para a tela de Login
                    navigation.reset({
                        routes: [{name: 'SignIn'}]
                    });
                }
            }else{
                //caso n for valido ou no existir redireciona para a tela de Login
                navigation.reset({
                    routes: [{name: 'SignIn'}]
                });
            }
        }
        checkToken();
    }, [])
    

    return(
        <Container>
            <Logo/>
            <LoadingIcon size = "large" color = "#3F3D56"/>
            <Text>Carregando</Text>
        </Container>
    );
}