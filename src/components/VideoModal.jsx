import { useState } from 'react';
import ModalVideo from 'react-modal-video'
import 'react-modal-video/scss/modal-video.scss';
import Trailer from '../assets/Trailer';



const VideoModal = (props) => {

    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <button className='inline-flex text-white ml-1 text-sm' onClick={() => setOpen(true)}><Trailer /> Trailer</button>
            <ModalVideo channel='youtube' animationSpeed={100} autoplay isOpen={isOpen} videoId={props.id} onClose={() => setOpen(false)} />
        </>
    )
}

export default VideoModal