import React, { Component } from 'react';
import logo from '../logo.svg';
import './Header.less'

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
            </div>
        )
    }
}