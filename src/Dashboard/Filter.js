import React, {Component} from 'react';
import _isEqualto from 'lodash.isequal';
import { Row, Col} from 'reactstrap';

class Filter extends Component{
   constructor(){
       super();
       this.state={
           nome: [],
           inputvalue: []         
       }
   }
   
async componentDidMount(){
    this.getCenter();

    // set Interval
    this.interval = setInterval(this.getCenter, 1000);
};
componentWillUnmount() {
   // Clear the interval right before component unmount
clearInterval(this.interval);
}
getCenter = () => {
       fetch("https://api.binance.com/api/v3/ticker/24hr")
       .then( response => response.json())
       .then(data => {
           //console.log(data)
           this.setState({
               nome: data,
               
              
         })
       
       })
};
onSearchChange = (event) => {
    
    this.setState({
        inputvalue: event.target.value
    })
   // console.log(event.target.value)
    }
render()
{
    return(
        <div>
            <form>
        <p>Enter crypto ticker for Asset Price</p>
        <input
        type='text'
        onChange={this.onSearchChange}
        />
        {/* <p>{this.state.inputvalue}</p> */}
        </form>
        {this.state.nome.filter((item)=>
      //console.log(item.symbol)
        _isEqualto(item.symbol, this.state.inputvalue)).map(filtereditem=>(
           // console.log(filtereditem),
           
           <Row>
           <Col sm="3">
            {/* <Binance/> */}
            <li>{filtereditem.symbol}</li>
           </Col>
           <li>{filtereditem.lastPrice}</li>
       </Row>
            
           // console.log(filtereditem)
        ))}
        
        </div>

    )
}
}
export default Filter



