import reactLogo from "../assets/react.svg";
import "./App.css";
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement, incrementByAmount } from "../slices/counterSlice";



function App() {

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  
  return (
    <>
      <img src={reactLogo} className="logo react" alt="React logo" />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          increment
        </button>
        <button onClick={() => dispatch(decrement())}>
          decrement
        </button>
        <button onClick={() => dispatch(incrementByAmount(11))}>
          increment !!
        </button>
        <p>
          count is {count}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
