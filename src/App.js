import React, { Component } from 'react';
import {Grid,Row,Col} from 'react-bootstrap'
import HeadTitle from './component/HeadTitle'
import Puce from './component/Puce'
import LesNombres from './component/DouzeNombre'
import CardHolder from './component/CardHolder'
import QuatreNombres from './component/QuatreNombres'
import MonthYear from './component/MonthYear'
import Master_visa from './component/Master_visa'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Grid  className="bgprin">
       <Row>
       <Col xs={12} md={12} >
       <HeadTitle />
       <Puce />
       </Col>
       </Row>
      

       <Grid>
       <Row>
       <Col xs={12} md={8} className="left" >
       <LesNombres />
       <Row>
<Col xs={12} md={8}  >

       <QuatreNombres />
       <CardHolder />

</Col>
<Col xs={12} md={4}  >

       <MonthYear />
</Col>
</Row>





       </Col>
       <Col   xs={12} md={4} >
       <Master_visa />
       </Col>
       </Row>
       </Grid>
       </Grid>
      </div>
    );
  }
}
export default App;
