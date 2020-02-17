import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { imgUrl } from '../variables'

export default class BlockItem extends Component {
    render() {
        return (
            <div className="blockitem px-3 pb-4">
                <div className={'card rounded-0 text-white'}>
                        
                    <img className="img-fluid" src={imgUrl + 'thumbnail.jpg'} alt="" />         
                    <div className={"card-body bg-" + this.props.color}>
                        <h3 className="title">
                            Title
                        </h3>
                        <div className="summary mb-3">
                            {sum[this.props.number]}
                        </div>
                        <div className="tags mb-2">
                            <a href="#" className="badge badge-dark">Tag One</a>&nbsp;
                            <a href="#" className="badge badge-dark">Tag Zwei</a>&nbsp;
                            <a href="#" className="badge badge-dark">Tag Three</a>&nbsp;
                            <a href="#" className="badge badge-dark">Dieses Tag hat einen langen Text</a> 
                        </div>
                        <Link className="btn btn-outline-light" to="/detail/">See details&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="far fa-chevron-right"></i></Link>
                    </div>
                </div>
            </div>
        )
    }
}

let sum = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
]