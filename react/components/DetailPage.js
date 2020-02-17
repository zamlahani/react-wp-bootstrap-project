import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import { imgUrl } from '../variables'
import Progress from './Progress'
import Dashboard from './Dashboard'
import Description from './Description'
import SimilarProject from './SimilarProject'

export default class DetailPage extends Component {
    render() {
        return (
            <div className="detail">
                <Header />
                <div className="banner py-5" style={{ background: `url("${imgUrl}banner.jpg")`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                    <div className="container">
                    <h1 className="display-1">Detail Page</h1>
                    </div>
                </div>
                <Progress percentage={60} />
                <Dashboard />
                <Description />
                <div className="similar py-4">
                    <div className="container">
                        <h2 className="title mb-3">
                            Related Items
                        </h2>
                        <div className="row no-gutters">
                            <Link to="#" className="col-sm-6 col-lg-3 text-white"><SimilarProject /></Link>
                            <Link to="#" className="col-sm-6 col-lg-3 text-white"><SimilarProject /></Link>
                            <Link to="#" className="col-sm-6 col-lg-3 text-white"><SimilarProject /></Link>
                            <Link to="#" className="col-sm-6 col-lg-3 text-white"><SimilarProject /></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
