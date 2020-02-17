import React, { Component } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import ReactPlayer from 'react-player'
import { imgUrl, assetsUrl } from '../variables'

export default class DashboardCenterItem extends Component {
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
        let { type } = this.props
        let icon = type == "video" ? "fal fa-play-circle" : "far fa-eye"
        let placeholder = type == "video" ? "videoplaceholder.png" : "placeholder.png",
            externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.closeModal}>&times;</button>;
        return (
            <div className="col-lg-12 col-sm-6 py-3">
                <div className={type ? type : "image"}>
                    {
                        true
                            ?
                            <button onClick={this.openModal} className="overlay-parent">
                                <img className="img-fluid" src={imgUrl + 'thumbnail.jpg'} alt="" />
                                <div className="overlay overlay-onhover text-light">
                                    <i className={`${icon} fa-fw fa-2x`}></i>
                                </div>
                            </button>
                            :
                            <img src={imgUrl + placeholder} alt="" className="img-fluid" />
                    }
                </div>
                <Modal isOpen={this.state.isOpenModal} toggle={this.toggleModal} external={externalCloseBtn} size="lg" centered={true}>
                    <ModalBody>                        
                        {
                            type == 'video' ?
                                <div className='player-wrapper'>
                                    <ReactPlayer
                                        className='react-player'
                                        url={assetsUrl + 'videos/sample.mp4'}
                                        width='100%'
                                        height='100%'
                                        controls={true}
                                        playing={true}
                                    />
                                </div> : 
                            type == 'audio' ?
                                <ReactPlayer
                                    url={assetsUrl + 'audios/bpsample.mp3'}
                                    controls={true}
                                    playing={true}
                                    height='55px'
                                    width='100%'
                                /> :
                            <img src={imgUrl + 'thumbnail.jpg'} alt="" className="img-fluid" />
                        }
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}
