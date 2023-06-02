import React, { useState } from 'react';
import './App.css'

function Calculatorapp() {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleCalculate = () => {
    try {
      const result = eval(input.replace(/x/g, '*'));
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div>
      <input type="text" value={input} readOnly />
      <br />
      <button onClick={() => handleButtonClick('7')}>7</button>
      <button onClick={() => handleButtonClick('8')}>8</button>
      <button onClick={() => handleButtonClick('9')}>9</button>
      <button onClick={() => handleButtonClick('/')}>÷</button>
      <br />
      <button onClick={() => handleButtonClick('4')}>4</button>
      <button onClick={() => handleButtonClick('5')}>5</button>
      <button onClick={() => handleButtonClick('6')}>6</button>
      <button onClick={() => handleButtonClick('x')}>×</button>
      <br />
      <button onClick={() => handleButtonClick('1')}>1</button>
      <button onClick={() => handleButtonClick('2')}>2</button>
      <button onClick={() => handleButtonClick('3')}>3</button>
      <button onClick={() => handleButtonClick('-')}>-</button>
      <br />
      <button onClick={() => handleButtonClick('0')}>0</button>
      <button onClick={() => handleButtonClick('.')}>.</button>
      <button onClick={() => handleCalculate()}>=</button>
      <button onClick={() => handleButtonClick('+')}>+</button>
    </div>
  );
}

export default Calculatorapp;