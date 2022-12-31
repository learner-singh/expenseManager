import React from 'react'
import './Card.css';

const Card = (props) => {
    // const classes = 'card' + props.className;
    let classesn = 'card ' + props.className;
    return <div className={classesn}>{props.children}</div>
}

export default Card