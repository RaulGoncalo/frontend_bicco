import React from "react";
import styled from 'styled-components/native';

import HomeIcon from '../assets/fi-rr-home.svg'
import SearchIcon from '../assets/fi-rr-search.svg'
import NegotiationIcon from '../assets/fi-rr-comment.svg'
import BiccoIcon from '../assets/fi-rr-bold.svg'

const TabArea = styled.View`
    height: 60px;
    background-color: #FFF;
    flex-direction: row;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
`;
const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export default ({state, navigation}) => {

    const goTo = (screenName) => {
        navigation.navigate(screenName)
    }

    return(
        <TabArea>
            <TabItem onPress = {() => goTo('Home')}>
                <HomeIcon style = {{opacity: state.index=== 0 ? 1 : 0.5}} width = "23" height = "23"fill = "#1C92FF"/>
            </TabItem>
            <TabItem  onPress = {() => goTo('Search')}>
                <SearchIcon style = {{opacity: state.index=== 1 ? 1 : 0.5}} width = "23" height = "23"fill = "#1C92FF"/>
            </TabItem>
            <TabItem  onPress = {() => goTo('Negotiation')}>
                <NegotiationIcon style = {{opacity: state.index=== 2 ? 1 : 0.5}} width = "23" height = "23"fill = "#1C92FF"/>
            </TabItem>
            <TabItem onPress = {() => goTo('Bicco')}>
                <BiccoIcon  style = {{opacity: state.index=== 3 ? 1 : 0.5}} width = "23" height = "23"fill = "#1C92FF"/>
            </TabItem>
        </TabArea>
    )
}