import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions' // automatically finds index.js no need to specify

function App() {
  const counter = useSelector(state => state.counter);
  const isLoggedIn = useSelector(state => state.isLogged)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1> Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLoggedIn ? <h3> Valuable information I shouldn't see </h3> : ''}
    
    </div>
  );
}

export default App;
