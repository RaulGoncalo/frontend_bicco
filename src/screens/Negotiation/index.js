import React, {useState, useContext, useEffect} from 'react';
import {
    Container,
    Header,
    TituloHeader,
    Card,
    Search,
    AreaSearch,
    Input,
} from './styles';

import ChatItem from '../../components/ChatItem'
import StatusBar from '../../components/StatusBar';

export default ({navigation}) => {
    const [users, setUsers] = useState([]);
    const [conversation, setConversation] = useState();
    return(
        <Container>
            <StatusBar/>
            <Header>
                <TituloHeader>Chat</TituloHeader>
            </Header>
            <Card>
                <AreaSearch>  
                    <Search>
                        <Input 
                            placeholder = {"Procurar conversa"}
                            value = {conversation}
                            onChangeText = {(t) => setConversation(t)}
                            placeholderTextColor = '#9C98A6'
                            multiline = {true}
                        /> 
                    </Search>
                </AreaSearch>
                
                {users.map((user, key) =>(
                         <ChatItem 
                            name = {user.name} 
                            message = {user.lastMessage} 
                            date = {user.date} 
                            user = {user.id}/>
                    ))}        
            </Card>
        </Container>
    )
}