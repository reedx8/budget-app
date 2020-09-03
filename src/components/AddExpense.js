import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState' // Needed to have access to the state, {useContext} also needed

// The expense list
const AddExpense = () => {
    const {expenseTransactions} = useContext(GlobalContext);

    return (
        <div className="transactions transactions-expense">
            <h2>Transaction History</h2>
            <ul className="transaction-list">
                {
                    expenseTransactions.map(expenseTransaction =>{
                        return(
                            <li className="transaction" key={expenseTransaction.id}>
                                <span className="transaction-text">{expenseTransaction.expText}</span>
                                <span className="transaction-amount">{expenseTransaction.expAmount}</span>
                                <button className="delete-btn">
                                    <i className="fas fa-trash"/>
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default AddExpense
