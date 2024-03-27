import './App.css';
import Button from "./components/Button";
import {useReducer} from "react";
// import {} from
import {reduser} from "./reduser";


const initialState = {
    balance:0,
    loan:0,
    isActive:false,
}
function App() {
    const  [{balance,loan,isActive},dispatch]= useReducer(reduser,initialState)
    return (
        <div className="App">
            <p> Balance {balance}</p>
            <p> Loan {loan}</p>
            <Button
                buttonName='OpenAccount'
                func={()=>{dispatch({type:'test', payload:'log'})}}
                disabled={isActive}
            />
            <Button
                buttonName="Deposit 150"
                // func={}
            />
            <Button
                buttonName='Withdraw 50'
                // func={}
            />
            <Button
                buttonName='recuesrt a loan of 5000'

                // func={}
            />
            <Button
                buttonName='PayLoan'
                func={()=>{dispatch({type:'test'})}}
                disabled={true}
            />
            <Button
                buttonName='Close account'
                // func={}
            />
        </div>
    );
}

export default App;
