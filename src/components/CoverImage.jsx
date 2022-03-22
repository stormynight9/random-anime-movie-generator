
const CoverImage = (props) => {
    return (
        <div className="flex justify-center items-center m-4 sm:mt-0">
            <div className="w-40 sm:w-64 lg:w-80  flex">
                <img className="shadow-xxl w-full" src={props.coverImage} alt={props.title} />
            </div>
        </div>
    )
}

export default CoverImage