import React, {useState, useEffect, useRef} from 'react';
import {
    Container,
    Header,
    TituloName,
    AreaHeader,
    AreaBody,
    AreaFooter,
    InputArea,
    Input,
    AreaBottom,
    ButtonSend,
    Body
} from './styles';

import IconExit from '../../assets/fi-rr-arrow-small-left.svg';
import IconSend from '../../assets/fi-rr-paper-plane.svg';
import MessageCard from '../../components/MessageCard';

export default ({route, navigation}) => {

    const [message, setMessage]  = useState();
    const [messages, setMessages] = useState([]);

    const handleSendClick = () => {

    }

    const scrollViewRef = useRef();

    return(
        <Container>
            <AreaHeader>
                <Header onPress = {() => navigation.goBack()}>
                    <IconExit width = "30" height = "30px" fill = "#6A6180"/>
                </Header>
                <TituloName>{route.params.name}</TituloName>    
            </AreaHeader>
            
            <AreaBody>
                <Body 
                    showsVerticalScrollIndicator = {false}
                    ref={scrollViewRef}
                    onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
                >
                    
                    {messages.map((message, key) =>(
                        <MessageCard
                            key = {key}
                            data = {message}
                            user = {route.params.user}
                        />
                    ))}
                </Body>
            </AreaBody>

            <AreaFooter>
                <InputArea>
                    <Input 
                        placeholder = {"Digite uma mensagem"}
                        value = {message}
                        onChangeText = {(t) => setMenssage(t)}
                        placeholderTextColor = '#9C98A6'
                        multiline = {true}
                    />
                </InputArea>

                <AreaBottom>
                    <ButtonSend onPress = {handleSendClick}>
                        <IconSend width = "20" height = "20px" fill = "#fff"/>
                    </ButtonSend>
                </AreaBottom>

            </AreaFooter>

        </Container>
    )
}