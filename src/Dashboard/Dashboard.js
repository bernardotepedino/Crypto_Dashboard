import React from 'react';
//import ReactDOM from 'react-dom';
import {Brand} from "./Brand";
import {Container} from "./Container";
import {GlobalStyle} from "./GlobalStyle";
import {Chart} from "./Chart";
import Hdai from "./Hdai";
import {Order} from "./Order";
import Asset from "./Asset";




export function Dashboard()
{
    return(
    <>
        <GlobalStyle/>
        <Container >
        <Brand/>
        <Chart/>
        <Hdai></Hdai>
        <Order/>
        <Asset/>
        </Container>
    </>
        );
};