import React from 'react';
import {Card} from "./Card";
import Binance from './Binance';
import Orderhelp from './Orderhelp';
import Orderhelp2 from './Orderhelp2';


export function Order()
{   return<Card height={600}>
    
   <h1>Order Book</h1>
   
   {/* <Binance></Binance> */}
   {/* <Orderhelp2/> */}
   <Orderhelp/>
    </Card>
}