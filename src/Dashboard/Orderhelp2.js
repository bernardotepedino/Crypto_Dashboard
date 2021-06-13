import React, {Component} from 'react';
import _isEqualto from 'lodash.isequal';
import { Container, Row, Col} from 'reactstrap';

class Orderhelp2 extends Component{
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
       fetch("https://api.binance.com/api/v3/ticker/bookTicker")
       .then( response => response.json())
       .then(data => {
          // console.log(data)
           this.setState({
               nome: data,
               
              
         })
       
       })
};
onSearchChange = (event) => {
    
    this.setState({
        inputvalue: event.target.value
    })
    console.log(event.target.value)
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
        <p>{this.state.inputvalue}</p>
        </form>
        {this.state.nome.filter((item)=>
      //console.log(item.symbol)
        _isEqualto(item.symbol, this.state.inputvalue)).map(filtereditem=>(
           // console.log(filtereditem),
           
        <Container>
             <Row>
                <Col sm="3">
                {/* <Binance/> */}
            
            
                   <h3>Asset</h3>
                   <li>{filtereditem.symbol}</li>
                  </Col>
                  <Col>
           
                 <h3>Buy Price</h3>
                  <li>{filtereditem.bidPrice}</li>
                  </Col>
                   <Col>
           
                <h3>Buy Amount</h3>
                  <li>{filtereditem.bidQty}</li>
                  </Col>
                  <Col>
           
                 <h3>Sell Price</h3>
                  <li>{filtereditem.askPrice}</li>
                   </Col>
                   <Col>
           
                  <h3>Sell Amount</h3>
                  <li>{filtereditem.askQty}</li>
                  </Col>
                </Row>
                         
           </Container> 
           // console.log(filtereditem)
        ))}
        
        </div>

    )
}
}
export default Orderhelp2