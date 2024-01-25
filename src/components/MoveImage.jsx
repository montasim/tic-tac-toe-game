export default function MoveImage(imageStyle = "max-w-32 max-h-32", path, altText = "") {
    return (
        <img className={imageStyle} src={path} alt={altText}/>
    );
}
