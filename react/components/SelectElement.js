import React, { Component } from 'react'

export default class SelectElement extends Component {
    render() {
        let { defaultVal, options } = this.props
        let selectClass = `form-control form-control-sm ${this.props.className}`
        let optionElements = options && options.length > 0 ? options.map((val, i, arr) => (<option key={i} value={val.value}>{val.label}</option>)) : []
        return (
            <select onChange={() => console.log("ok")} value="" className={selectClass}>
                <option value="" disabled>{defaultVal}</option>
                {optionElements}
                <option value="1">1</option>
                <option value="2">This is a very long sentence that is an option of a select element</option>
            </select>
        )
    }
}
