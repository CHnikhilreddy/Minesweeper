const initialState  = { value: 0 ,arr:[],sol_arr:[]}

const counterReducer = (state = initialState,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return {
                ...state,
                value: state.value+1
            }

        case "CREATEARRAY":
            var count = []
            var size = 10
            for(var i= 0;i<size;i++){
                var count1 = []
                for(var j=0;j<size;j++){
                    count1.push({row:i,col:j,value:0,color:'RN',display:false})
                }
                count.push(count1)
            }
        preprocess(count)
            return { 
                ...state,
                arr:count,
                sol_arr:count,
                value: 0
            }
        case "CHANGEARR":
            return{
                ...state,
                arr:action.arr
            }
        default:
            return state
    }
};
export default counterReducer;


function preprocess(arr){
    for(var i = 0;i<10;i++){
        var ma = Math.ceil(Math.random()*100)
        const row = Math.ceil(ma/10)-1;
        const col = ma%10;
        if(arr[row][col].value===9){
            --i
            continue
        }
        arr[row][col].value = 9
        prereform(row,col,arr)
    }
}
function prereform(row,col,arr){
    preNext(row+1,col,arr);
    preNext(row+1,col-1,arr);
    preNext(row+1,col+1,arr);
    preNext(row-1,col,arr);
    preNext(row-1,col-1,arr);
    preNext(row-1,col+1,arr);
    preNext(row,col+1,arr);
    preNext(row,col-1,arr);
}
function preNext(row,col,arr){
    if(row!==10&&row!==-1&&col!==10&&col!==-1&&arr[row][col].value!==9){
        arr[row][col].value++
    }
}
