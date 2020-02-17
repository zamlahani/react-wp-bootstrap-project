import React, { Component } from 'react'
import { imgUrl } from '../variables'

export default function IconBlock(props) {
    let { title, info, icon, type } = props.detail
    return (
        <div className="col-lg-4 col-md-3 col-sm-4 text-center pb-3">
            <div className={`text-${type} mb-2`}>
                <i className={`${icon} fa-3x fa-fw`}></i>
            </div>
            <div className="text">
                <h3 className="h5">{title}</h3>
                {info}
            </div>
        </div>
    )
}
