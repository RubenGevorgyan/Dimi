import React from 'react';
import './index.css';
import { ThemeProvider, Input } from '@material-ui/core';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import ExperienceElements from '../utills/form'

class Experience extends React.Component {
    constructor(){
        super()
        this.state = {
            panels: [1]
        }
    }

    handleClick(event){
         const nextId = this.state.panels.length + 1
         this.setState({
              panels: this.state.panels.concat([nextId])
         })
    }
    render(){
        if(this.props.currentStep !== 3 )
            return null
        return(
           <div>
             <div className='panel-wrapper'>
              {
                this.state.panels.map((panelId) => (
                  <ExperienceElements  handleChange={this.handleChange} employerType="Work Experience" position = "Position" />
                )
              
        )
    }
        <Button onClick={this.handleClick.bind(this)}>Add new</Button>
    
    </div>
             </div>
        )}
}
export default Experience;