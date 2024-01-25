export default function Square({ value, onSquareClick }) {
    return (
        <button
            className="bg-[#F5F5F5] flex items-center justify-center border-r-8 border-b-8 border-[#212121] rounded-[16px] h-40 w-40 m-1 leading-9 text-lg"
            onClick={onSquareClick}
        >
            {value}
        </button>
    );
}
