import React from 'react'
import {Col,Grid,Row} from 'react-bootstrap'
import {onze} from '../component/Styles/MonthYear.css'
 
const MonthYear = (props) => {
    return(
    <div>


<Row>
<Col md={12} className="right">

<span>MONTH/YEAR</span>
</Col>
<Col md={6} className="right">
    <span>VALID/<br/>THRU</span>
    </Col>
    <Col md={6}>

    <span className="onze">
    {props.validuntil.split('')[0]}
    {props.validuntil.split('')[1]} 
    /
    {props.validuntil.split('')[2]}
    {props.validuntil.split('')[3]} 
    </span>
</Col>    
</Row>




    </div>
    )}
export default MonthYear 