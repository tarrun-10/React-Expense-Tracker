import Elements from "./Elements";
import './expenses.css'
function Expensess(props){
  
  return(
    <div className="expenses">
        <Elements title = {props.items[0].title} amount = {props.items[0].amount} date = {props.items[0].date}></Elements>
        <Elements title = {props.items[1].title} amount = {props.items[1].amount} date = {props.items[1].date}></Elements>
        <Elements title = {props.items[2].title} amount = {props.items[2].amount} date = {props.items[2].date}></Elements>
    </div>
  )
}

export default Expensess