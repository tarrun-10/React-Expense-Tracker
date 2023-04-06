// import './card.js'

function Card(props){
    const cardd = ' ' + props.className;
    return ( 
        <div className={cardd}>{props.children}</div>
    )
}

export default Card;