import React, { Component } from 'react';

export default class Button extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { text, click } = this.props
        return (
            <div >
                <button style={{ cursor: 'pointer' }} onClick={click}>{text}</button>
            </div>
        )
    }
}

