import React from 'react';
import "./CalculatorContainer.css"
import { useState } from "react"


function CalculatorContainer() {

    //Current Calculator Value
    const [screenValue, setScreenValue] = useState("0")

    const clickButton = (value) => {
        //If current value is 0 replace with value clicked
        if (screenValue === "0" && value != ".") {
            setScreenValue(value)
        }
        // Clear error value
        else if (screenValue === "Error") {
            setScreenValue(value)  
        }
        // Add value clicked to screen
        else{
            setScreenValue(screenValue + value)
        }
    }
    
    // Calculates current screen value
    const calculateValue = ()=>{
        try {
            if (screenValue === "Error") {
                setScreenValue("Error")
            }
            else{
                let calculatedValue = String(eval(screenValue))
                setScreenValue(calculatedValue)
            }
        } 
        //Catch if eval cant calculate
        catch (e) {
            if (e instanceof SyntaxError) {
                setScreenValue("Error")            
            }      
        }
        
    }

    return (
        <div className = "calculatorContainer">
            <div className = "calculatorScreen">
                <h1>{screenValue}</h1>
            </div>
            <div className = "rowContainer">
                <div className = "row1">
                    <button onClick={() => clickButton("+")}>+</button>
                    <button onClick={() => clickButton("7")}>7</button>
                    <button onClick={() => clickButton("4")}>4</button>
                    <button onClick={() => clickButton("1")}>1</button>
                    <button className= "zeroButton" onClick={() => clickButton("0")}>0</button>
                </div>
                <div className="row2">
                    <button onClick={() => clickButton("-")}>-</button>
                    <button onClick={() => clickButton("8")}>8</button>
                    <button onClick={() => clickButton("5")}>5</button>
                    <button onClick={() => clickButton("2")}>2</button>
                    <button onClick={() => clickButton(".")}>.</button>
                </div>
                <div className="row3">
                    <button onClick={() => clickButton("*")}>x</button>
                    <button onClick={() => clickButton("9")}>9</button>
                    <button onClick={() => clickButton("6")}>6</button>
                    <button onClick={() => clickButton("3")}>3</button>
                    <button onClick = {()=> setScreenValue("0")}>AC</button>
                </div>
                <div className="row4">
                    <button className="divideButton" onClick={() => clickButton("/")}>/</button>
                    <button className="equalButton" onClick={() => {calculateValue()}}>=</button>
                </div>
            </div>
        </div>
    );
}

export default CalculatorContainer;