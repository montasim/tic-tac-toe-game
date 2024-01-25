/*
   Game
    -> Board
        -> Square
    -> Hostory
*/
import { useState } from "react";
import Board from "./components/Board.jsx";

export default function Game() {
    const [history, setHistory] = useState([Array(9)?.fill(null)]);
    const [xIsNext, setXIsNext] = useState(true);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        setXIsNext(!xIsNext);

        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]

        setHistory(nextHistory);
        setCurrentMove(nextHistory.length -1);
    }

    function jumpTo(move) {
        setCurrentMove(move);
        setXIsNext(move % 2 === 0);
    }

    const moves = history.map((squares, move) => {
        let description;

        if( move > 0 ) {
            description = `Go to the move # ${move}`;
        } else {
            description = `Go to start the game`;
        }

        return(
            <li
                key={move}
                className="bg-gray-700 text-white mb-1 p-1 rounded-sm">
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        )
    })

    return(
        <div className="flex justify-center p-4">
            <div className="mr-16">
                <Board
                    xIsNext={xIsNext}
                    squares={currentSquares}
                    onPlay={handlePlay}/>
            </div>

            <div>
                <ol className="border border-gray-400 p-1 text-lg">{ moves }</ol>
            </div>
        </div>
    )
}
