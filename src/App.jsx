import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrementAction, incrementAction } from './redux/action/action';

const App = () => {
  
  const dispatch = useDispatch();
  const num = useSelector( state => state.counterReducer );

  return (
    <div className="App">
      {'React Redux'}
      <br />
      <button type="button" onClick={() => dispatch(incrementAction())} style={{padding: '2px 10px', margin: '10px'}}>Addition</button>
      {'The Number Comes from Redux '+num.number}
      <button type="button" onClick={() => dispatch(decrementAction())} style={{padding: '2px 10px', margin: '10px'}}>Deletion</button>
    </div>
  )
};

export default App;
