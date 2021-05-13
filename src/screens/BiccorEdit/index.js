import React , {useEffect}from 'react';
import {
    Container,
    AvatarArea,
    AreaPersonal,
    AreaDataPersonal,
    Name,
    TextInfos,
    Divider,
    AreaSpecialty,
    Titulo,
    AreaAvailability,
    AreaDesc,
    AreaValue,
    ButtonArea,
    ButtonEdit,
    ButtonDelete,
    TextButton,
    Header,
} from './style'

import AccontProfile from '../../assets/fi-rr-user.svg';
import IconEdit from '../../assets/edit.svg';
import IconDelete from '../../assets/fi-rr-trash.svg';
import IconExit from '../../assets/fi-rr-cross.svg';
import {View, Alert} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import Api from '../../Api';

export default ({navigation, route}) => {

    const item = route.params

    const calcuDate = (date) =>{
        if(date && date != ''){
            const yearNow = new Date().getFullYear()
            const dataUser = date.split('/')
            return yearNow-parseInt(dataUser[2])
        }else{
            return ''
        }
    }
    
    const dispo = (info) =>{
        if(info ==  "Dias da semana"){
            return "Seg - Ter - Qua - Qui - Sex"
        }else if( info == "Finais de semana"){
            return "Sáb - Dom"
        }else if(info == "Semana interira "){
            return "Seg - Ter - Qua - Qui - Sex - Sáb - Dom"
        }else{
            return "Há combinar"
        }
    }

    hadleClickDelete = async () =>{
        Alert.alert("Deletar", "Deseja realmente deletar este bicco?", [
            { text : "Ok", 
                onPress : async () => {
                    const token = await AsyncStorage.getItem('token');
                    let res = await Api.deleteBicco(item.id, token)
                    if(res.error){
                        Alert.alert("Erro", res.error, [
                            { text : "Ok", onPress : () => navigation.navigate('Bicco')}]);
                    }
                    navigation.navigate('Bicco')
                }
            
            },
            {
                text : "Cancelar"
            }
        ]);
    }

    handleClickEdit = () =>{
        Alert.alert("Editar", "Deseja editar este bicco?", [
            { text : "Ok", 
                onPress : async () => {
                    navigation.navigate('AddBicco', item)
                }
            },
            {
                text : "Cancelar"
            }
        ]);
    }

    return(
            <Container>
                <View style = {{padding: 10}}>
                    <Header onPress = {() => navigation.navigate('Bicco')}>
                        <IconExit width = "20" height = "20px" fill = "#6A6180"/>
                    </Header>
                    <View style = {{backgroundColor:  '#fff', padding: 20, borderRadius: 4}}>
                    
                        <AreaPersonal>
                            <AvatarArea>
                                <AccontProfile width = "40" height = "40" fill = "#6A6180"/>
                            </AvatarArea>
                            <AreaDataPersonal>
                                <Name>{item.name}</Name>
                                <TextInfos>{calcuDate(item.date) + " anos"}</TextInfos>
                                <TextInfos>{item.city}</TextInfos>
                            </AreaDataPersonal>
                        </AreaPersonal>
                        <Divider/>  
                        <AreaSpecialty>
                            <Titulo>Profissão:</Titulo>
                            <TextInfos>{item.specialty}</TextInfos>
                        </AreaSpecialty>
                        <Divider/>     
                        <AreaAvailability>
                            <Titulo>Disponibilidade:</Titulo>
                            <TextInfos>{dispo(item.interval)}</TextInfos>
                            <TextInfos>das {item.from} ate as {item.to}</TextInfos>
                        </AreaAvailability>
                        <Divider/>
                        <AreaDesc>
                            <Titulo>Descrição:</Titulo>
                            <TextInfos>
                            {item.desc} 
                            </TextInfos>
                        </AreaDesc>
                        <Divider/> 
                        <AreaValue>
                            <Titulo>Valor por Hora: </Titulo>
                            <TextInfos>{item.value}</TextInfos>
                        </AreaValue>
                    </View>
                </View>
                <ButtonArea>
                    <ButtonEdit onPress = {handleClickEdit}>
                        <TextButton>
                            Editar
                        </TextButton>
                        <IconEdit width = "20" height = "20" fill = "#fff"/>
                    </ButtonEdit>
                    <ButtonDelete onPress = {hadleClickDelete}>
                        <TextButton>
                           Deletar
                        </TextButton>
                        <IconDelete width = "20" height = "20" fill = "#fff"/>
                    </ButtonDelete>
                </ButtonArea>                
            </Container>
    )
}
