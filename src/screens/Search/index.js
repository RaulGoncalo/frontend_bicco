import React, {useEffect} from 'react';
import {
    Container,
    Titulo,
    SubTitulo,
    AreaFilter,
    Location,
    Schedule,
    Specialty,
    InputLocation,
    ButtonIcon,
    BottomFilter,
    Picker,
    Card,
    CardHeader,
    Divider,
    Hour,
    Shedules,
    CustomButton,
    CustomButtonText,
    IconLoading,
    AreaCard,
} from './styles';
import StatusBar from "../../components/StatusBar";
import IconLocation from "../../assets/fi-rr-marker.svg";
import IconFilter from "../../assets/fi-rr-filter.svg";
import IconUp from "../../assets/fi-rr-angle-up.svg";
import { useState, useRef } from 'react';
import { Modalize } from 'react-native-modalize';
import CardsBicco from '../../components/CardsBicco';
import Api from '../../Api'
import {View} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import {StyleSheet, Text, RefreshControl, Alert} from 'react-native';
import Modal from '../Modal';
import {request, PERMISSIONS} from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';


export default  (props) => {
    const [showFilters, setShowFilters] = useState(false);
    const [loading, setloading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [errorSchedules, setErrorSchedules] = useState('');
    const [biccos, setBiccos] = useState([]);
    const [dataModal, setDataModal] = useState();

    const [filters, setFilters] = useState({
        specialty : "",
        interval: "",
        from: "",
        to: "",
        city: ""
    });

    const data = [
        'Pedreiro',
        'Pintor',
        'Arquiteto',
        'Analista',
        'Baba',
        'Engenheiro'
    ]
    const day = [
        "Dias da semana",
        "Finais de semana",
        "Semana inteira",
        "Há combinar",
    ]

    let toField = null
    let fromField = null

    const handleFilter = async () =>{
        setloading(true)
        setErrorSchedules(null)
        if(filters.from != "" && filters.to != ""){        
            if(toField.isValid() && fromField.isValid()){
                let res = await Api.biccos(filters)
                if(!res.error){
                        setloading(false)
                        setBiccos(res)
                        setShowFilters(!showFilters)
                }else{
                    setloading(false)
                    Alert.alert("Erro:", res.error, [
                        { text : "Ok", onPress : () => props.navigation.navigate('Search')}]);
                        
                }
            }else{
                setErrorSchedules('Digite uma hora válida')
            }
        }else{
            let res = await Api.biccos(filters)
                if(!res.error){
                    setloading(false)
                    setBiccos(res)
                    setShowFilters(!showFilters)
                }else{
                    setloading(false)
                    Alert.alert("Erro:", res.error, [
                        { text : "Ok", onPress : () => props.navigation.navigate('Search')}]);
                        
                }
        }
    }

    const getBiccos = async () => {
        setloading(true)
        let res = await Api.biccos(filters);
        if(!res.error){
            setloading(false)
            setBiccos(res)
        }else{
            setloading(false)
            Alert.alert("Erro:", res.error, [
                { text : "Ok", onPress : () => props.navigation.navigate('Search')}]);
                
        }
    }

    const onRefresh = () =>{
        setRefreshing(false)
        getBiccos()
    }

    useEffect(() => {
        getBiccos();
    }, [])

    

    const modalizeRef = useRef(null);
    
    const showModal = (data) => {
        setDataModal(data)
        modalizeRef.current?.open();
    }

    const handleSetLocation = async () =>{
        let response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)

        if(response == 'granted'){
            setloading(true);
            Geolocation.getCurrentPosition((info) => {
                fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${info.coords.latitude},${info.coords.longitude}&result_type=street_address&key=AIzaSyDm7JBCbgzCAdCI7QBQCxxw2veUYVqVRps`).then(res => res.json()).then(data => {
                    let city = data.plus_code.compound_code.split(' ')[1]
                    setFilters({...filters, city})
                    setloading(false);
                }).catch(err =>{
                    console.log(err)
                })
            })
        }
    }
    
    return(

        <Container>
            <StatusBar/>
            <CardHeader>
                <Titulo>
                    Encrontre o bicco ideal!
                </Titulo>
            </CardHeader>
            
            <AreaCard
                refreshControl = {
                    <RefreshControl 
                        refreshing = {refreshing} 
                        onRefresh = {onRefresh}
                    />
                }
                scrollToOverflowEnabled = {true}
            >
                <Card>    
                    <AreaFilter>              
                            <BottomFilter>
                                <SubTitulo>
                                    Adicione Filtros
                                </SubTitulo>
                                <ButtonIcon onPress = { () => {setShowFilters(!showFilters)}}>
                                    {showFilters == false ? <IconFilter width = "20" height = "20px" fill = "#1C92FF"/> : <IconUp width = "20" height = "20px" fill = "#1C92FF"/>}
                                </ButtonIcon>
                            </BottomFilter>
                            {
                                showFilters == false ? <></> : 
                                <View>
                                    <Location>
                                        <InputLocation
                                            value = {filters.city}
                                            onChangeText = {city => setFilters({...filters, city})}
                                            placeholder = "Busque pela sua localização"
                                            placeholderTextColor="#6A6180"
                                        />
                                        <ButtonIcon onPress = {handleSetLocation}>
                                            <IconLocation width = "20" height = "20px" fill = "#1C92FF"/>
                                        </ButtonIcon>
                                    </Location>

                                    <Specialty>
                                        <Picker
                                            selectedValue = {filters.specialty}
                                            onValueChange = {
                                                (specialty) => {
                                                    setFilters({...filters, specialty})
                                                }
                                            }
                                        >
                                            <Picker.Item   label = "Profissão" value = ""/>
                                        {data.map((item, index) =>{
                                            return <Picker.Item   label = {item} value = {item} key ={index}/>
                                        })}
                                        </Picker>  
                                    </Specialty>
                                    <Schedule>
                                        <Picker
                                            selectedValue = {filters.interval}
                                            onValueChange = {
                                                (interval) => {
                                                    setFilters({...filters, interval})
                                                }
                                            }
                                        >
                                            <Picker.Item   label = "Disponibilidade" value = ""/>
                                            {day.map((item, index) =>{
                                                return <Picker.Item   label = {item} value = {item} key ={index}/>
                                            })} 
                                        </Picker>  
                                    </Schedule>
                                    <Shedules>
                                        <Hour>Dás</Hour>
                                        <TextInputMask
                                            placeholder = "00:00"
                                            placeholderTextColor = '#9C98A6'
                                            value = {filters.from}
                                            type={'datetime'}
                                            options={{
                                                format: 'HH:mm'
                                            }}
                                            onChangeText = {from => {
                                                setFilters({...filters, from})
                                                setErrorSchedules(null)
                                            }}
                                            style={styles.inputMask}
                                            ref = {(ref) => fromField = ref}
                                        />
                                        <Hour>ás</Hour>
                                        <TextInputMask
                                            placeholder = "00:00"
                                            placeholderTextColor = '#9C98A6'
                                            value = {filters.to}
                                            type={'datetime'}
                                            options={{
                                                format: 'HH:mm'
                                            }}
                                            onChangeText = {to =>{
                                                setFilters({...filters, to})
                                                setErrorSchedules(null)
                                            }}
                                            style={styles.inputMask}
                                            ref = {(ref) => toField = ref}
                                        />
                                    </Shedules>
                                    <Text style={styles.errorMessage}>{errorSchedules}</Text> 
                                    <CustomButton onPress = {handleFilter}>
                                        <CustomButtonText >
                                            Filtrar
                                        </CustomButtonText>
                                    </CustomButton>
                                </View>
                            }
                        </AreaFilter>
                        {
                            !showFilters ? <Divider/> : <></>
                        } 
                        {loading && <IconLoading size = "large" color = "#006ED3"/> }
                            {
                                biccos.length == 0 ? 
                                    <SubTitulo  >
                                        Nenhum bicco encontrado
                                    </SubTitulo     >
                                :
                                    biccos.map((item, index) =>{
                                        return <CardsBicco  data = {item} key = {index} showModal = {showModal} 
                                        />
                                    })
                                
                            }
                    
                </Card>
            </AreaCard>        
           <Modalize ref={modalizeRef} snapPoint = {630}><Modal data = {dataModal} route = {props}/></Modalize> 
        </Container>
    )
}

const styles = StyleSheet.create({
    inputMask: {
        height: 50,
        width: '25%',
        padding: 10,
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: "#3F3D56",
        marginTop: 5,
    },
    inputMaskMoney: {
        height: 50,
        width: '100%',
        padding: 10,
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: "#3F3D56",
        marginTop: 5,
    },
    errorMessage: {
        alignSelf: "flex-start",
        marginLeft: 10,
        color: "red",
        fontFamily: "Poppins-Regular",
        marginBottom: 5,
        marginLeft: 10,
        color: "#f00",
        fontSize: 10,
    }
})