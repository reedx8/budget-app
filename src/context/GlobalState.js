import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer';

// initialState object
const initialState = {
    incomeTransactions: [
        { id: 1, incText: "Salary", incAmount: 10000},
        { id: 2, incText: "Dividends", incAmount: 50},
        { id: 3, incText: "Tips", incAmount: 800}
    ],
    expenseTransactions: [
        { id: 1, expText: "Groceries", expAmount: 100},
        { id: 2, expText: "Gas", expAmount: 15},
        { id: 3, expText: "Phone", expAmount: 800}

    ]
}

// Creating context using Functional components. Then we use useReduce instead of use state hook. State will be available
// for all other components
export const GlobalContext = createContext(initialState);
// to get access to the state from the components, we need children as the prop. Children will be all the components in our app
export const GlobalContextProvider = ({children}) => {
    // array destructuring and grabbing the state and dispatch function
    const [state, dispatch] = useReducer(AppReducer, initialState)

    return (
        <GlobalContext.Provider value={{
            incomeTransactions: state.incomeTransactions,
            expenseTransactions: state.expenseTransactions
        }}
        >
            {children}
        </GlobalContext.Provider>
    )

}
