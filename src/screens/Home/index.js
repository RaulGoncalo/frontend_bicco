import React, {useState, useContext, useEffect} from 'react';
import {
    Container,
    TextArea,
    CardHome,
    Avatar,
    InfoArea,
    UserName,
    UserEmail,
    AreaIcon,
    ScrollerHorizontal,
    AreaScroller,
    AvatarArea,
} from './styles';

import EditProfile from '../../assets/fi-rr-edit.svg';
import Search from '../../assets/fi-rr-search.svg';
import Apps from '../../assets/fi-rr-apps.svg';
import AppsAdd from '../../assets/fi-rr-apps-add.svg';
import DataBase from '../../assets/fi-rr-database.svg';
import Users from '../../assets/fi-rr-users.svg';
import AccontProfile from '../../assets/fi-rr-user.svg';


import Cards from '../../components/Cards'
import  TextHome  from '../../components/TextHome';
import StatusBar from '../../components/StatusBar';

import { UserContext } from '../../contexts/UserContext';
import Api from '../../Api'

export default ({navigation}) => {

    const {state : user} = useContext(UserContext);
    const [userComplete, setUserComplete] = useState()

    useEffect(() => {
        const getUserInfo = async () => {
            let res = await Api.getUser();
            if(!res.error){
                setUserComplete(res)
            }else{
                alert("Erro:" +res)
                navigation.reset({
                    routes: [{name: 'Home'}]
                })
            }
        }
        getUserInfo();
    }, [])


    return(
        <Container>
            <StatusBar/>
            
            <TextArea>
                <TextHome texto = "Meu Perfil"/>
            </TextArea>

            <CardHome>
                <AvatarArea>
                    {
                        user.avatar != null ? <Avatar/> : <AccontProfile width = "40" height = "40" fill = "#6A6180"/>
                    }
                </AvatarArea>               
                
                <InfoArea>
                    <UserName>{user.name}</UserName>
                    <UserEmail>{user.email}</UserEmail>
                </InfoArea>

                <AreaIcon onPress = {() => navigation.navigate('Register', userComplete)}>
                        <EditProfile width = "20" height = "20px" fill = "#6A6180"/>
                </AreaIcon>
            </CardHome>

            <TextArea>
                <TextHome texto = "O que deseja fazer?"/>
            </TextArea>

            <AreaScroller>
                <ScrollerHorizontal  horizontal={true} showsHorizontalScrollIndicator= {false}>
                    <Cards IconSvg = {Search} text ="Quero Contratar" route = 'Search'/>
                    <Cards IconSvg = {Apps} text ="Meus Biccos" route = 'Bicco'/>
                    <Cards IconSvg = {AppsAdd} text ="Adicionar Bicco"  route = 'AddBicco'/>
                    <Cards IconSvg = {DataBase} text ="Meus Dados" route = 'Register' user = {userComplete}/>
                    <Cards IconSvg = {Users} text ="Meus Contatos"  route = 'Negotiation'/>
                </ScrollerHorizontal>
            </AreaScroller>

            <TextArea>
                <TextHome texto = "Anúnciados recentemente:"/>
            </TextArea>
        </Container>
    )
}