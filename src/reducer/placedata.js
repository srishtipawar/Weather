const placedataReducer = (state={},action)=>{
    if(action.type==="PLACE_DATA"){
        return action.payload;
    }
    return state;
}
export default placedataReducer;