import {useDispatch, useSelector} from "react-redux";
import {updateTheme} from "../action";
function Button(){
    const theme = useSelector((state)=>state.theme);
    const dispatch = useDispatch();
    return(
        <button 
        style={{height:40,width:100,marginTop:10,backgroundColor:"#0d0e0f",
        color:"white",
        borderRadius:3}}
        onClick={()=>{

            dispatch(updateTheme(!theme));
            console.log(theme);
        }}
        >
            yo
        </button>
    )
}
export default Button;