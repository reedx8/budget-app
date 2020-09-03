import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState' // Needed to have access to the state, {useContext} also needed

const IncomeList = () => {
    //destructuring here  with incomeTransactions - destructing income transactions from the global context
    const {incomeTransactions} = useContext(GlobalContext)
    //console.log(incomeTransactions)


    return (
        <div className="transactions transactions-income">
            <h2>Transaction History</h2>
            <ul className="transaction-list">
                {
                    incomeTransactions.map(incomeTransaction => {
                        return(
                            <li className="transaction" key={incomeTransaction.id}>
                                <span className="transaction-text">{incomeTransaction.incText}</span>
                                <span className="transaction-amount">{incomeTransaction.incAmount}</span>
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

export default IncomeList
