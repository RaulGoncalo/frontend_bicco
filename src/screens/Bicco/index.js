import React, {useState, useContext, useEffect} from 'react';
import {
    Container,
    TextArea,
    AreaCards,
    Scroller,
    AreaScroller,
} from './styles';

import Redo from '../../assets/fi-rr-redo.svg';

import  TextHome  from '../../components/TextHome';
import StatusBar from '../../components/StatusBar';
import Cards from '../../components/CardStrained';
import CardsBicco from '../../components/CardsBicco';

export default () => {

    return(
        <Container>
            <StatusBar/>            
            <Scroller vertical = {true} showsVerticalScrollIndicator= {false}>
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
                    <CardsBicco name = 'Raul' work = 'Pedreiro'  value = '200' />
                    <CardsBicco name = 'Bianca' work = 'Professora de ingles'  value = '350'/>
                    <CardsBicco name = 'Bianca' work = 'Professora de ingles'  value = '350'/>
                    <CardsBicco name = 'Bianca' work = 'Professora de ingles'  value = '350'/>
                    <CardsBicco name = 'Bianca' work = 'Professora de ingles'  value = '350'/>
                    <CardsBicco name = 'Bianca' work = 'Professora de ingles'  value = '350'/>
                    <CardsBicco name = 'Bianca' work = 'Professora de ingles'  value = '350'/>
                    <CardsBicco name = 'Bianca' work = 'Professora de ingles'  value = '350'/>
                    <CardsBicco name = 'Bianca' work = 'Professora de ingles'  value = '350'/>
                    <CardsBicco name = 'Bianca' work = 'Professora de ingles'  value = '350'/>
                </AreaScroller>
            </Scroller>


            
        </Container>
    )
}