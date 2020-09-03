import React from 'react'

const AddExpense = () => {
    return (
        <div className="transactions transactions-expense">
            <h2>Transaction History</h2>
            <ul className="transaction-list">
                <li className="transaction">
                    <span className="transaction-text">Car</span>
                    <span className="transaction-amount">$400</span>
                    <button className="delete-btn">
                        <i className="fas fa-trash"/>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default AddExpense
