import React from 'react';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';

import Preload from '../screens/Preload';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Forget from '../screens/ForgetPassword';
import Register from '../screens/DataPersonal'; 
import RegisterAddress from '../screens/DataAddress';
import ResetePassword from '../screens/ResetPassword';
import AddBicco from '../screens/AddBicco'; 
import MainTab from '../stacks/MainTab';

const Stack = createStackNavigator();

export default () => {
    return(
        <Stack.Navigator
            initialRouteName = "AddBicco" >
            <Stack.Screen name = "AddBicco"  
                component = {AddBicco} 
                options = {{headerShown : false}} 
            />

            <Stack.Screen 
                name = "SignIn" 
                options = {{headerShown : false}} 
                component = {SignIn}
            />

            <Stack.Screen 
                name = "SignUp" 
                options = {{headerShown : false}} 
                component = {SignUp}
            />

            <Stack.Screen 
                name = "Forget" 
                options = {{headerShown : false}} 
                component = {Forget}
            />
            
            <Stack.Screen 
                name = "MainTab" 
                component = {MainTab}
                options = {
                    {
                        headerShown : false,
                    }
                } 
            />

            <Stack.Screen 
                name = "Register" 
                options = {
                    {
                        headerShown : false,
                    }
                } 
                component = {Register}
            />

            <Stack.Screen 
                name = "ResetePassword" 
                options = {
                    {
                        headerShown : false,
                    }
                } 
                component = {ResetePassword}
            />

            <Stack.Screen 
                name = "RegisterAddress" 
                options = {
                    {
                        headerShown : false,
                    }
                } 
                component = {RegisterAddress}
            />

            {/*<Stack.Screen 
                name = "AddBicco" 
                options = {
                    {
                        headerShown : false,
                    }
                } 
                component = {AddBicco}
            />*/}

        </Stack.Navigator>        
    );
} 