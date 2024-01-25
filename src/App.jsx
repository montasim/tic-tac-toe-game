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

    const moves = history?.map((squares, move) => {
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

    function restartGame() {
        setHistory([Array(9)?.fill(null)]);
        setXIsNext(true);
        setCurrentMove(0);
    }

    return(
        <div className="bg-[#E4E4E4] min-w-screen min-h-screen flex items-center justify-center">
            <div className="max-w-[1200px] max-h-[200px] flex items-center justify-center p-4">
                <div className="mr-16">
                    <Board
                        xIsNext={xIsNext}
                        squares={currentSquares}
                        onPlay={handlePlay}/>
                </div>

                <div className="min-w-screen min-h-full flex flex-col items-center justify-between gap-6">
                    <p className="text-[#212121] text-2xl font-bold font-['Inter']">History</p>

                    <ol className="w-full border border-gray-400 p-1 text-lg">{moves}</ol>

                    <button
                        className="w-32 bg-[#212121] flex items-center justify-center rounded-md gap-[15px] text-[#EAEAEA] text-center text-xl font-bold font-['Inter']"
                        onClick={restartGame}
                    >
                        Restart
                    </button>
                </div>
            </div>
        </div>
    )
}
