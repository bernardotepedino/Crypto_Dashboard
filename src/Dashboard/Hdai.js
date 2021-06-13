import React, {Component} from 'react';
import {Card} from "./Card";
import Stockname from './Stockname';
import Stockprice from './Stockprice';

import { Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




class Hdai extends Component{
  
       render(){
    return(<Card height={600}>
        <h1>HDAI</h1>
        
            <Row>
                <Col sm="3">
                 <Stockname></Stockname>
                </Col>
                <Col> 
                <Stockprice></Stockprice>
                </Col>
            </Row>
        
        </Card>
        )
    }
}
export default Hdai