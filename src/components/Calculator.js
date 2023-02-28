import React, { useState } from "react";
import './Calculator.css';

export default function Calculator() {

const [num, setNum] = useState(0);
const [oldNum, setOldNum] = useState(0);
const [operator, setOperator] = useState();

function inputNum(e) {
    const input = e.target.value;
    if (num === 0) 
    {
        setNum(input);
    } else {
        setNum(num + input);
    }
}

function clear() {
    setNum(0);
}

function changeSign() {
    if(num > 0) {
        setNum(-num);
    } else {
        setNum(Math.abs(num));
    }
}

function percentage() {
    setNum(num/100);
}

function operatorHandler(e) {
    const operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
}

    function calculate() {

        let result;
        if (operator === "/") {
          result = parseFloat(oldNum) / parseFloat(num);
        } else if (operator === "X") {
          result = parseFloat(oldNum) * parseFloat(num);
        } else if (operator === "-") {
          result = parseFloat(oldNum) - parseFloat(num);
        } else if (operator === "+") {
          result = parseFloat(oldNum) + parseFloat(num);
        }
      
        if (result % 1 !== 0) {
          result = result.toFixed(2);
        }
      
        setNum(result);
    }

  return (
    <div>
        <div className="wrapper">
        <h1 className="result">{num}</h1>

            <div className="buttons">
            <button className="lightgrey"  onClick={clear}>AC</button>
            <button className="lightgrey"  onClick={changeSign}>+/-</button>
            <button className="lightgrey"  onClick={percentage}>%</button>

            <button className="orange" id="division" onClick={operatorHandler} value="/">
                /
            </button>
            <button className="gray" onClick={inputNum} value={7}>
                7
            </button>
            <button className="gray" onClick={inputNum} value="8">
                8
            </button> 
            <button className="gray" onClick={inputNum} value="9">
                9
            </button> 
            <button className="orange" onClick={operatorHandler} value="X">
                X
            </button> 
            <button className="gray" onClick={inputNum} value="4">
                4
            </button> 
            <button className="gray" onClick={inputNum} value="5">
                5
            </button> 
            <button className="gray" onClick={inputNum} value="6">
                6
            </button> 
            <button className="orange" onClick={operatorHandler} value="-">
                -
            </button> 
            <button className="gray" onClick={inputNum} value="1">
                1
            </button>
            <button className="gray" onClick={inputNum} value="2">
                2
            </button>
            <button className="gray" onClick={inputNum} value="3">
                3
            </button>
            <button className="orange" onClick={operatorHandler} value="+">
                +
            </button>
            <button className="long" onClick={inputNum} value="0">
                0
            </button>
            <button className="gray" onClick={inputNum} value=".">
                .
            </button>
            <button className="orange" onClick={calculate} value="=">
                =
            </button>
            </div>
        </div>

    </div>
  )
}
