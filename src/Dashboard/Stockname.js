import React, {Component} from 'react';


class Stockname extends Component{
    constructor(props){
        super(props);
        this.state={
            nome: "",
            constituents: []
            
        }
    }
 async   componentDidMount(){
        fetch("https://api.hashdex.io/prod/marketdata/v1/index/HDAI/last")
        .then( response => response.json())
        .then(data =>{
          //    console.log(data)
                this.setState({
                      nome: data.name, 
                      constituents: data.constituents,
                      data: data
                })
    })
            
        
    }


    render(){
     //  const listItems = this.state.constituents.map(item => 
       //     <p>{item.assetId}</p>
        //)
        
        return(
            <div>
                {/* {this.state.nome}  */}
               Asset
               <ul>
               {this.state.constituents.map(item => 
            <li key={item.assetId}> {item.assetId}/{item.assetName}</li>
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
export default Stockname;