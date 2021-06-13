import React, {Component} from 'react';


class Stockprice extends Component{
    constructor(props){
        super(props);
        this.state={
            nome: "",
            constituents: []
            
        }
    }
async    componentDidMount(){
            this.getCenter();

         // set Interval
            this.interval = setInterval(this.getCenter,500);
            };
        componentWillUnmount() {
             // Clear the interval right before component unmount
        clearInterval(this.interval);
        }
        getCenter = () => {
        fetch("https://api.hashdex.io/prod/marketdata/v1/index/HDAI/last")
        .then( response => response.json())
        .then(data =>{
               // console.log(data)
                this.setState({
                      nome: data.name, 
                      constituents: data.constituents,
                })
    })
            
        
    }


    render(){
        //const listItems = this.state.constituents.map(item => 
            //<li>{item.currentPrice}</li>
       // )
                
        return(
            <div>
               {/* {this.state.nome.name} */}
               Current Price
               <ul>
        {/* {listItems}  */}
        {this.state.constituents.map(item => 
            <li key={item.assetId}>USD: {item.currentPrice}</li>
        )}
               </ul>
              {/* {nome.map(data=>(
                  <li key={nome.constituents.}>
                     <p> {nome.constituentsassetName}</p>
                  </li>
                
                ))} */}
            </div>
        )
    }

}
export default Stockprice;