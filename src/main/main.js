import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import theme from '../theme.js'
import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Personal from './personal'
import Profiles from './profiles'
import Experience from './experience'
import Education from './education';
import Skills from './skills'
import Language from './languages';

class Main extends React.Component {
    constructor(props) {
        super(props)
        // Set the initial input values
        this.state = JSON.parse(localStorage.getItem("saved")) || {
            currentStep: 0,
        }
        // Bind the submission to handleChange() 
        this.handleChange = this.handleChange.bind(this)
        this._next = this._next.bind(this)
        this._prev = this._prev.bind(this)
    }

    // Use the submitted data to set the state
    handleChange(event) {
        debugger
        const { name, value } = event.target || event
        this.setState({
            [name]: value
        })
        localStorage.setItem("saved", JSON.stringify(this.state))
    }

    _next() {
        let currentStep = this.state.currentStep
        
        debugger
        currentStep = currentStep >= 4 ? 6 : currentStep + 1
        this.setState({
            currentStep: currentStep
        })
        localStorage.setItem("saved", JSON.stringify(this.state))
    }

    _prev() {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1 ? 0 : currentStep - 1
        this.setState({
            currentStep: currentStep
        })
        localStorage.setItem("saved", JSON.stringify(this.state))
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Card className='main'>
                    <div id='main-element'><p className="welcome">PArev arev </p>
                        <Button className="logIn">Log in with Zeal</Button >
                        <Button onClick={this._next} className="notLogIn"> Continue without logging in</Button ></div>
                    <Personal
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        email={this.state.email}
                        name={this.state.name}
                        surname={this.state.surname}
                        phone={this.state.phone}
                        sex={this.state.sex}
                        adress={this.state.adress} />
                    <Profiles
                        currentStep={this.state.currentStep}
                        linkedinLink={this.state.linkedinLink}
                        githubLink={this.state.githubLink}
                        handleChange={this.handleChange}
                    />
                    <Experience
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                    />
                    <Education
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                    />
                    <Skills
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                    />
                    <Language
                    currentStep={this.state.currentStep}
                    handleChange={this.handleChange}
                    />
                    <Button onClick={this._prev}>Previous page</Button>
                    <Button onClick={this._next}>Next page</Button>
                </Card>
            </ThemeProvider>
        );
    }
}

export default Main;
