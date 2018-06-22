import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import './Home.less';
import Button from '../components/Button'


class Home extends Component {
    constructor(props) {
        super(props)
    }
    gotoList() {
        hashHistory.push('todolist')
    }
    render() {
        return (
            <div className="Home">
                <p className="App-intro">
                    To get started, edit <code>src/App.jsx</code> and save to reload.
                </p>
                <h3>
                    this is react App
                </h3>
                <div>
                    <Button text='跳转到ToDolist' click={() => this.gotoList()} />
                </div>
            </div>
        )
    }
}

export default Home;