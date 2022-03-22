import { useState } from 'react';
import ModalVideo from 'react-modal-video'
import 'react-modal-video/scss/modal-video.scss';



const VideoModal = (props) => {

    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <button className='text-white underline italic' onClick={() => setOpen(true)}>Watch trailer</button>
            <ModalVideo channel='youtube' animationSpeed={100} autoplay isOpen={isOpen} videoId={props.id} onClose={() => setOpen(false)} />
        </>
    )
}

export default VideoModal