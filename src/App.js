
import './App.css';

import Form from './components/Form';

import TextField from '@material-ui/core/TextField';
import {useDispatch,useSelector} from "react-redux";
import {updatePlace,updatePlaceData} from "./action/index";



function App() {
  
  return (
    <div className="App" >
     <Form/>
     
     
    </div>
  );
}

export default App;
