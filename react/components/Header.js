import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Img from 'react-image'
import { imgUrl } from '../variables'

export default function Header() {
    let name = window.siteData.user_data.display_name ? window.siteData.user_data.display_name : "My Name"
    return (
        <div className="navbar sticky-top navbar-dark bg-primary">
            <div className="left">
                <div className="text-center">
                    <div className="avatar">
                        <Img src={[window.siteData.user_data.avatar, imgUrl + "avatar.png"]} width="30" height="30" className="rounded-circle"/>
                    </div>
                    <div className="text-white small">{name}</div>
                </div>
            </div>
            <div>
                <Link to="/" className="navbar-brand">
                    The Archive
                </Link>
            </div>
            <div className="right">
                &nbsp;
            </div>
        </div>
    )
}
