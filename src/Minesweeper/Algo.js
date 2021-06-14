import { useSelector,useDispatch } from "react-redux";
import {changevalue, createarray } from "../actions";
import Game from "./Game";
function Algo(){
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    return(<>
    <button onClick={()=>dispatch(createarray())}>Start New Game</button>
   
    <br/>
    <br/>
    {counter.sol_arr.map((value)=>{
        return (<tr key={0}>{value.map((v)=>{
            return(<Game v={v}/>)
        })}</tr>)})}
        <h1>{counter.value === 90 ? "YOU WON":""}</h1>
    </>)
}
export default Algo;


