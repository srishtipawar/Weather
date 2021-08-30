const themeReducer=(state="false",action)=>{
    if(action.type==="THEME"){
        return action.payload
    }
    return state;
}
export default themeReducer;