import React, {useState, useEffect, useRef} from 'react';
import {
    Container,
    TextArea,
    AreaCards,
    IconLoading,
    CardHeader,
    Titulo,
    Card
} from './styles';

import Redo from '../../assets/fi-rr-redo.svg';
import {RefreshControl, Alert} from 'react-native'
import  TextHome  from '../../components/TextHome';
import StatusBar from '../../components/StatusBar';
import Cards from '../../components/CardStrained';
import CardsBicco from '../../components/CardsBicco';
import Api from '../../Api';
import Modal from '../Modal';
import { Modalize } from 'react-native-modalize';
import {useNavigation} from '@react-navigation/native';


export default (props) => {
    const [biccos, setBiccos] = useState([]);
    const [loading, setloading] = useState();
    const [refreshing, setRefreshing] = useState(false);
    const [dataModal, setDataModal] = useState()
    const navigation = useNavigation();
    const onRefresh = () =>{
        setRefreshing(false)
        getBiccos()
    }

    useEffect(() => {
        getBiccos();
    }, [])

    const getBiccos = async () => {
        setloading(true)
        let res = await Api.getBicco();
        if(!res.error){
            setBiccos(res)
            setloading(false)
        }else{
            Alert.alert("Erro:", res.error, [
                { text : "Ok", onPress : () => navigation.navigate('Bicco')}]);
        }
    }
    const modalizeRef = useRef(null);
    
    const showModal = (data) => {
        setDataModal(data)
        modalizeRef.current?.open();
    }


    const validUser = async () => {
       
        let res = await Api.getUser();
        if(!res.error && res.data){
           if(res.data.date == null || res.data.cep == null){
                Alert.alert("Complete seu cadastro", "Completar o cadastro?", [
                    { text : "Ok", 
                        onPress : async () => {
                           if(res.data.date == null){
                            navigation.navigate('Register', res)
                           }else{
                            navigation.navigate('RegisterAddress', res.data)
                           }
                        }
                    },
                    {
                        text : "Cancelar",
                        onPress : async () => {
                            navigation.navigate('Bicco')
                        }
                    }
                ]);
           }else{
                navigation.navigate('AddBicco', {})
           }
        }else{
            Alert.alert("Erro ao buscar as informações", [
                { text : "Ok"}]);
        }
    }

    return(
        <Container>
            <StatusBar/> 
            <CardHeader>
                <Titulo>
                   Meus Biccos
                </Titulo>
            </CardHeader>
            <Card  refreshControl = {<RefreshControl refreshing = {refreshing} onRefresh = {onRefresh} />}>
                <TextArea>
                    <TextHome texto = "O que fazer?"/>
                </TextArea>
                <AreaCards>
                    <Cards IconSvg = {Redo} text ="Adicionar Bicco" route = "" validUser = {validUser}/>
                    <Cards IconSvg = {Redo} text ="Historico"/>
                </AreaCards>

                <TextArea>
                    <TextHome texto = "Meus Biccos:"/>
                </TextArea>

                {loading && <IconLoading size = "large" color = "#006ED3"/> }
                {
                    biccos.map((item, index) =>{
                        return <CardsBicco  data = {item} key = {index} showModal = {showModal} 
                        />
                    })
                    
                }
            </Card>
            <Modalize ref={modalizeRef} snapPoint = {630}><Modal data = {dataModal} route = {props}/></Modalize> 
        </Container>
    )
}