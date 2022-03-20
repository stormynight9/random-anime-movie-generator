import Parser from 'html-react-parser'
import ShowMoreText from "react-show-more-text";
const Card = (props) => {
    let studios = props.detail.studios?.map((studio) => {
        return studio.name
    })

    return (
        <div>

            <div className="flex flex-row">
                <div>
                    <img src={props.detail.coverImage} alt="" />
                </div>
                <div>
                    <div className="flex justify-between">
                        <div>
                            <h2>{props.detail.titleEnglish}</h2>
                            <h4>{props.detail.titleRomaji}</h4>
                            <h4>{props.detail.titleNative}</h4>
                        </div>
                        <div>
                            <p>{(props.detail.score / 10).toFixed(1)} Stars</p>
                        </div>
                    </div>
                    <div>
                        <strong>Overview:</strong>
                    </div>
                    <div className="max-w-lg">
                        <ShowMoreText
                            lines={5}
                            more="Show more"
                            less="Show less"
                            className=""
                            anchorClass="bg-green-400"
                            expanded={props.expand}
                            width={512}
                            truncatedEndingComponent={"... "}
                        >
                            {Parser(props.detail.description ? props.detail.description : '')}
                        </ShowMoreText>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <div>
                                Released: {props.detail.day}/{props.detail.month}/{props.detail.year}
                            </div>
                            <div>
                                Genres: {props.detail.genres?.join(", ")}
                            </div>
                        </div>
                        <div>
                            <div>
                                {Math.floor(props.detail.duration / 60)}h{props.detail.duration % 60} min
                            </div>
                            <div>
                                Studio: {studios?.join(", ")}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Card