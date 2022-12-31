import React , {useState} from 'react'
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    // const [title, setTitle] = useState(props.title)
    // const [newTitle, setNewTitle] = useState('')
    
    // const changeHandler = (event) => {
    //     setNewTitle(event.target.value)
    // }

    // const clickHandler = () =>{
    //     setTitle(newTitle)
    // }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item-desc'>
                <h2>{props.title}</h2>
                <div className='expense-item-price'>&#x20B9; {props.amount}</div>
            </div>
            {/* <input type='text' value={newTitle} onChange={changeHandler}/>
            <button onClick={clickHandler}>Change Title</button> */}
        </Card>
    )
}

export default ExpenseItem