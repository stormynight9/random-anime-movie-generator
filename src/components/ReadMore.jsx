import React, { useState } from "react";

const ReadMore = (props) => {
    const text = props.children;
    const toggleReadMore = () => {
        props.setIsReadMore(!props.isReadMore);
    };

    let content = <p className="text">
        {text}
    </p>

    if (text?.length > 150) {
        content = <p className="text">
            {props.isReadMore ? text.slice(0, 150) : text}
            <span onClick={toggleReadMore} className="read-or-hide">
                {props.isReadMore ? "...read more" : " show less"}
            </span>
        </p>
    }

    return (
        <>
            {content}
        </>
    );
};

export default ReadMore
