import React, {Component} from 'react';
//import { Row, Col} from 'reactstrap';
//import Highcharts from 'highcharts';
//import HighchartsReact from 'highcharts-react-official';
//import {Graph} from "./Graph";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend,  } from 'recharts';
//import { Chart } from 'react-charts'





class AssetChart extends Component{
    
    constructor(){
        super();
        this.state={
            AssetXValues:[],
            AssetYValues:[],
            inputvalue1: [],
            inputvalue2: []        
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
       let AssetXValuesFunction=[];
       let AssetYValuesFunction=[];
        fetch("https://api.binance.com/api/v3/aggTrades?symbol="+this.state.inputvalue1+"&limit=100")
        
        .then( response => response.json())
        .then(data => {
          // console.log(data)
            for (var key in data) {
                AssetXValuesFunction.push(data[key]['p']);
               //AssetYValuesFunction.push(data[key]['qty']);
                }
            pointertoThis.setState({
                
                AssetXValues: AssetXValuesFunction,
              //  AssetYValues: AssetYValuesFunction
               
            })    
                     
             
                
          
          console.log(AssetXValuesFunction);
        
        })
    }
 
 
 onSearchChange = (event) => {
     
    this.setState({
        inputvalue1: event.target.value
    })
    console.log(this.state.inputvalue1)
    }  
    // onSearchSubmit = (event) => {
     
    //     this.setState({
    //         inputvalue2: event.target.value
    //     })
    //     console.log(this.state.inputvalue2)
    //     }  

 render()
 {  
    const subTaskComponents = []
    for (var i = 0; i < 100; i++) {
      subTaskComponents.push(this.state.AssetXValues)
    }
     
     console.log(subTaskComponents)
   const suporte0={
        
        x: this.state.AssetXValues[0]
   };
   
    const suporte1={
         
         x: this.state.AssetXValues[1]
    };
    const suporte2={
         
        x: this.state.AssetXValues[2]
   };
   const suporte3={
         
    x: this.state.AssetXValues[3]
};
const suporte4={
         
    x: this.state.AssetXValues[4]
};
const suporte5={
         
    x: this.state.AssetXValues[5]
};
const suporte6={
         
    x: this.state.AssetXValues[6]
};

   const data=[
       {
        crypto: suporte0.x,
        
   },
   {
   crypto: suporte1.x
    
},
{
    crypto: suporte2.x
    
},
{
    crypto: suporte3.x
    
},
{
    crypto: suporte4.x
    
},
{
    crypto: suporte5.x
    
},
{
    crypto: suporte6.x
    
},
{
    crypto: this.state.AssetXValues[7]
    
},
{
    crypto: this.state.AssetXValues[8]
    
},
{
    crypto: this.state.AssetXValues[9]
    
},
{
    crypto: this.state.AssetXValues[10]
    
},
{
    crypto: this.state.AssetXValues[11]
    
},
{
    crypto: this.state.AssetXValues[12]
    
},
{
    crypto: this.state.AssetXValues[13]
    
},
{
    crypto: this.state.AssetXValues[14]
    
},
{
    crypto: this.state.AssetXValues[15]
    
},
{
    crypto: this.state.AssetXValues[16]
    
},
{
    crypto: this.state.AssetXValues[17]
    
},
{
    crypto: this.state.AssetXValues[18]
    
},
{
    crypto: this.state.AssetXValues[19]
    
},
{
    crypto: this.state.AssetXValues[20]
    
},
{
    crypto: this.state.AssetXValues[21]
    
},
{
    crypto: this.state.AssetXValues[22]
    
},
{
    crypto: this.state.AssetXValues[23]
    
},
{
    crypto: this.state.AssetXValues[24]
    
},
{
    crypto: this.state.AssetXValues[25]
    
},
{
    crypto: this.state.AssetXValues[26]
    
},
{
    crypto: this.state.AssetXValues[27]
    
},
{
    crypto: this.state.AssetXValues[28]
    
},
{
    crypto: this.state.AssetXValues[29]
    
},
{
    crypto: this.state.AssetXValues[30]
    
},
{
    crypto: this.state.AssetXValues[31]
    
},
{
    crypto: this.state.AssetXValues[32]
    
},
{
    crypto: this.state.AssetXValues[33]
    
},
{
    crypto: this.state.AssetXValues[34]
    
},
{
    crypto: this.state.AssetXValues[35]
    
},
{
    crypto: this.state.AssetXValues[36]
    
},
{
    crypto: this.state.AssetXValues[37]
    
},
{
    crypto: this.state.AssetXValues[38]
    
},
{
    crypto: this.state.AssetXValues[39]
    
},
{
    crypto: this.state.AssetXValues[40]
    
},
{
    crypto: this.state.AssetXValues[41]
    
},
{
    crypto: this.state.AssetXValues[42]
    
},
{
    crypto: this.state.AssetXValues[43]
    
},
{
    crypto: this.state.AssetXValues[44]
    
},
{
    crypto: this.state.AssetXValues[45]
    
},
{
    crypto: this.state.AssetXValues[46]
    
},
{
    crypto: this.state.AssetXValues[47]
    
},
{
    crypto: this.state.AssetXValues[48]
    
},
{
    crypto: this.state.AssetXValues[49]
    
},
{
    crypto: this.state.AssetXValues[50]
    
},
{
    crypto: this.state.AssetXValues[51]
    
},
{
    crypto: this.state.AssetXValues[52]
    
},
{
    crypto: this.state.AssetXValues[53]
    
},
{
    crypto: this.state.AssetXValues[54]
    
},

]
     return(
         <div >
            <form>
                <p>Enter crypto ticker for AssetChart</p>
                <input
                    type='text'
                    onChange={this.onSearchChange}
                />
            </form>
            <LineChart width={900} height={250} data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                
                <XAxis  />
                <YAxis  domain={['10000', '11000']}/>
                <Tooltip />
                <Legend name = {this.state.inputvalue}/>
                <Line  type="monotone" dataKey="crypto" stroke="#82ca9d" />
            </LineChart>
        </div>
 
    )
}
}
export default AssetChart;
         {/* <form>
         <p>Enter the number of trades</p>
         <input
         type='text'
         onSubmit={this.onSearchSubmit}
         />
        </form> */} 
        {/* <p>{suporte0.x}</p> */}
     {/* <p>{this.state.AssetYValues}</p> */}




     {/* <ul>

               {this.state.AssetYValues.map(item => 
            <li>{item}</li>
               )}
               
               </ul> */}
        
       
        {/* <Row>
            <Col sm="3" >
            <h3>Asset</h3>
            <p>{this.state.inputvalue}</p>
            </Col>
            <Col sm="3">
            <h1>Sell</h1>
             {this.state.nome.map(item => 
             <p>{item}</p>
             )}
        </Col>
        <Col sm="3">
                <h1>Buy</h1>
             {this.state.nome2.map(item => 
             <p>{item}</p>
             )}
        </Col>
        <Col sm="3" >
        <h3>Asset</h3>
            <p>{this.state.inputvalue}</p>
            </Col>
            
   </Row> */}
         
        