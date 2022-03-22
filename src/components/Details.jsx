import Parser from 'html-react-parser'

import Star from "../assets/Star"

const Details = (props) => {

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    const studios = props.details.studios?.map((studio) => {
        return studio.name
    })

    return (
        <div className='text-white lg:w-[40rem] xl:w-[56rem]'>
            <div className='sm:flex justify-between mb-6'>
                <div>
                    <h2 className='text-2xl text-center sm:text-left sm:text-3xl font-medium'>{props.details.titleEnglish || props.details.titleRomaji}</h2>
                    <h4 className='italic text-center sm:text-left'>{!props.details.titleEnglish || props.details.titleRomaji}</h4>
                    <h4 className='text-center sm:text-left'>{props.details.titleNative}</h4>
                </div>
                <div className='flex items-center justify-center mt-3 sm:mt-0'>
                    <p className='text-5xl font-medium mr-1'>{(props.details.score / 10).toFixed(1)} </p>
                    <Star />
                </div>
            </div>
            <div className='mb-2'>
                <strong className='font-medium'>Overview:</strong>
            </div>
            <div className=' mb-5 overflow-y-auto scrollbar'>
                <div className="max-h-[7.5rem] w-11/12 text-sm">
                    {Parser(props.details.description || '')}
                </div>
            </div>
            <div className="sm:flex justify-between">
                <div className='sm:max-w-[50%]'>
                    <div className='mb-1'>
                        <strong>Released:</strong> {months[props.details.month - 1]} {props.details.day}, {props.details.year}
                    </div>
                    <div>
                        <strong>Genres:</strong> {props.details.genres?.join(", ")}
                    </div>
                </div>
                <div className='sm:max-w-[50%]'>
                    <div className='mb-1'>
                        <strong>Duration:</strong> {props.details.duration} min
                    </div>
                    <div>
                        <strong>Studios:</strong> {studios?.join(", ")}
                    </div>
                </div>
            </div>
            <div className='h-20'>

            </div>

        </div>
    )
}

export default Details