import './App.css';
import Button from "./components/Button";
import {useReducer} from "react";
// import {} from
import {reduser} from "./reduser";


const initialState = {
    balance:0,
    loan:0,
    isActive:false,
    status:'closeAccount'
}
function App() {
    const  [{balance,loan,isActive},dispatch]= useReducer(reduser,initialState)
    return (
        <div className="App">
            <p> Balance {balance}</p>
            <p> Loan {loan}</p>
            <Button
                buttonName='OpenAccount'
                func={()=>{dispatch({type:'createAccount'})}}
                disabled={isActive}
            />
            <Button
                buttonName="Deposit 150"
                func={()=>{dispatch({type:'addDeposit', payload:150})}}
                disabled={!isActive}
            />
            <Button
                buttonName='Withdraw 50'
                func={()=>dispatch({type:'withdraw', payload:50})}
                disabled={!isActive}
            />
            <Button
                buttonName='recuesrt a loan of 5000'
                func={()=>dispatch({type:'loanAdded',payload:5000})}
                disabled={!isActive}
            />
            <Button
                buttonName='PayLoan'
                func={()=>{dispatch({type:'test'})}}
                disabled={!isActive}
            />
            <Button
                buttonName='Close account'
                // func={}
                disabled={!isActive}
            />
        </div>
    );
}

export default App;
