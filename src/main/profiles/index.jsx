import React from 'react';
import './index.css';
import { ThemeProvider, Input } from '@material-ui/core';

class Profiles extends React.Component {

    render(){
        if(this.props.currentStep !== 2)
            return null;
    return (  
    <div>
        <Input placeholder="LinkedIn profile link" onChange={this.props.handleChange} name="linkedinLink" value={this.props.linkedinLink}/>
        <Input placeholder="Github profile link" name="githubLink" onChange={this.props.handleChange} value={this.props.githubLink}/>
    </div>
    )
}
}

export default Profiles;