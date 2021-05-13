import React, {useEffect} from 'react';
import {
    Container,
    FlatList,
    Titulo,
    SubTitulo,
    AreaFilter,
    Location,
    Schedule,
    Specialty,
    InputLocation,
    ButtonIcon,
    BottomFilter,
    InputSpecialty,
    Picker,
    Card,
    Scroll,
    CardHeader,
    Divider,
    Hour,
    Shedules,
    CustomButton,
    CustomButtonText,
    IconLoading,
} from './styles';
import StatusBar from "../../components/StatusBar";
import IconLocation from "../../assets/fi-rr-marker.svg";
import IconFilter from "../../assets/fi-rr-filter.svg";
import { useState, useRef } from 'react';
import { Modalize } from 'react-native-modalize';
import CardsBicco from '../../components/CardsBicco';
import Api from '../../Api'
import {View} from 'react-native';
import {TextInputMask} from 'react-native-masked-text'
import {StyleSheet, Text, RefreshControl} from 'react-native'


export default  () => {

    const [showFilters, setShowFilters] = useState(false);
    const [loading, setloading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [errorSchedules, setErrorSchedules] = useState('');
    const [biccos, setBiccos] = useState([]);
    const [biccoToModal, setBiccoToModal] = useState({});

    const [filters, setFilters] = useState({
        location: null,
        specialty : null,
        interval: null,
        from: null,
        to: null
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

    const handleFilter = () =>{
        setErrorSchedules(null)
       if(toField.isValid() && fromField.isValid()){
           console.log(filters)
       }else{
           setErrorSchedules('Digite uma hora válida')
       }
    }

    const getBiccos = async () => {
        setloading(true)
        let res = await Api.biccos();
        if(!res.error){
            setloading(false)
            setBiccos(res)
        }else{
            Alert.alert("Erro:", res.error, [
                { text : "Ok", onPress : () => navigation.navigate('Search')}]);
        }
    }

    const onRefresh = () =>{
        setRefreshing(false)
        getBiccos()
    }

    useEffect(() => {
        getBiccos();
    }, [])

    const showModal = (item) => {  
        onOpen()
        return <Modalize ref={modalizeRef} snapPoint = {500}><View>{item}</View></Modalize> 
    }

    const modalizeRef = useRef(null);

    const onOpen = () =>{
        console.log(biccoToModal)
        modalizeRef.current?.open();
    };


    return(
        <Container>
            <StatusBar/>
            <CardHeader>
                <Titulo>
                    Encrontre o bicco ideal!
                </Titulo>
            </CardHeader>
            <Card  refreshControl = {<RefreshControl refreshing = {refreshing} onRefresh = {onRefresh} />}>    
                <AreaFilter>              
                        <BottomFilter>
                            <SubTitulo>
                                Adicione Filtros
                            </SubTitulo>
                            <ButtonIcon onPress = { () => {setShowFilters(!showFilters)}}>
                                <IconFilter width = "20" height = "20px" fill = "#1C92FF"/>
                            </ButtonIcon>
                        </BottomFilter>
                        {
                            showFilters == false ? <></> : 
                            <View>
                                <Location>
                                    <InputLocation
                                        value = {filters.location}
                                        onChangeText = {location => setFilters({...filters, location})}
                                        placeholder = "Busque pela sua localização"
                                        placeholderTextColor="#6A6180"
                                    />
                                    <ButtonIcon>
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
                    {loading && <IconLoading size = "large" color = "#006ED3"/> }
                        {
                            biccos.map((item, index) =>{
                                return <CardsBicco  data = {item} key = {index} showModal = {showModal}
                                />
                            })
                            
                        }
                
            </Card>        
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