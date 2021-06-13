// import React from 'react';
// const websockets = require('isomorphic-ws')
// const Binance = require('node-binance-api');
// const binance = new Binance().options({
// key: '8iVB9lt1ejtS0s58LCLpemeQpoBMIjAC0HTKhhSWW4eI0aO6k9mVVNO2K3ExI6lV', // Get this from your account on binance.com
// secret: 'S4yK8Hq84RxX1hD4uR8HbWQQpUKLVShsNLzzCo4qzyxdA2eHdPWtCn6Gko0lGTRX', // Same for this
// });

// binance.websockets.depthCache(['BNBBTC'], (symbol, depth) => {
//     let bids = binance.sortBids(depth.bids);
//     let asks = binance.sortAsks(depth.asks);
//     console.info(symbol+" depth cache update");
//     console.info("bids", bids);
//     console.info("asks", asks);
//     console.info("best bid: "+binance.first(bids));
//     console.info("best ask: "+binance.first(asks));
//     console.info("last updated: " + new Date(depth.eventTime));
//   });

// binance.websockets.chart("BNBBTC", "1m", (symbol, interval, chart) => {
//     let tick = binance.last(chart);
//     const last = chart[tick].close;
//     console.info(chart);
// })
//     // Optionally convert 'chart' object to array:
//     // let ohlc = binance.ohlc(chart);
//     // console.info(symbol, ohlc);
//     console.log(symbol+" last price: "+last)
//   });














//  import React, {Component} from 'react';
//  import {Filter} from './Filter';

// class Binance extends Component{
//     constructor(){
//         super();
//         this.state={
//             nome: []
                      
//         }
//     }
    
// async componentDidMount(){
//         fetch("https://api.binance.com/api/v3/ticker/24hr")
//         .then( response => response.json())
//         .then(data => {
//             console.log(data)
//             this.setState({
//                 nome: data
              
               
//           })
        
//         })
//  };
//  render()
//  {
     
//      return(
//     <div>
        
//         {this.state.nome.map( item =>

//             <li>{item.symbol}:  { item.lastPrice}</li>
//         )}

//         </div>
//      )
     
//      }
// }
// export default Binance





