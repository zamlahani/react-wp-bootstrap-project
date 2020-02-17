import React, { Component } from 'react'
import { imgUrl } from '../variables'

export default function HomeBanner() {
    let title = window.siteData.banner.title ? window.siteData.banner.title : "Search"
    let bannerImage = window.siteData.banner.image ? window.siteData.banner.image : `${imgUrl}banner.jpg`
    let bannerBgStyle = {
        background: `linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)), url("${bannerImage}")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }
    return (
        <div className="py-5" style={bannerBgStyle}>
            <div className="container">
                <h1 className="display-1 text-white">{title}</h1>
            </div>
        </div>
    )
}

