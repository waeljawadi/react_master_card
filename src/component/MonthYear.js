import React from 'react'
import {Col,Grid,Row} from 'react-bootstrap'
import {onze} from '../component/Styles/MonthYear.css'
 
const MonthYear = () => {
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

    <span className="onze">11/50</span>
</Col>    
</Row>




    </div>
    )}
export default MonthYear 