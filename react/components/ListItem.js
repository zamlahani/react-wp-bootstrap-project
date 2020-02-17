import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ClampLines from 'react-clamp-lines';
import { imgUrl } from '../variables'

export default class ListItem extends Component {
    render() {
        return (
            <div className={"row no-gutters mb-3 bg-"+this.props.color}>
                <div className="col-md-6 col-lg-4">
                    <img className="img-fluid" src={imgUrl + 'thumbnail.jpg'} alt="" />
                </div>
                <div className={`col-md-6 col-lg-8 text-white p-3`}>
                    <div className="inner">
                        <h3 className="title">
                            Title {this.props.index}
                        </h3>
                        <div className="description">
                            <ClampLines text={sum[this.props.number]} lines={2} buttons={false} />
                        </div>
                        <div className="buttons">
                            <div className="tags mb-2">
                                <a href="#" className="badge badge-dark">Tag One</a>&nbsp;
                                <a href="#" className="badge badge-dark">Tag Zwei</a>&nbsp;
                                <a href="#" className="badge badge-dark">Tag Three</a>&nbsp;
                                <a href="#" className="badge badge-dark">Dieses Tag hat einen langen Text</a> 
                            </div>
                            <div className="detaillink">
                                <Link className="btn btn-light" to="/detail/"><span>See details&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><i className="far fa-chevron-right"></i></Link>
                            </div>
                        </div>
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