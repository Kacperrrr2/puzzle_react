import './Overlay.css'

const images =[
  "black", "green" ,"pink","red","yellow","white","purple","grey","orange"
,"red","red","red","red","red","red","red"
];
const Overlay = () =>
    new Array(16)
        .fill()
        .map((_,i) => <div key={i} className="overlay"  style={{ backgroundColor: images[i] }}/>)
export default Overlay;
