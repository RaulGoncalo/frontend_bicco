import React, {useState, useEffect} from 'react';
import {
    Container,
    TextArea,
    AreaCards,
    AreaScroller,
    ListBicco,
    IconLoading,
} from './styles';

import Redo from '../../assets/fi-rr-redo.svg';
import {RefreshControl} from 'react-native'
import  TextHome  from '../../components/TextHome';
import StatusBar from '../../components/StatusBar';
import Cards from '../../components/CardStrained';
import CardsBicco from '../../components/CardsBicco';
import Api from '../../Api'

export default (props) => {
    const [bicco, setBicco] = useState();
    const [loading, setloading] = useState();
    const [refreshing, setRefreshing] = useState(false);
    
    const onRefresh = () =>{
        setRefreshing(false)
        getBicco()
    }

    useEffect(() => {
        getBicco();
    }, [])

    const getBicco = async () => {
        setloading(true)
        let res = await Api.getBicco();
        if(!res.error){
            setBicco(res)
            setloading(false)
        }else{
            Alert.alert("Erro:", res.error, [
                { text : "Ok", onPress : () => navigation.navigate('Bicco')}]);
        }
    }

    return(
        <Container>
            
                <StatusBar/>            
                <TextArea>
                    <TextHome texto = "O que fazer?"/>
                </TextArea>
                <AreaCards>
                    <Cards IconSvg = {Redo} text ="Adicionar Bicco" route = 'AddBicco'/>
                    <Cards IconSvg = {Redo} text ="Historico"/>
                </AreaCards>

                <TextArea>
                    <TextHome texto = "Meus Biccos:"/>
                </TextArea>
                
            
                <AreaScroller>
                    {loading && <IconLoading size = "large" color = "#006ED3"/> }
                    <ListBicco
                        refreshControl = {<RefreshControl refreshing = {refreshing} onRefresh = {onRefresh} />}
                        data = {bicco}
                        keyExtractor = {item => `${item.id}`}
                        renderItem = {({item}) =>  
                            <CardsBicco  {...item} 
                            />
                        }
                    />
                </AreaScroller>
        </Container>
    )
}