import React, { Component } from 'react'
import Filter from './Filter'
import BlockView from './BlockView'
import ListView from './ListView'

export default class HomeMain extends Component {
    constructor(props) {
        super(props)
        this.blockView = this.blockView.bind(this)
        this.listView = this.listView.bind(this)
        this.state = {
            isBlockView: true
        }
    }
    blockView() {
        this.setState({ isBlockView: true })
    }
    listView() {
        this.setState({ isBlockView: false })
    }
    render() {
        let byName = window.siteData.filter.sorting.name ? window.siteData.filter.sorting.name : "By Name"
        let byDate = window.siteData.filter.sorting.time ? window.siteData.filter.sorting.time : "By Date"
        let { isBlockView } = this.state
        return (
            <div className="main pt-4">
                <div className="container">
                    <Filter />
                    <div className="projects">
                        <div className="projectview">
                            <div className="viewButtons text-right pb-2">
                                <div className="btn-group">
                                    <button onClick={this.blockView} className={`btn btn-${isBlockView ? "" : "outline-"}primary btn-sm`}><i className="fas fa-th-large"></i><br /></button>
                                    <button onClick={this.listView} className={`btn btn-${!isBlockView ? "" : "outline-"}primary btn-sm`}><i className="fas fa-list"></i><br /></button>
                                </div>                            
                            </div>                            
                            {isBlockView ? <BlockView items={items} /> : <ListView items={items} />}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

let items = [0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1]