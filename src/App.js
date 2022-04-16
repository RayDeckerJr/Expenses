import React, {useState} from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2022, 7, 14),
    },
    {
        id: 'e2',
        title: 'New TV',
        amount: 799.49,
        date: new Date(2022, 2, 12)
    },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2022, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2022, 5, 12),
    },
];

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) =>{
        setExpenses((preExpenses) => {
            return[expense,...preExpenses];
        });
    };


    return (
        <div>


            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items = {expenses} />



            <div className= "expenses">
                <div className="expense-footer" >
                    <a href="http://www.RayDeckerJr.Dev">Return To RayDeckerJr.Dev</a>
                    <p>
                        Expense Organizer by Ray Decker Jr v0.1.7
                    </p>
                </div>
            </div>
        </div>
    );
}

export default App;
