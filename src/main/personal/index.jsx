import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Input from '@material-ui/core/Input'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'


class Personal extends React.Component{
    
    render(){
        if(this.props.currentStep !== 1)
            return null;
    return (  
    <div>
        <div>
        <Input value={this.props.name} name="name" onChange={this.props.handleChange} placeholder="Your name"></Input>
        <Input name="surname" value={this.props.surname} onChange={this.props.handleChange} placeholder="Your surname"></Input>
        </div>
        <FormControl>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select labelId="demo-simple-select-label" onChange={this.props.handleChange} name="sex" id="personal-info-sex">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </Select>
        </FormControl>
        <Input value={this.props.adress} onChange={this.props.handleChange} name="adress" placeholder="Your address"></Input>
        <div>
        <Input value={this.props.phone} onChange={this.props.handleChange} name="phone" placeholder="Your Phone number"></Input>
        
        <Input value={this.props.email} onChange={this.props.handleChange} name="email" placeholder="Your Email"></Input>
        </div>
    </div>
)
}
}
export default Personal;