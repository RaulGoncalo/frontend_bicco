import React, {useState}from 'react';

import {
    Container, 
    Header,
    TituloHeader, 
    TituloLigth, 
    CardArea, 
    Scroller, 
    CustomButton, 
    CustomButtonText,
    Titulo
} from './styles';

import {TextInputMask} from 'react-native-masked-text' 
import IconExit from '../../assets/fi-rr-arrow-small-left.svg';
import Input from '../../components/Input';
import Api from '../../Api';
import {Alert, StyleSheet, Text} from 'react-native';


export default ({navigation, route}) => {
    const [user, setUser] = useState(route.params.parms)

    const [errorCep, setErrorCep] = useState('');
    const [errorStreet, setErrorStreet] = useState('');
    const [errorDistrict, setErrorDistrict] = useState('');
    const [errorCity, setErrorCity] = useState('');
    const [errorState, setErrorState] = useState('');
    const [errorNumber, setErrorNumber] = useState('');
    
    const handleRegisterClick = async () => {
        console.log(user)
        setErrorCep(null)
        setErrorStreet(null)
        setErrorCity(null)
        setErrorState(null)
       if(user.cep != '' && user.street != '' && user.number != '' && user.district != ''){
           console.log(user)
                let res = await Api.register(user)
                if(res.success){
                    Alert.alert("Sucesso", "Endereço cadastrado", [{
                        text : "Ok"
                    }]);
    
                    navigation.reset({
                        routes: [{name: 'Home'}]
                    })
                }else{
                    alert("Erro:" + res.error)
                    navigation.reset({
                        routes: [{name: 'Home'}]
                    })
                } 
        }else{
            if(user.cep == '')
                setErrorCep("Digite um cep")
            if(user.district =='')
                setErrorDistrict("Digite um bairro")
            if(user.street == '')
                setErrorStreet("Digite um logradouro")
            if(user.number == '')
                setErrorNumber("Digite um numero")
        } 
    }

    const getCep = (cep) => {
        let code = cep._dispatchInstances.memoizedProps.value

        fetch(`https://viacep.com.br/ws/${code}/json/`).then(res => res.json()).then(data => {
            if(!data.erro){
                setUser({
                    token: user.token,
                    email: user.email,
                    cep: data.cep,
                    street: data.logradouro,
                    district: data.bairro,
                    city: data.localidade,
                    number: '',
                    state: data.uf
                })
            }else{
                setErrorCep("Digite um cep válido")
            }
        }).catch(err =>{
            console.log(err)
        })
    }

    let cepField = null

    return(
        <Container>
            <Scroller vertical={true} showsVerticalScrollIndicator= {false}>
                <Header onPress = {() => navigation.navigate('Register')}>
                    <IconExit width = "30" height = "30px" fill = "#6A6180"/>
                    <TituloHeader>Voltar</TituloHeader>

                </Header>
                <Titulo>Finalize seu cadastro:</Titulo>
                <CardArea>
                    <TituloLigth>Dados Residenciais:</TituloLigth>
                    < TextInputMask
                        type = {'zip-code'}
                        value = {user.cep}
                        style={styles.inputMask}
                        placeholder = {"Cep"}
                        placeholderTextColor = '#9C98A6'   
                        onChangeText = { cep =>  {
                            setUser({...user, cep})
                            setErrorCep(null)
                        }}
                        ref = {(ref) => cepField =  ref }
                        onBlur = {getCep}
                    />
                    <Text style={styles.errorMessage}>{errorCep}</Text>

                    <Input
                        placeholder = "Logradouro"
                        value = {user.street}
                        onChangeText = { street => {
                            setUser({...user, street})
                            setErrorStreet(null)
                        }}
                        errorMessage = {errorStreet}
                    />
                    <Input
                        placeholder = "Numero"
                        value = {user.number}
                        onChangeText = { number => {
                            setUser({...user, number})
                            setErrorNumber(null)
                        }}
                        keyboardType = "numeric"
                        errorMessage = {errorNumber}
                    />
                    <Input
                        placeholder = "Bairro"
                        value = {user.district}
                        onChangeText = { district => {
                            setUser({...user, district})
                            setErrorDistrict(null)
                        }}
                        errorMessage = {errorDistrict}
                    />
                    <Input
                        placeholder = "Cidade"
                        value = {user.city}
                    />
                    <Input
                        placeholder = "UF"
                        value = {user.state}
                    />
                </CardArea>
                <CustomButton onPress = {handleRegisterClick}>
                    <CustomButtonText >
                        Salvar
                    </CustomButtonText>
                </CustomButton>    
            </Scroller>           
        </Container>
    )
}


const styles = StyleSheet.create({
    inputMask: {
        height: 55,
        width: '100%',
        padding: 10,
        fontSize: 14,
        borderRadius: 8,
        borderColor: "#3F3D56",
        borderWidth: 1,
        borderStyle: "solid",
        alignSelf: "flex-start",
        fontFamily: 'Poppins-Regular',
        color: "#3F3D56",
    },
    errorMessage: {
        alignSelf: "flex-start",
        marginLeft: 10,
        color: "red",
        fontSize: 10,
        fontFamily: "Poppins-Regular",
        marginBottom: 5,
        marginLeft: 15,
        color: "#f00",
        fontSize: 12
    }
})