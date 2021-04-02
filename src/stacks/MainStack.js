import React from 'react';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';

import Preload from '../screens/Preload';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Forget from '../screens/ForgetPassword';
import Register from '../screens/CompleteRegister'; 
import ResetePassword from '../screens/ResetPassword';
import AddBicco from '../screens/AddBicco'; 
import MainTab from '../stacks/MainTab';

const Stack = createStackNavigator();

export default () => {
    return(
        <Stack.Navigator
            initialRouteName = "Preload" >
            <Stack.Screen name = "Preload"  
                component = {Preload} 
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
                options = {
                    {
                        title : "Recuperar senha", 
                        headerTintColor: '#3F3D56', 
                        headerTitleStyle: {
                                fontFamily: "Poppins-bold",
                                fontSize:20,
                                fontWeight: 'bold'
                            }
                        }
                    } 
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
                name = "AddBicco" 
                options = {
                    {
                        headerShown : false,
                    }
                } 
                component = {AddBicco}
            />

        </Stack.Navigator>        
    );
} 