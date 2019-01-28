import React from 'react'
import { ValidatorComponent } from 'react-form-validator-core';
import {FormControl,Col,Row,Grid} from 'react-bootstrap'

class Form extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state= {
            twelve_number:'',
            name:'',
            valid_until:''
        }
        this.handle_twelve_number = this.handle_twelve_number.bind(this)
        this.handle_name = this.handle_name.bind(this)
        this.handle_valid_until = this.handle_valid_until.bind(this)
    }
    handle_twelve_number(event)
    {
        this.setState(
            {
                twelve_number: event.target.value.split('').filter(e => isNaN(e) == false ).join('')
            }
        );
        this.props.get_twelve_number(event.target.value.split('').filter(e => isNaN(e) == false ).join(''))
    }
    handle_name(event)
    {
        this.setState({name: event.target.value.split('').filter(e => isNaN(e) == true ).join('').toUpperCase()});
        this.props.get_name(event.target.value.split('').filter(e => isNaN(e) == true ).join('').toUpperCase())
    } 
    handle_valid_until(event)
    {
        this.setState({valid_until: event.target.value.split('').filter(e => isNaN(e) == false ).join('')});      
        this.props.get_valid_until(event.target.value.split('').filter(e => isNaN(e) == false ).join(''))
    }
    render()
    {
        return(
            <React.Fragment>
            <Grid>
            <p>&nbsp;</p>
            <Row>
            <Col md={4}>
                 <FormControl
                type='text'
                id="twelve_number" 
                className='twelve_number'
                value={this.state.twelve_number}
                onChange={this.handle_twelve_number}
                maxLength='16'
                placeholder="set your card number"
                /> 
            </Col>
            <Col md={4}>
                 <FormControl 
                type='text'
                id="name" 
                className='name'
                value={this.state.name}
                onChange={this.handle_name}
                maxLength='20'
                placeholder="Please enter your name"
                /> 
            </Col>
            <Col md={4}>
                 <FormControl 
                type='text'
                id="valid_until" 
                className='valid_until'
                value={this.state.valid_until}
                onChange={this.handle_valid_until}
                maxLength='4'
                placeholder="Set the validation date"
                />
            </Col>
            </Row>
            </Grid>

            </React.Fragment>
        )
    }
}
export default Form 