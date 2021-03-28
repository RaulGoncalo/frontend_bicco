import React from 'react';
import { NavigationContainer } from '@react-navigation/native'


import MainStack from './stacks/MainStack'
import UserContextProvaider from '../src/contexts/UserContext';

export default () => {
    return(
        // o UserContextProvaider é uma caixa com informações do ususario que engloba todo o aplicativo, 
        //o que quer dizer que o app vai ter acesso em qualquer lugar a todas essas informações do usuario
        <UserContextProvaider>
            <NavigationContainer>
                <MainStack/>
            </NavigationContainer>
        </UserContextProvaider>
    );  
}