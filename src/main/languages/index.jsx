import React from 'react';
import './index.css';
import { ThemeProvider, Input } from '@material-ui/core';
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import data from '../utills/languages.json'

class Language extends React.Component {
    constructor() {
        super()
        this.state = {
            panels: [1]
        }
    }

    handleClick(event) {
        const nextId = this.state.panels.length + 1
        this.setState({
            panels: this.state.panels.concat([nextId])
        })
    }
    render() {
        if (this.props.currentStep !== 6)
            return null;
        return(
            <div>
               

                    {
                        this.state.panels.map((panelId) => (
                            <Card>
                                <FormControl>
                                <InputLabel id="language">Language</InputLabel>
                            <Select id="language" style= {{width:"100px"}}  placeholder = "Language" onChange={this.props.handleChange} name="sex" id="personal-info-sex">
                                {
                                    data.map((data) => {
                                        return (<option value={data.code}>{data.name}</option>)
                                    })
                                }
                            </Select>
                            </FormControl>
                            <FormControl>
                                <InputLabel id="profficiency">Profficiency</InputLabel>
                            <Select  id="profficiency" style= {{width:"100px"}}  placeholder="Profficiency" onChange={this.props.handleChange} name="sex" id="personal-info-sex">
                            <option value="0">Beginner</option>
                            <option value="1">Intermediate</option>
                            <option value="2">Advanced</option>
                            </Select>
                            </FormControl>
                            </Card>
                        )
                        )
                    }
                <Button onClick={this.handleClick.bind(this)}>Add new</Button>
            </div>
        )
    }
}
export default Language;