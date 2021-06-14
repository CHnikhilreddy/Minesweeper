import { useSelector,useDispatch } from "react-redux";
import {changearr,increment} from "../actions";
import './mine.css'

function Game(props){
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    const arr_re = counter.arr;

    function pre(row,col,arr_re){
        if(row!==10&&row!==-1&&col!==10&&col!==-1&&arr_re[row][col].value!==9&&arr_re[row][col].display!==true){
            showElement(row,col,arr_re)
        }
    }
    function showElement(row,col,arr_re){
        arr_re[row][col].display = true
        dispatch(increment())
        if(arr_re[row][col].value!==0){arr_re[row][col].color = 'NM';arr_re[row][col].display = true;return}
        arr_re[row][col].color = 'RY'
        
        pre(row+1,col,arr_re)
        pre(row-1,col,arr_re)
        pre(row+1,col+1,arr_re)
        pre(row+1,col-1,arr_re)
        pre(row-1,col+1,arr_re)
        pre(row-1,col-1,arr_re)
        pre(row,col+1,arr_re)
        pre(row,col-1,arr_re)
    }
    function pressed(row,col){
        if(arr_re[row][col].value!==0){
            if(arr_re[row][col].value===9){
                displayall(arr_re)
            }
            else{showElement(row,col,arr_re)}
        }
        else if(arr_re[row][col].value===0){
            pre(row,col,arr_re)
        }
        dispatch(changearr(arr_re))
    }
    function displayall(arr_re){
        for(let i=0;i<10;i++){
            for(let j=0;j<10;j++){
                arr_re[i][j].display = true
                if(arr_re[i][j].value===0){arr_re[i][j].color = "RY"}
                else if(arr_re[i][j].value===9){arr_re[i][j].color = "red"}
                else{arr_re[i][j].color = "NM"}
            }
        }
    }
    return(<><td key={props.v.row+""+props.v.col+"tb"} 
            className={props.v.color} onClick={()=>{pressed(props.v.row,props.v.col)}}>
                {props.v.display?props.v.color==="NM"?props.v.value:'':''}
        </td></>)
}

export default Game;