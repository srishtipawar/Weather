import Component from './Card';
import TextField from '@material-ui/core/TextField';
import {useDispatch,useSelector} from "react-redux";
import {updatePlace,updatePlaceData} from "../action";
import {updateTheme} from "../action";
import './Form.css'

// import Button from './Button';

function Form() {
    const place = useSelector((state)=>state.place);
    const theme = useSelector((state)=>state.theme);
    const dispatch = useDispatch();
    return (
      <div>
      {theme ? 
    (  
     <div style={{background:"black",height:720}}>
        <button 
        style={{height:40,width:100,marginTop:10,marginLeft:700,backgroundColor:"white",
        color:"black",
        borderRadius:3}}
        onClick={()=>{

            dispatch(updateTheme(!theme));
            console.log(theme);
        }}
        >
          Light
        </button>
        <form style={{marginTop:50}}>
        <input placeholder='Enter City' className="text" value={place}
        
        onChange={(e)=>{
         
          dispatch(updatePlace(e.target.value));
          e.preventDefault();
        }}
        />
        <button 
        style={{height:40,width:100,marginTop:10,marginLeft:5,backgroundColor:"white",
        color:"black",
        borderRadius:3
      
      }}
        onClick={(e)=>{
          
          dispatch(updatePlaceData(place));
          e.preventDefault();
        }}>Submit</button>
        </form>  
      
       
        <Component/>
     </div>
      ):
      (
        <div>
             <button 
        style={{height:40,width:100,marginTop:10,marginLeft:700,backgroundColor:"#0d0e0f",
        color:"white",
        borderRadius:3}}
        onClick={()=>{

            dispatch(updateTheme(!theme));
            console.log(theme);
        }}
        >
          Dark
        </button>
        <form style={{marginTop:50}}>
        <input placeholder='Enter City' className="text" value={place}
        onChange={(e)=>{
         
          dispatch(updatePlace(e.target.value));
          e.preventDefault();
        }}
        />
        <button 
        style={{height:40,width:100,marginTop:10,marginLeft:5,backgroundColor:"#0d0e0f",
        color:"white",
        borderRadius:3
      
      }}
        onClick={(e)=>{
          
          dispatch(updatePlaceData(place));
          e.preventDefault();
        }}>Submit</button>
        </form>  
      
     
        <Component/>
   </div>

      )
      }
       </div>
    );
  }
  
  export default Form;
  