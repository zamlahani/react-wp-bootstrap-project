import React, { Component } from 'react'
import {closeWelcome} from '../Redaks.js'

export default function WelcomeMessage() {
    let title = window.siteData.welcome.title ? window.siteData.welcome.title : "Welcome"
    let content = window.siteData.welcome.content ? window.siteData.welcome.content : "orem ipsum dolor sit amet, consectetur adipiscing elit. Nunc facilisis consequat velit porttitor pulvinar. Phasellus nec semper libero."
    return (
    	<div>
            <button type="button" className="close m-3" aria-label="Close" onClick={closeWelcome}>
			  <span aria-hidden="true">&times;</span>
			</button>
	        <div className="jumbotron jumbotron-fluid mb-0">
		        <div className="container">
		            <h2 className="">{title}</h2>
		            <div className="lead" dangerouslySetInnerHTML={{ __html: content }}></div>
				</div>
	        </div>
        </div>
    )
}

