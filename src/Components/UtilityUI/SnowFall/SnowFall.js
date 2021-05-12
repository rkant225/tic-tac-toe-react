import React from 'react'
import './SnowFall.css'

const SnowFall = (props) => {
    const {reset} = props;

    const getRandomHexColor = () =>{
        return Math.floor(Math.random()*16777215).toString(16);
    }

    return (
        <div onClick={reset}>
            <ul className="bgg">
                <li className="snowflake" style={{color : `#${getRandomHexColor()}`}}>*</li>
                <li className="snowflake" style={{color : `#${getRandomHexColor()}`}}>*</li>
                <li className="snowflake" style={{color : `#${getRandomHexColor()}`}}>*</li>
                <li className="snowflake" style={{color : `#${getRandomHexColor()}`}}>*</li>
                <li className="snowflake" style={{color : `#${getRandomHexColor()}`}}>*</li>
                <li className="snowflake" style={{color : `#${getRandomHexColor()}`}}>*</li>
                <li className="snowflake" style={{color : `#${getRandomHexColor()}`}}>*</li>
                <li className="snowflake" style={{color : `#${getRandomHexColor()}`}}>*</li>
                <li className="snowflake" style={{color : `#${getRandomHexColor()}`}}>*</li>
                <li className="snowflake" style={{color : `#${getRandomHexColor()}`}}>*</li>
                <li className="snowflake" style={{color : `#${getRandomHexColor()}`}}>*</li>
                <li className="snowflake" style={{color : `#${getRandomHexColor()}`}}>*</li>
                <li className="snowflake" style={{color : `#${getRandomHexColor()}`}}>*</li>
                <li className="snowflake" style={{color : `#${getRandomHexColor()}`}}>*</li>
                <li className="snowflake" style={{color : `#${getRandomHexColor()}`}}>*</li>
                <li className="snowflake" style={{color : `#${getRandomHexColor()}`}}>*</li>
                <li className="snowflake" style={{color : `#${getRandomHexColor()}`}}>*</li>
                <li className="snowflake" style={{color : `#${getRandomHexColor()}`}}>*</li>
                <li className="snowflake" style={{color : `#${getRandomHexColor()}`}}>*</li>
                <li className="snowflake" style={{color : `#${getRandomHexColor()}`}}>*</li>
                <li className="snowflake" style={{color : `#${getRandomHexColor()}`}}>*</li>
                <li className="snowflake" style={{color : `#${getRandomHexColor()}`}}>*</li>
                <li className="snowflake" style={{color : `#${getRandomHexColor()}`}}>*</li>
                <li className="snowflake" style={{color : `#${getRandomHexColor()}`}}>*</li>
                <li className="snowflake" style={{color : `#${getRandomHexColor()}`}}>*</li>
                <li className="snowflake" style={{color : `#${getRandomHexColor()}`}}>*</li>
                <li className="snowflake" style={{color : `#${getRandomHexColor()}`}}>*</li>
                <li className="snowflake" style={{color : `#${getRandomHexColor()}`}}>*</li>
                <li className="snowflake" style={{color : `#${getRandomHexColor()}`}}>*</li>
                <li className="snowflake" style={{color : `#${getRandomHexColor()}`}}>*</li>
                <li className="snowflake" style={{color : `#${getRandomHexColor()}`}}>*</li>
                <li className="snowflake" style={{color : `#${getRandomHexColor()}`}}>*</li>
                <li className="snowflake" style={{color : `#${getRandomHexColor()}`}}>*</li>
                <li className="snowflake" style={{color : `#${getRandomHexColor()}`}}>*</li>
                <li className="snowflake" style={{color : `#${getRandomHexColor()}`}}>*</li>
                <li className="snowflake" style={{color : `#${getRandomHexColor()}`}}>*</li>
                <li className="snowflake" style={{color : `#${getRandomHexColor()}`}}>*</li>
                <li className="snowflake" style={{color : `#${getRandomHexColor()}`}}>*</li>
                <li className="snowflake" style={{color : `#${getRandomHexColor()}`}}>*</li>
                <li className="snowflake" style={{color : `#${getRandomHexColor()}`}}>*</li>
                <li className="snowflake" style={{color : `#${getRandomHexColor()}`}}>*</li>
                <li className="snowflake" style={{color : `#${getRandomHexColor()}`}}>*</li>
                <li className="snowflake" style={{color : `#${getRandomHexColor()}`}}>*</li>
                <li className="snowflake" style={{color : `#${getRandomHexColor()}`}}>*</li>
            </ul>

            <h2 style={{position : 'absolute', bottom : '0', right : '20px',}}>Click anywhere to play again</h2>
        </div>
    )
}

export default SnowFall;
