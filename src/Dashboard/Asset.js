import React, {Component} from 'react';
import {Card} from "./Card";
import { Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Binance from "./Binance";
import Filter from './Filter';
import AssetChart from './AssetChart';

class  Asset extends Component{
        render(){
    return(<Card height={700}>
        <h1>Assets</h1>
        
       <Filter></Filter>
        <br></br>
            <Row>
                <Col sm="6">
                 {/* <Binance/> */}
                 
                </Col>
                
            </Row>
        <AssetChart/>
        </Card>
        )
    }
}
export default Asset