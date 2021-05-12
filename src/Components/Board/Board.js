import React from 'react'
import Block from '../Block/Block'

const Board = (props) => {
    const {boardData, updateBoardData} = props;

    return (
        <div>
            <div className="row">
                <Block position={0} boardData={boardData} updateBoardData={updateBoardData}/>
                <Block position={1} boardData={boardData} updateBoardData={updateBoardData}/>
                <Block position={2} boardData={boardData} updateBoardData={updateBoardData}/>
            </div>
            <div className="row">
                <Block position={3} boardData={boardData} updateBoardData={updateBoardData}/>
                <Block position={4} boardData={boardData} updateBoardData={updateBoardData}/>
                <Block position={5} boardData={boardData} updateBoardData={updateBoardData}/>
            </div>
            <div className="row">
                <Block position={6} boardData={boardData} updateBoardData={updateBoardData}/>
                <Block position={7} boardData={boardData} updateBoardData={updateBoardData}/>
                <Block position={8} boardData={boardData} updateBoardData={updateBoardData}/>
            </div>
        </div>
    )
}

export default Board;
