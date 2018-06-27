import React , { Component } from 'react';
import Clock from './Clock.jsx'
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component{
    constructor (props)
    {
        super(props);
        this.state={
            deadline:'December 25, 2018',
            newDeadline: ''
        }
    }

    changeDate()
    {
        this.setState({deadline:this.state.newDeadline});
    }
    render()
    {
        return (
        <div className="App">
            <div className="App-title">Contagem regressiva para {this.state.deadline}!!!</div>
            <Clock
            deadline = { this.state.deadline }/>
            <Form inline={true}>
                <FormControl type="text" placeholder="New date" onChange= { event => this.setState({newDeadline:event.target.value})}/>
                <Button onClick={() => this.changeDate()}>Novo botão</Button>
            </Form>
        </div>
    );
    }
};

export default App;