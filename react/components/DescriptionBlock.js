let content = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
]

import React from 'react'

const DescriptionBlock = (props) => {
    return (
        <div className="p-3">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">
                        Title
                    </h3>
                    <div className="card-text">
                        {content[props.number]}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DescriptionBlock