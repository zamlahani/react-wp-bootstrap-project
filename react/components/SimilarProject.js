import React, { Component } from 'react'
import { imgUrl } from '../variables'

export default function SimilarProject() {
    return (
        <div className="overlay-parent">
            <div className="background">
                <img src={imgUrl + 'squarebg.jpg'} className="img-fluid w-100" />
            </div>
            <div className="overlay p-3">
                <div className="text-center">
                    <div className="titles">
                        <h4 className="title">All is Well</h4>
                        <div className="subtitle">Three Idiots</div>
                    </div>
                    <div className="footer">Aamir Khan</div>
                </div>
            </div>
            <div className="overlay overlay-slideup bg-primary p-3">
                <div className="text-center">
                    <div className="h6">
                        A Trained Lion Is Not An Educated Lion
                    </div>
                    <div className="mb-2">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </div>
                    <div className="buttonwrapper">
                        <button className="btn btn-outline-dark">See details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

