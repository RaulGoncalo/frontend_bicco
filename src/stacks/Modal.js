import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import BiccorEdit from '../screens/BiccorEdit';
import MainStack from '../stacks/MainStack'

const RootStack = createStackNavigator();

export default () => {
    return(
        <RootStack.Navigator mode="modal">
            <RootStack.Screen
                name="Main"
                component={MainStack}
                options={{ headerShown: false }}
            />
            <RootStack.Screen name="c" component={BiccorEdit} />
        </RootStack.Navigator>    
    );
} 