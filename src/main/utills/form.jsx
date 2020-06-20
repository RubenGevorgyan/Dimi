import React from 'react';
import { ThemeProvider, Input } from '@material-ui/core';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'

class ExperienceElements extends React.Component {
    render(){
        return(
        <Card>
                <div>
                    <div>
                    <Input placeholder={this.props.employerType} onChange={this.props.handleChange} name="experienceWorkName" value={this.props.experienceName} />
                    <Input placeholder={this.props.position} onChange={this.props.handleChange} name="positionName" value={this.props.positionName} />
                    </div>
                    <div>
                        <TextField
                            id="date"
                            label="Start Date"
                            type="date"
                            defaultValue="2017-05-24"
                        />
                        <TextField
                            id="date"
                            label="End Date"
                            type="date"
                            defaultValue="2017-05-24"
                        />
                    </div>
                    <TextField placeholder="Description" onChange={this.props.handleChange} name = "description" value = {this.props.description}></TextField>
                </div>
            </Card>)
            
    }
}
export default ExperienceElements 