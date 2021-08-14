import { useSelector, useDispatch} from "react-redux";

import { 
  incrementActionCreator,
  decrementActionCreator,
  loginActionCreator,
  logoutActionCreator
 } from "./redux/actions";

function App() {
  //useSelector hook ko ek function dete hai jisko state milti hai joki redux store me stored hai, and then is function ke ander se we can manipulate the state and return it.
 let countState = useSelector((state) => {
   return state.count;
 });

 let authState = useSelector((state) => {
   console.log(state);
   return state.auth;
 });

 let dispatch = useDispatch();
  return (
    <div>
      <p>{countState}</p>
      <button
      onClick= { () => {
        dispatch(incrementActionCreator());
      }}
      >+</button>
      <button 
      onClick = {()=>{
        dispatch(decrementActionCreator());
      }}>-</button>
      <div>
        <button 
        onClick = {()=>{
          dispatch(loginActionCreator());
        }}
        >login</button>
        <button 
        onClick = { ()=>{
          dispatch(logoutActionCreator);
        }}
        >logout</button>
        <p>{authState? "some private text":"not available"}</p>
      </div>
    </div>
  );
}

export default App;
