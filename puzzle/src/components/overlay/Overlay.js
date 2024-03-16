import './Overlay.css'


const Overlay = () =>
    new Array(16)
        .fill()
        .map((_,i) => <div key={i} className="overlay"/>)
export default Overlay;
