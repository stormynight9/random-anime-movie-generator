import Parser from 'html-react-parser'
import ShowMoreText from "react-show-more-text";
import { AiFillStar } from 'react-icons/ai';
const Card = (props) => {
    let studios = props.detail.studios?.map((studio) => {
        return studio.name
    })

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']


    return (
        <div className="flex items-center justify-center max-w-5xl text-white" >


            <div className="flex items-center">

                <div className='w-60'>
                    <img className='shadow-xxl bg-auto' src={props.detail.coverImage} alt="" />
                </div>
                <div className={`gradient h-auto w-auto blur-sm absolute bg-cover bg-center top-0 left-0 right-0 bottom-0 -z-10 ${props.detail.color ? `bg-[${props.detail.color}]` : 'bg-black'}`} style={{ backgroundImage: `url(${props.detail?.bannerImage})` }}></div>
                <div className='max-w-3xl ml-10'>
                    <div className="flex justify-between mb-6">

                        <div>
                            <h2 className='text-3xl font-medium'>{props.detail.titleEnglish || props.detail.titleRomaji}</h2>
                            <h4 className='italic'>{!props.detail.titleEnglish || props.detail.titleRomaji}</h4>
                            <h4>{props.detail.titleNative}</h4>
                        </div>
                        <div className='flex items-center ml-4  justify-center'>
                            <div className='flex items-center justify-center'>
                                <p className='text-5xl font-medium mr-1'>{(props.detail.score / 10).toFixed(1)} </p>
                                <AiFillStar className='fill-yellow-500 text-5xl' />
                            </div>

                        </div>
                    </div>
                    <div className='mb-2'>
                        <strong className='font-medium'>Overview:</strong>
                    </div>
                    <div className="mb-5 w-full">
                        <ShowMoreText
                            more="Show more"
                            less="Show less"
                            className="text-sm"
                            anchorClass={`${props.detail.color}`}
                            expanded={props.expand}
                            truncatedEndingComponent={"... "}
                        >
                            {Parser(props.detail.description ? props.detail.description : '')}
                        </ShowMoreText>
                    </div>
                    <div className="flex justify-between">
                        <div className='max-w-[50%]'>
                            <div className='mb-1'>
                                <strong>Released:</strong> {months[props.detail.month - 1]} {props.detail.day}, {props.detail.year}
                            </div>
                            <div>
                                <strong>Genres:</strong> {props.detail.genres?.join(", ")}
                            </div>
                        </div>
                        <div className='max-w-[50%]'>
                            <div className='mb-1'>
                                <strong>Duration:</strong> {props.detail.duration} min
                            </div>
                            <div>
                                <strong>Studios:</strong> {studios?.join(", ")}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div >
    )
}

export default Card