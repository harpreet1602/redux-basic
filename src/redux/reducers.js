// how to do
export const counterReducer = (state = 0, action)=>{
    if(action.type === "INCREMENT"){
        state=state+1;
    }
    else if(action.type === "DECREMENT"){
        state= state-1;
    }
    return state;
};
// const vale mai destructuring horhi hai to usme naam same hoga 
// import karte vakt jo export kiya hai
// prev state hai usse change kar rha hai


export const authReducer = (state = false , action ) => {
    if(action.type === "LOGIN"){
        state= true;
    }
    else if(action.type=== "LOGOUT"){
        state=false;
    }
    return state;
}