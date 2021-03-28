import React from 'react';

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
} from './styles';

import IconExit from '../../assets/fi-rr-arrow-small-left.svg';
import Input from '../../components/RegisterInput';
import DesInput from '../../components/DescInput';

export default ({navigation}) => {
    return(
        <Container>
            <Header onPress = {() => navigation.navigate('Bicco')}>
                <IconExit width = "30" height = "30px" fill = "#6A6180"/>
                <TituloHeader>Voltar</TituloHeader>
            </Header>

            <Scroller vertical={true} showsVerticalScrollIndicator= {false}>
                <Titulo>Preencha todos os campos:</Titulo>
                <CardArea>
                    <TituloLigth>Dados do Bico:</TituloLigth>
                    <Input
                        placeholder = "Especialidade"
                    />

                    <Input
                        placeholder = "Valor por hora"
                        keyboardType = {"numeric"}
                    />
                    <Input
                    placeholder = "Local de atendimento"
                    />
                    
                    <DesInput
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