import React from 'react'

const Block = (props) => {
    const {boardData, updateBoardData, position} = props;
    return (
        <div className="block" onClick={()=>{updateBoardData(position)}}>
            {boardData[position]}
        </div>
    )
}

export default Block;
