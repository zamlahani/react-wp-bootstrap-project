import React, { Component } from 'react'
import IconBlock from './IconBlock'
import { imgUrl } from '../variables'
import RoundPhoto from './RoundPhoto'
import DashboardCenterItem from './DashboardCenterItem'
import DownloadButton from './DownloadButton'

export default class Dashboard extends Component {
    render() {
        let IconBlocks = blocks.map((val, i, arr) => (<IconBlock key={i} detail={val} />))
        return (
            <div className="dashboard py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h2 className="mb-3">Detail Informations</h2>
                            <div className="row">
                                {IconBlocks}
                            </div>
                            <div className="downloads">
                                <h3>Downloads</h3>
                                <DownloadButton />&nbsp;
                                <DownloadButton />&nbsp;
                                <a className="btn btn-outline-primary" href="">External link&nbsp;<i className="far fa-chevron-right"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="row">
                                <DashboardCenterItem type="image" />
                                <DashboardCenterItem type="video" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <h3 className="title">Any Questions?</h3>
                            <div className="row">
                                <RoundPhoto />
                                <RoundPhoto />
                                <RoundPhoto />
                                <RoundPhoto />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

let blocks = [
    {
        title: 'Warning',
        info: 'Used to give warnings',
        icon: 'fal fa-exclamation-triangle',
        type: 'warning',
    },
    {
        title: 'Success',
        info: 'Tell user if an action succeeded',
        icon: 'fal fa-shield-check',
        type: 'success',
    },
    {
        title: 'Danger',
        info: 'Tell user if the action failed',
        icon: 'fal fa-exclamation-circle',
        type: 'danger',
    },
]