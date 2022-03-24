import Loading from "../assets/Loading"

const Button = (props) => {
    return (
        <div className='flex justify-center sm:items-center'>
            <button
                disabled={props.loading}
                onClick={props.generateRandomMovie}
                type="button"
                style={{ background: props.color ? props.color + '80' : '#2f2f2f80' }}
                className={`inline-flex mb-2 mt-12 px-6 py-4 font-semibold leading-6 text-base shadow rounded-md text-white  button ${props.loading ? 'cursor-not-allowed' : ''}`}
            >
                {props.loading && <><Loading /> Generating...</>}
                {!props.loading && <>Generate</>}
            </button>
        </div>
    )
}

export default Button