import React from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import AddTransaction from './components/AddTransaction'
import IncomeList from './components/IncomeList'
import AddExpense from './components/AddExpense'
import {GlobalContextProvider} from './context/GlobalState'

const App = () => {
    return (
        // application is wrapped with the globalcontextprovider
        <GlobalContextProvider>
            <div className="container">
                <div className="app-wrapper">
                    <Header />
                    <Balance />
                    <AddTransaction/>
                    <IncomeList/>
                    <AddExpense/>
                </div>
            </div>
        </GlobalContextProvider>
    )
}

export default App;
