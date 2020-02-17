import React, { Component } from 'react'
import { Modal, ModalBody } from 'reactstrap'
import ReactPlayer from 'react-player'
import DescriptionBlock from './DescriptionBlock'
import Columned from 'react-columned'
import {assetsUrl} from '../variables'

export default class Description extends Component {
    constructor(props) {
        super(props)
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.toggleModal = this.toggleModal.bind(this)
        this.state = {
            isOpenModal: false
        }
    }
    openModal() {
        this.setState({ isOpenModal: true })
    }
    closeModal() {
        this.setState({ isOpenModal: false })
    }
    toggleModal() {
        this.setState((state)=>({isOpenModal:!state.isOpenModal}))
    }
    render() {
        let externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.closeModal}>&times;</button>;
        return (
            <div className="bg-light py-4">
                <div className="container">
                    <div className="d-flex justify-content-between mb-3">
                        <div className="">
                            <h2 className="title">Title is Quite Long Actually</h2>
                        </div>
                        <div className="">
                            <button className="btn btn-primary" onClick={this.openModal}>
                                <span className="label">Listen</span>&nbsp;
                                <span className="icon"><i className="fal fa-volume"></i></span>
                            </button>
                            <Modal isOpen={this.state.isOpenModal} toggle={this.toggleModal} external={externalCloseBtn} size="lg" centered={true}>
                                <ModalBody>   
                                    <ReactPlayer
                                        url={assetsUrl + 'audios/bpsample.mp3'}
                                        controls={true}
                                        playing={true}
                                        height='55px'
                                        width='100%'
                                    />
                                </ModalBody>
                            </Modal>
                        </div>
                    </div>
                    <div className="mx-n3">
                        <Columned columns={columns}>
                            <DescriptionBlock number={0} />
                            <DescriptionBlock number={1} />
                            <DescriptionBlock number={0} />
                            <DescriptionBlock number={1} />
                        </Columned>
                    </div>
                </div>
            </div>
        )
    }
}


let columns = {
    "640": 1,
    "991": 2,
    "1920": 4
}