import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'


function App() {
  const [expression, setExpression] = useState('');
  //const [solution, setSolution] = useState('');

  const handleExpression = (val) => {
    setExpression(`${expression}${val}`);
    console.log(expression);
    //setSolution(...expression, {val});
    return;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Calculator Demo App
        </h1>
        <div class='calculator-container'>
          <div class='output'>{expression}</div>
          <div class="container">
            <div class='col1'>
              <button onClick={() => handleExpression(7)} class="item item-7"> 7</button>
              <button onClick={() => handleExpression(8)} class="item item-8"> 8</button>
              <button onClick={() => handleExpression(9)} class="item item-9"> 9</button>
              <button onClick={() => handleExpression('/')} class="item item-/"> /</button>
            </div>
            <div class='col2'>
              <button onClick={() => handleExpression(4)} class="item item-4"> 4</button>
              <button onClick={() => handleExpression(5)} class="item item-5"> 5</button>
              <button onClick={() => handleExpression(6)} class="item item-6">6 </button>
              <button onClick={() => handleExpression('*')} class="item item-x"> x</button>
            </div>

            <div class='col3'>
              <button onClick={() => handleExpression(1)} class="item item-1"> 1</button>
              <button onClick={() => handleExpression(2)} class="item item-2"> 2</button>
              <button onClick={() => handleExpression(3)} class="item item-3"> 3</button>
              <button onClick={() => handleExpression('+')} class="item item-="> +</button>
            </div>

            <div class='col4'>
              <button onClick={() => handleExpression('.')} class="item item-."> .</button>
              <button onClick={() => handleExpression(0)} class="item item-0"> 0</button>
              <button onClick={() => setExpression(eval(expression))} class="item item-="> =</button>
              <button onClick={() => handleExpression('-')} class="item item--"> -</button>
            </div>
          </div>
        
        <button onClick={() => setExpression('')} class='clear-button'>Clear</button>
        
        </div>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
