import React from 'react';
import {Card} from "./Card";
import BookChart from "./BookChart";


export function Chart()
{   return<Card height={700}>
    
   <h1>Order Book</h1>

   
   <h2>Chart</h2>
   <BookChart/>
    </Card>
}