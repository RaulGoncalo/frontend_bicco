import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import TabCustom from '../components/TabCustom';

import Home from '../screens/Home';
import Bicco from '../screens/Bicco';
import Search from '../screens/Search';
import Negotiation from '../screens/Negotiation';

const Tab = createBottomTabNavigator();

export default () => {
    return(
        <Tab.Navigator tabBar= {props => <TabCustom {...props}/>}>
            <Tab.Screen name = 'Home' component = {Home}/>
            <Tab.Screen name = 'Search' component = {Search}/>
            <Tab.Screen name = 'Negotiation' component = {Negotiation}/>
            <Tab.Screen name = 'Bicco' component = {Bicco}/>
        </Tab.Navigator>
    )
}