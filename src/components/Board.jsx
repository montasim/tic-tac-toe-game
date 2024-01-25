import Square from "./Square.jsx";
import { calculateWinner } from "../helpers/calculateWinner.js";
import XImage from "../assets/x.png";
import OImage from "../assets/o.png";

export default function Board({ xIsNext, squares, onPlay }) {
    const winner = calculateWinner(squares);
    let status;
    let playerImage = "";

    if(winner) {
        status = `Winner: ${winner}`;
    } else {
        status = "Next Player ";

        xIsNext ? playerImage = XImage : playerImage = OImage;
    }

    function handClick(i) {
        if(squares[i] || calculateWinner(squares)) {
            return;
        }

        const nextSquares = squares?.slice();

        if(xIsNext) {
            nextSquares[i] = <img className="max-w-32 max-h-32" src={XImage} alt="X image"/>;
        } else {
            nextSquares[i] = <img className="max-w-32 max-h-32" src={OImage} alt="O image" />;
        }

        onPlay(nextSquares);
    }

    return (
        <div className="bg-[#F5F5F5] border rounded-[37px] px-14 py-10">
            <div className="flex items-center justify-center gap-4 mb-8 text-[#212121] text-center text-2xl font-bold font-['Inter']">
                {status}

                <img className="max-w-8 max-h-8" src={playerImage} alt="X image"/>
            </div>

            <div className="flex">
                <Square value={squares[0]} onSquareClick={() => handClick(0)}/>
                <Square value={squares[1]} onSquareClick={() => handClick(1)}/>
                <Square value={squares[2]} onSquareClick={() => handClick(2)}/>
            </div>

            <div className="flex">
                <Square value={squares[3]} onSquareClick={() => handClick(3)}/>
                <Square value={squares[4]} onSquareClick={() => handClick(4)}/>
                <Square value={squares[5]} onSquareClick={() => handClick(5)}/>
            </div>

            <div className="flex">
                <Square value={squares[6]} onSquareClick={() => handClick(6)}/>
                <Square value={squares[7]} onSquareClick={() => handClick(7)}/>
                <Square value={squares[8]} onSquareClick={() => handClick(8)}/>
            </div>
        </div>
    );
}
