import React, { Component } from 'react'
import SelectElement from './SelectElement'

export default function Filter() {
    let title = window.siteData.filter.title ? window.siteData.filter.title : "Search for: "
    let placeholder = window.siteData.filter.placeholder ? window.siteData.filter.placeholder : "Keywords"
    return (
        <div className="form-inline">
                <label htmlFor="searchField" className="mr-2 my-1 small">{title}</label>
                <input id="searchField" className="form-control form-control-sm mr-2 my-1" type="text" placeholder={placeholder} />
                <SelectElement defaultVal="Dropdown One" className="mr-2 my-1"/>
                <button type="reset" className="btn btn-danger my-1 btn-sm">Reset</button>
        </div>
    )
}
