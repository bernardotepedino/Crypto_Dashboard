import React, {Component} from 'react';
import { Row, Col} from 'reactstrap';


class Orderhelp extends Component{
    
        constructor(){
            super();
            this.state={
                BidValues1:[],
                BidAmount1:[],
                AskValues1:[],
                AskAmount1:[],
                BidValues2:[],
                BidAmount2:[],
                AskValues2:[],
                AskAmount2:[],
                BidValues3:[],
                BidAmount3:[],
                AskValues3:[],
                AskAmount3:[],
                BidValues4:[],
                BidAmount4:[],
                AskValues4:[],
                AskAmount4:[],                
                nome: [],
                nome2:[],
                inputvalue: []         
            }
        }
              
        componentDidMount(){
            this.getCenter();

            // set Interval
            this.interval = setInterval(this.getCenter, 1000);
       };
       componentWillUnmount() {
           // Clear the interval right before component unmount
       clearInterval(this.interval);
       }
       getCenter = () => {
             const pointertoThis= this;
            //console.log(pointertoThis);
            let BidValuesFunction=[];
            let AskValuesFunction=[];
            fetch("https://api.binance.com/api/v3/depth?symbol="+this.state.inputvalue + "&limit=10")
            
            .then( response => response.json())
            .then(data => {
              console.log(data)
              for (var key in data.asks) {
                BidValuesFunction.push(data.bids[key]);
                AskValuesFunction.push(data.asks[key]);
                }
            pointertoThis.setState({
                
                BidValues1: BidValuesFunction[0][0],
                BidAmount1: BidValuesFunction[0][1],
                AskValues1: AskValuesFunction[0][0],
                AskAmount1: AskValuesFunction[0][1],
                BidValues2: BidValuesFunction[1][0],
                BidAmount2: BidValuesFunction[1][1],
                AskValues2: AskValuesFunction[1][0],
                AskAmount2: AskValuesFunction[1][1],
                BidValues3: BidValuesFunction[2][0],
                BidAmount3: BidValuesFunction[2][1],
                AskValues3: AskValuesFunction[2][0],
                AskAmount3: AskValuesFunction[2][1],
                BidValues4: BidValuesFunction[3][0],
                BidAmount4: BidValuesFunction[3][1],
                AskValues4: AskValuesFunction[3][0],
                AskAmount4: AskValuesFunction[3][1],
            })    
            console.log( BidValuesFunction[0][1]);
            console.log( AskValuesFunction[0][1])       
                   
              })
            
        }
     
     
     onSearchChange = (event) => {
         
        this.setState({
            inputvalue: event.target.value
        })
        //console.log(this.state.inputvalue)
        }  
     

     render()
     {
         return(
             <div>
             <form>
             <p>Enter crypto ticker</p>
             <input
             type='text'
             onChange={this.onSearchChange}
             />
            </form>
            <Row>
                <Col  >
                <h1>Buy</h1>
                </Col>
                <Col >
                <h1>Sell</h1>
            </Col> 
       </Row>
       <Row>
                <Col  >
                <h3>Asset</h3>
                </Col>
                <Col >
                <h3>Price</h3>
                   </Col> 
                  <Col >
                <h3>Amount</h3>
                  </Col> 
                  <Col >
                <h3>Amount</h3>
                  </Col> 
                  <Col >
                <h3>Price</h3>
                 </Col> 
                <Col  >
                <h3>Asset</h3>
                </Col>
       </Row>
       <Row>
                <Col >
                <p>{this.state.inputvalue}</p>
                </Col>
                <Col >
                <p>{this.state.BidValues1}</p>
                   </Col> 
                  <Col >
                  <p>{this.state.BidAmount1}</p>
                  </Col> 
                  <Col >
                  <p>{this.state.AskAmount1}</p>
                  </Col> 
                  <Col >
                  <p>{this.state.AskValues1}</p>
                 </Col> 
                <Col  >
                <p>{this.state.inputvalue}</p>
                </Col>
       </Row>
       <Row>
                <Col >
                <p>{this.state.inputvalue}</p>
                </Col>
                <Col >
                <p>{this.state.BidValues2}</p>
                   </Col> 
                  <Col >
                  <p>{this.state.BidAmount2}</p>
                  </Col> 
                  <Col >
                  <p>{this.state.AskAmount2}</p>
                  </Col> 
                  <Col >
                  <p>{this.state.AskValues2}</p>
                 </Col> 
                <Col  >
                <p>{this.state.inputvalue}</p>
                </Col>
       </Row>
       <Row>
                <Col >
                <p>{this.state.inputvalue}</p>
                </Col>
                <Col >
                <p>{this.state.BidValues3}</p>
                   </Col> 
                  <Col >
                  <p>{this.state.BidAmount3}</p>
                  </Col> 
                  <Col >
                  <p>{this.state.AskAmount3}</p>
                  </Col> 
                  <Col >
                  <p>{this.state.AskValues3}</p>
                 </Col> 
                <Col  >
                <p>{this.state.inputvalue}</p>
                </Col>
       </Row>
       <Row>
                <Col >
                <p>{this.state.inputvalue}</p>
                </Col>
                <Col >
                <p>{this.state.BidValues4}</p>
                   </Col> 
                  <Col >
                  <p>{this.state.BidAmount4}</p>
                  </Col> 
                  <Col >
                  <p>{this.state.AskAmount4}</p>
                  </Col> 
                  <Col >
                  <p>{this.state.AskValues4}</p>
                 </Col> 
                <Col  >
                <p>{this.state.inputvalue}</p>
                </Col>
       </Row>
             
             </div>
     
         )
     }
     }
export default Orderhelp;
// const api = require('binance');
// const binanceRest = new api.BinanceRest({
//     key: '8iVB9lt1ejtS0s58LCLpemeQpoBMIjAC0HTKhhSWW4eI0aO6k9mVVNO2K3ExI6lV', // Get this from your account on binance.com
//     secret: 'S4yK8Hq84RxX1hD4uR8HbWQQpUKLVShsNLzzCo4qzyxdA2eHdPWtCn6Gko0lGTRX', // Same for this
// });
// export function Orderhelp(){
// return(
//     binanceRest.allOrders({
//         symbol: 'BNBBTC' // Object is transformed into a query string, timestamp is automatically added
//     })
//     .then(data => {
//         console.log(data);
//     })
//     )
// }
    // .catch(err => {
    //     console.error(err);
    // });
// import { render } from '@testing-library/react';
// import binance from 'node-binance-api';
// const api = require('binance');
// const binanceWS = new api.BinanceWS(true); // Argument specifies whether the responses should be beautified, defaults to true
// const binance = require('node-binance-api');
// const Binance = require('node-binance-api');
// const binance = new Binance().options




// // Getting latest price of a symbol
// binance.prices(function(error, ticker) {
// 	console.log("prices()", ticker);
// 	console.log("Price of BNB: ", ticker.BNBBTC);
// });


// binanceWS.onKline('BNBBTC', '1m', data => {
//     console.log(data);
// });
// binanceWS.onAggTrade('BNBBTC', data => {
//     console.log(data);
// });
// binanceWS.onKline('BNBBTC', '1m', data => {
//     console.log(data);
// });
    // document.getElementById("test1").value += JSON.stringify(data);

// class Binance extends Component{
 

//     render(){
//         return(
//             <div>
//             {api.BinanceWS.onDepthUpdate('BNBBTC', data => {
//         console.log(data);
//             })
//         }
            
//                 </div>
//         )
    
// }
// }
// export default Binance

