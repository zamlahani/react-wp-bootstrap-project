import React, { Component } from 'react'
import Columned from "react-columned"
import LazyLoad from 'react-lazyload'
import BlockItem from './BlockItem'

export default class BlockView extends Component {
    render() {
        let BlockItems = this.props.items.map((val, i, arr) => {
            return (
                <LazyLoad key={i}>
                    <BlockItem number={val} color={patternColor[i % 2]} />
                </LazyLoad>
            )
        })
        return (
            <div className="blockview mx-n3">
                <Columned columns={columns}>
                    {BlockItems}
                </Columned>
            </div>
        )
    }
}

let pattern = [0, 1]

let colors = ['primary', 'secondary']

let patternColor = pattern.map((val, i, arr) => (colors[val]))

let columns = {
    "640": 1,
    "991": 2,
    "1920": 3
}