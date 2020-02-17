import React, { Component } from 'react'
import LazyLoad from 'react-lazyload'
import ListItem from './ListItem'

export default class ListView extends Component {
    render() {
        let ListItems = this.props.items.map((val, i, arr) => {
            return (
                <LazyLoad key={i} offset={100}>
                    <ListItem number={val} color={patternColor[i % 9]} index={i}/>
                </LazyLoad>
            )
        })
        return (
            <div className="listview">
                {ListItems}
            </div>
        )
    }
}

let pattern = [0, 1, 0, 1, 1, 0, 1, 0, 1]

let colors = ['primary', 'secondary']

let patternColor = pattern.map((val, i, arr) => (colors[val]))