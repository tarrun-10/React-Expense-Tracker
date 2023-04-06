import './elements.css'
import Cardd from './card'
// import './ExpenseDate.css'
import ExpenseDate from './ExpenseDate';
function Elements(props) {
  // const month = props.date.toLocaleString('en-us',{month:'long'});
  // const day = props.date.toLocaleString('en-us',{day:'2-digit'});
  // const year = props.date.getFullYear();
    return (
        <Cardd className="expense-item">
          <ExpenseDate date = {props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
      </Cardd>
    );
  }
  
  export default Elements;
  