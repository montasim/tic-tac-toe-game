import Square from "./Square.jsx";
import calculateWinner from "../helpers/calculateWinner.js";

export default function Board({xIsNext, squares, onPlay}) {
    const winner = calculateWinner(squares);
    let status;

    if(winner) {
        status = `Winner: ${winner}`;
    } else {
        status = "Next Player " + (xIsNext ? "X" : "O");
    }

    function handClick(i) {
        if(squares[i] || calculateWinner(squares)) {
            return;
        }

        const nextSquares = squares?.slice();

        if(xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }

        onPlay(nextSquares);
    }

    return (
        <>
            <div>{status}</div>

            <div className="flex">
                <Square value={squares[0]} onSquareClick={() => handClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handClick(2)} />
            </div>

            <div className="flex">
                <Square value={squares[3]} onSquareClick={() => handClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handClick(5)} />
            </div>

            <div className="flex">
                <Square value={squares[6]} onSquareClick={() => handClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handClick(8)} />
            </div>
        </>
    );
}
