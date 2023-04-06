// import Elements from "./components/Elements";
import Expensess from "./components/expense";
const expenses = [
  { id : 'e1',title: "car insurance", amount: 294.67, date: new Date(2021, 2, 28) },
  { id : 'e2' , title: "toilet paper", amount: 94.12, date: new Date(2021, 3, 1) },
  { id : 'e3' , title: "cartoon", amount: 294.67, date: new Date(2021, 3, 2) },
];
function App() {
  return (
    <div>
      <Expensess items = {expenses}></Expensess>;
    </div>
  );
}

export default App;
