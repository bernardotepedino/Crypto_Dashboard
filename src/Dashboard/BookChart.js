import React, {Component} from 'react';
import _sortBy from 'lodash.isequal';
import {  XAxis, YAxis,  Tooltip, Legend, ScatterChart, Scatter, ZAxis } from 'recharts';
//import { Chart } from 'react-charts'
//import { Row, Col} from 'reactstrap';
//import Highcharts from 'highcharts';
//import HighchartsReact from 'highcharts-react-official';





class BookChart extends Component{

    constructor(){
        super();
        this.state={
            AssetXValues:[],
            AssetYValues:[],
            inputvalue: [],
            variavel:[]
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
        fetch("https://api.binance.com/api/v3/trades?symbol="+this.state.inputvalue + "&limit=1000")

        .then( response => response.json())
        .then(data => {
           // console.log(data)
            for (var key in data) {
                AssetXValuesFunction.push(data[key]['price']);
                AssetYValuesFunction.push(data[key]['qty']);
                };
            AssetXValuesFunction.sort((a, b) => b-a);
             AssetYValuesFunction.sort((a, b) => a - b);

            pointertoThis.setState({

                AssetXValues: AssetXValuesFunction,
                AssetYValues: AssetYValuesFunction
            })



          //console.log(AssetYValuesFunction);

        })
    };



 onSearchChange = (event) => {

    this.setState({
        inputvalue: event.target.value
    })
    //console.log(this.state.inputvalue)
    }

 render()
 {
      
   const suporte0={

        x: this.state.AssetXValues[0],
        y: this.state.AssetYValues[0],
   };

const suporte1={

         x: this.state.AssetXValues[1],
         y: this.state.AssetYValues[1],
    };
    const suporte2={

        x: this.state.AssetXValues[2],
        y: this.state.AssetYValues[2],
   };
   const suporte3={

    x: this.state.AssetXValues[3],
    y: this.state.AssetYValues[3],
};

const suporte4={

     x: this.state.AssetXValues[4],
     y: this.state.AssetYValues[4],
};
const suporte5={

    x: this.state.AssetXValues[5],
    y: this.state.AssetYValues[5],
};
   const data=[
        {
            name: suporte0.x,
            uv: suporte0.y

    },
        {
            name: suporte1.x,
            uv: suporte1.y

    },
        {
            name: suporte2.x,
            uv: suporte2.y

    },
        {
            name: suporte3.x,
            uv: suporte3.y

    },
    {
            name: suporte4.x,
            uv: suporte4.y

    },
        {
            name: suporte5.x,
            uv: suporte5.y

    },
        {
            name: this.state.AssetXValues[6],
            uv: this.state.AssetYValues[6],

    },
        {
            name: this.state.AssetXValues[7],
            uv: this.state.AssetYValues[7],

    },
        {
            name: this.state.AssetXValues[8],
            uv: this.state.AssetYValues[8],

    },
        {
            name: this.state.AssetXValues[9],
            uv: this.state.AssetYValues[9],

    },
    {
            name: this.state.AssetXValues[10],
            uv: this.state.AssetYValues[10],

    },
        {
            name: this.state.AssetXValues[11],
            uv: this.state.AssetYValues[11],

    },
        {
            name: this.state.AssetXValues[12],
            uv: this.state.AssetYValues[12],

    },
        {
            name: this.state.AssetXValues[13],
            uv: this.state.AssetYValues[13],

    },
    {
        name: this.state.AssetXValues[14],
        uv: this.state.AssetYValues[14],

},
    {
        name: this.state.AssetXValues[15],
        uv: this.state.AssetYValues[15],

},
    {
        name: this.state.AssetXValues[16],
        uv: this.state.AssetYValues[16],

},
    {
        name: this.state.AssetXValues[17],
        uv: this.state.AssetYValues[17],

},
{
        name: this.state.AssetXValues[18],
        uv: this.state.AssetYValues[18],

},
    {
        name: this.state.AssetXValues[19],
        uv: this.state.AssetYValues[19],

},
    {
        name: this.state.AssetXValues[20],
        uv: this.state.AssetYValues[20],

},
    {
        name: this.state.AssetXValues[21],
        uv: this.state.AssetYValues[21],

},
{
    name: this.state.AssetXValues[22],
    uv: this.state.AssetYValues[22],

},
{
    name: this.state.AssetXValues[23],
    uv: this.state.AssetYValues[23],

},
{
    name: this.state.AssetXValues[24],
    uv: this.state.AssetYValues[24],

},
{
    name: this.state.AssetXValues[25],
    uv: this.state.AssetYValues[25],

},
{
    name: this.state.AssetXValues[26],
    uv: this.state.AssetYValues[26],

},
{
    name: this.state.AssetXValues[27],
    uv: this.state.AssetYValues[27],

},
{
    name: this.state.AssetXValues[28],
    uv: this.state.AssetYValues[28],

},
{
    name: this.state.AssetXValues[29],
    uv: this.state.AssetYValues[29],

},
{
name: this.state.AssetXValues[30],
uv: this.state.AssetYValues[30],

},
{
name: this.state.AssetXValues[31],
uv: this.state.AssetYValues[31],

},
{
name: this.state.AssetXValues[32],
uv: this.state.AssetYValues[32],

},
{
name: this.state.AssetXValues[33],
uv: this.state.AssetYValues[33],

},
{
name: this.state.AssetXValues[34],
uv: this.state.AssetYValues[34],

},
{
name: this.state.AssetXValues[35],
uv: this.state.AssetYValues[35],

},
{
name: this.state.AssetXValues[36],
uv: this.state.AssetYValues[36],

},
{
name: this.state.AssetXValues[37],
uv: this.state.AssetYValues[37],

},
]
     return(
         <div >
         <form>
         <p>Enter crypto ticker</p>
         <input
         type='text'
         onChange={this.onSearchChange}
         />
        </form>
        {/* <p>{suporte0.x}</p>
        <p>{suporte0.y}</p> */}
     {/* <p>{this.state.AssetYValues}</p> */}




     {/* <ul>

               {this.state.AssetYValues.map(item =>
            <li>{item}</li>
               )}

               </ul> */}

        <ScatterChart
        width={900}
        height={400}
        margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}
      >
        <XAxis  type="number" dataKey="name" name="Price" unit="USD" domain={[]}/>
        <YAxis  type="number" dataKey="uv" name="Amount" unit="" domain={[]}/>
        <ZAxis type="number" range={[1]} />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Legend />
        <Scatter name={this.state.inputvalue} data={data} fill="#8884d8" line shape="dot" />
      </ScatterChart>
      </div>

     )
 }
 }
export default BookChart;
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


