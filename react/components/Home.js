import React, { Component } from 'react'
import {connect} from 'react-redux'
import Header from './Header'
import HomeBanner from './HomeBanner'
import WelcomeMessage from './WelcomeMessage'
import HomeMain from './HomeMain'
import {store} from '../Redaks.js'

class Home extends Component {
    render() {
        return (
            <div className="apphome">
                <Header />
                <HomeBanner />
                {!this.props.isWelcomeClosed&&<WelcomeMessage />}
                <HomeMain />
            </div>
        )
    }
}

function mapStateToProps(state) {
  const { isWelcomeClosed } = state
  return { isWelcomeClosed }
}

export default connect(mapStateToProps)(Home)