import React, { Component } from 'react';
import {Grid,Row,Col} from 'react-bootstrap'
import HeadTitle from './component/HeadTitle'
import Puce from './component/Puce'
import LesNombres from './component/DouzeNombre'
import CardHolder from './component/CardHolder'
import QuatreNombres from './component/QuatreNombres'
import MonthYear from './component/MonthYear'
import Master_visa from './component/Master_visa'

import Form from './component/Form'
import './App.css';


class App extends Component {
  constructor(props)
  {
    super(props)
    this.state = {
      twlevenumber : '',
      name: '',
      validuntil:''
  }
  this.get_twelve_number =   this.get_twelve_number.bind(this)
  this.get_name =   this.get_name.bind(this)
  this.get_valid_until = this.get_valid_until.bind(this)

}
get_twelve_number(twlevenumber)
{
  this.setState({
    twlevenumber : twlevenumber
  })
}
get_name(name)
{
  this.setState({
    name : name
  })
}
get_valid_until(validuntil)
{
  this.setState({
    validuntil : validuntil
  })
}

  render() {
    return (
      <React.Fragment>
     
      <Form 
        get_twelve_number={this.get_twelve_number}
        get_name={this.get_name}
        get_valid_until={this.get_valid_until}
      />
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
       <LesNombres sendtwelve={this.state.twlevenumber} />
       <Row>
<Col xs={12} md={8}  >

       <QuatreNombres />
       <CardHolder  name={this.state.name}/>

</Col>
<Col xs={12} md={4}  >

       <MonthYear validuntil= {this.state.validuntil} />
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
      </React.Fragment>
  );
  }
}
export default App;
