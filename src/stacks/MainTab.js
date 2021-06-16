import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import TabCustom from '../components/TabCustom';

import Home from '../screens/Home';
import Bicco from '../screens/Bicco';
import Search from '../screens/Search';
import Negotiation from '../screens/Negotiation';

const Tab = createMaterialTopTabNavigator();

export default () => {
    return(
        <Tab.Navigator 
            tabBar= {props => <TabCustom {...props}/>}
            tabBarPosition  = 'bottom'
            swipeEnabled = {true}
            lazy = {false}
                
        >
            <Tab.Screen name = 'Home' component = {Home}/>
            <Tab.Screen name = 'Search' component = {Search}/>
            <Tab.Screen name = 'Negotiation' component = {Negotiation}/>
            <Tab.Screen name = 'Bicco' component = {Bicco}/>
        </Tab.Navigator>
    )
}