import React from "react";
import { ReactComponent as HeartIcon } from '../../../images/heart.svg';
import './heartbutton.css'



const HeartButton = ({likeCount}) => {
    return (
        <div className="heart-button">
            <HeartIcon />
            <p>{likeCount}</p>
        </div>
    );
}

export default HeartButton;
