import React, { useCallback, useEffect, useState } from 'react'
import Board from '../Board/Board';
import SnowFall from '../UtilityUI/SnowFall/SnowFall'

const Game = (props) => {
    const [isXTurn, updateIsXTurn] = useState(true);
    const [boardData, updateBoardData] = useState({});
    const [winner, updateWinner] = useState("");

    // Board
    // 0    1   2
    // 3    4   5
    // 6    7   8

    const decideWinner = useCallback(()=>{
        // X
        if(boardData[0] === 'X' && boardData[1] === 'X' && boardData[2] === 'X'){
            updateWinner('X')
        }
        if(boardData[3] === 'X' && boardData[4] === 'X' && boardData[5] === 'X'){
            updateWinner('X')
        }
        if(boardData[6] === 'X' && boardData[7] === 'X' && boardData[8] === 'X'){
            updateWinner('X')
        }

        if(boardData[0] === 'X' && boardData[3] === 'X' && boardData[6] === 'X'){
            updateWinner('X')
        }
        if(boardData[1] === 'X' && boardData[4] === 'X' && boardData[7] === 'X'){
            updateWinner('X')
        }
        if(boardData[2] === 'X' && boardData[5] === 'X' && boardData[8] === 'X'){
            updateWinner('X')
        }

        if(boardData[0] === 'X' && boardData[4] === 'X' && boardData[8] === 'X'){
            updateWinner('X')
        }
        if(boardData[2] === 'X' && boardData[4] === 'X' && boardData[6] === 'X'){
            updateWinner('X')
        }

        // O
        if(boardData[0] === 'O' && boardData[1] === 'O' && boardData[2] === 'O'){
            updateWinner('O')
        }
        if(boardData[3] === 'O' && boardData[4] === 'O' && boardData[5] === 'O'){
            updateWinner('O')
        }
        if(boardData[6] === 'O' && boardData[7] === 'O' && boardData[8] === 'O'){
            updateWinner('O')
        }

        if(boardData[0] === 'O' && boardData[3] === 'O' && boardData[6] === 'O'){
            updateWinner('O')
        }
        if(boardData[1] === 'O' && boardData[4] === 'O' && boardData[7] === 'O'){
            updateWinner('O')
        }
        if(boardData[2] === 'O' && boardData[5] === 'O' && boardData[8] === 'O'){
            updateWinner('O')
        }

        if(boardData[0] === 'O' && boardData[4] === 'O' && boardData[8] === 'O'){
            updateWinner('O')
        }
        if(boardData[2] === 'O' && boardData[4] === 'O' && boardData[6] === 'O'){
            updateWinner('O')
        }

    }, [boardData])

    useEffect(()=>{
        decideWinner();
    }, [decideWinner]);

    const handleBlockClickEvent = (position) =>{
        console.log('Called')
        if(!boardData[position] && !winner){
            const updatedBoardData = {...boardData};
            const value = isXTurn ? 'X' : 'O';
            updatedBoardData[position] = value;
            updateBoardData(updatedBoardData);
            updateIsXTurn(!isXTurn);
        }
    }

    const reset = () =>{
        updateWinner("");
        updateIsXTurn(true);
        updateBoardData({});
    }

    return (
        <>
            <div style={{display : 'flex', justifyContent : 'space-between', alignItems : 'center', width : '100%', marginBottom : '2rem'}}>
                <h1>Tic-Tac-Toe</h1>
                {!winner && <button onClick={reset}>Reset</button>}
            </div>

            <div style={{display : 'flex',  justifyContent : 'space-around', alignItems : 'center', flexWrap : 'wrap', width : '100%' }}>
                <div>
                    <Board boardData={boardData} updateBoardData={handleBlockClickEvent}/>
                </div>
                { winner && 
                    <div>
                        <h1 style={{border : '1px solid white', padding : '1rem', marginTop : '10px'}}>Winner : {winner}</h1>
                    </div>
                }
            </div>
                
            {winner && <SnowFall reset={reset}/>}
            
        </>
    )
}

export default Game;
