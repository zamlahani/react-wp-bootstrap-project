import React, { Component } from 'react'
import { imgUrl } from '../variables'

export default function RoundPhoto() {
    return (
        <a href="mailto:zamlahani@gmail.com" className="col-lg-6 col-sm-3 col-6 py-3">
            <img className="rounded-circle img-fluid" src={imgUrl + 'johndoe.png'} alt="" />
        </a>
    )
}
