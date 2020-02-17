import React, { Component } from 'react'

var timeOut

export default class Progress extends Component {
    constructor(props) {
        super(props)
        this.state = {
            width: 0
        }
    }

    componentDidMount() {
        this.setState({width:this.props.percentage})
    }

    render() {
        return (
            <div className="progress rounded-0" style={{height:'20px'}}>
                <div className="progress-bar" style={{ width: `${this.state.width}%` }}>This thing is {this.props.percentage}% complete.</div>
            </div>
        )
    }
}
