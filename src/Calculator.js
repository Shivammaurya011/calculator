import React from 'react';
import './calculator.css'
function Calculator() {

  const [input, setInput] = React.useState("");

  const handleChane = (event) =>{
    setInput(event.target.value);
  }

  const handleClick = (event) =>{
    setInput(input + event.target.value)
    console.log(event.target.value);
  }

  const res = () =>{
    const ans = eval(input);
    setInput(ans);
  }

  return (
    <div id='design'>
      <h1>Calculator</h1>
      <div style={{display: 'flex'}}>
        <input className='form-control' type="text" onChange={handleChane} value={input} />
        <button className='btn btn-primary' onClick={res}>Calculate</button>
        <button className='btn btn-danger' onClick={()=>setInput("")}>Clear</button>
      </div>
      <div>
        <button className='btn' value="7" onClick={handleClick}>7</button>
        <button className='btn' value="8" onClick={handleClick}>8</button>
        <button className='btn' value="9" onClick={handleClick}>9</button>
        <button className='btn btn-light' value="+" onClick={handleClick}>+</button>
      </div>
      <div>
        <button className='btn' value="4" onClick={handleClick}>4</button>
        <button className='btn' value="5" onClick={handleClick}>5</button>
        <button className='btn' value="6" onClick={handleClick}>6</button>
        <button className='btn btn-light' value="-" onClick={handleClick}>-</button>
      </div>
      <div>
        <button className='btn' value="1" onClick={handleClick}>1</button>
        <button className='btn' value="2" onClick={handleClick}>2</button>
        <button className='btn' value="3" onClick={handleClick}>3</button>
        <button className='btn btn-light' value="*" onClick={handleClick}>*</button>
      </div>
      <div>
        <button className='btn' value="0" onClick={handleClick}>0</button>
        <button className='btn btn-light' value="." onClick={handleClick}>.</button>
        <button className='btn btn-light' value="/" onClick={handleClick}>/</button>
        <button className='btn btn-info' value="=" onClick={res}>=</button>
      </div>
    </div>
  )
}

export default Calculator
