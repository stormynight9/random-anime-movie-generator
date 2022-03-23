import Parser from 'html-react-parser'

import Star from '../assets/Star'
import Trailer from '../assets/Trailer'
import VideoModal from './VideoModal'

const Details = (props) => {

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const studios = props.details.studios?.map((studio) => {
        return studio.name
    })

    return (
        <div className='text-white lg:w-[40rem] xl:w-[56rem]'>
            <div className='flex flex-col justify-between mb-6'>
                <div>
                    <h1 className='text-2xl text-center md:text-left md:text-3xl font-medium'>{props.details.titleEnglish || props.details.titleRomaji}</h1>
                    <h2 className='italic text-center md:text-left'>{!props.details.titleEnglish || props.details.titleRomaji}</h2>
                    <h3 className='text-center md:text-left'>{props.details.titleNative}</h3>
                </div>
                <div className='flex items-center justify-around md:justify-start mt-3 '>
                    {props.details.rank && <div className='flex md:mr-7 items-center text-sm justify-center mt-3 sm:mt-0'>
                        #{props.details.rank}
                    </div>}
                    {props.details.trailerId && <div className='flex md:mr-7 items-center justify-center mt-3 sm:mt-0'>
                        <VideoModal id={props.details.trailerId} />
                    </div>}
                    <div className='flex items-center justify-center md:mr-7 mt-3 sm:mt-0'>
                        <p className='text-sm mr-1'>{(props.details.score / 10).toFixed(1)} </p>
                        <Star />
                    </div>
                    <div className='flex items-center text-sm md:mr-7 justify-center mt-3 sm:mt-0'>
                        {props.details.duration} min
                    </div>
                </div>
            </div>
            <div className='mb-2'>
                <strong className='font-medium'>Overview:</strong>
            </div>
            <div className=' mb-5 overflow-y-auto scrollbar'>
                <div className='max-h-[7.5rem] w-11/12 text-sm'>
                    {Parser(props.details.description || '')}
                </div>
            </div>
            <div className='sm:flex justify-between'>
                <div className='sm:max-w-[50%]'>
                    <div className='mb-1'>
                        <strong>Released:</strong> {months[props.details.month - 1]} {props.details.day}, {props.details.year}
                    </div>
                    <div className='mb-1'>
                        <strong>Genres:</strong> {props.details.genres?.join(', ')}
                    </div>
                </div>
                <div className='sm:max-w-[50%]'>

                    <div>
                        <strong>Studios:</strong> {studios?.join(', ')}
                    </div>
                </div>
            </div>
            <div className='h-20'>
            </div>

        </div>
    )
}

export default Details