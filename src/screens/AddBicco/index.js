import React, {useState} from 'react';
import {
    Container, 
    Header,
    Titulo, 
    TituloHeader, 
    TituloLigth, 
    CardArea, 
    Scroller, 
    CustomButton, 
    CustomButtonText,
    CardSchedules,
} from './styles';

import IconExit from '../../assets/fi-rr-arrow-small-left.svg';
import Input from '../../components/Input';
import {Alert, StyleSheet, Text, FlatList}  from 'react-native';
import Schedules from '../../components/Schedule'

export default ({navigation}) => {

    const [schedules, setSchecules] = useState([
        {
            id: 1,
            day : 'Seg',
            from : '08:00',
            to : '18:00'
        },
        {
            id: 2,
            day : 'Ter',
            from : '08:00',
            to : '14:00'
        },
        {
            id: 3,
            day : 'Qua',
            from : '07:00',
            to : '17:00'
        },
        {
            id: 4,
            day : 'Qui',
            from : '07:00',
            to : '19:00'
        },
    ])

    return(
        <Container>
            <Header onPress = {() => navigation.navigate('Bicco')}>
                <IconExit width = "30" height = "30px" fill = "#6A6180"/>
                <TituloHeader>Voltar</TituloHeader>
            </Header>

            <Scroller nestedScrollEnabled = {true}>
                <Titulo>Preencha todos os campos:</Titulo>
                <CardArea>
                    <TituloLigth>Dados do Bico:</TituloLigth>
                    <Input
                        placeholder = "Especialidade"
                    />

                    <TituloLigth>Horários:</TituloLigth>
                        <CardSchedules>
                            <FlatList 
                                data = {schedules}
                                keyExtractor = {item => item.id}
                                renderItem = {({item}) => <Schedules {...item}/>}                            
                            />
                        </CardSchedules>

                    <Input
                        placeholder = "Local de atendimento"
                    />
                    
                    <Input
                        placeholder = "Descrição"
                    />     
                </CardArea>
                <CustomButton>
                    <CustomButtonText >
                        Salvar
                    </CustomButtonText>
                </CustomButton>
            </Scroller>

            
        </Container>
    )
}

