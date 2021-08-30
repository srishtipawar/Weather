import React from 'react';
import './Card.css';
import Card from '@material-ui/core/Card';
import {useDispatch,useSelector} from "react-redux";

function Component(){
    const placedata = useSelector((state)=>state.placedata);
    console.log(placedata);
    return(
        <div>
            <Card className="card">
            {placedata.location?(
                <div>
            <div className="icon"><img src={placedata.current.condition.icon}/></div>
                <div className="temp"><h2>{placedata.current.temp_c}°</h2></div>
                <div className="current"><p className="p">{placedata.current.condition.text}</p></div>
                <div className="place"><p className="p2">{placedata.location.name}</p></div>
                <div className="details">
                    
                <p className="span1"> <span className="inner">Wind Now</span>
                    <span className="inner">Humidity</span>
                    <span className="inner">Precipitation</span></p>
                </div>
                <div className="details2">
                    
                <p className="span2"> <span className="inner2" >{placedata.current.wind_kph}KM</span>
                    <span style={{marginLeft:80,marginRight:80}}>{placedata.current.humidity}%</span>
                    <span >{placedata.current.precip_in}%</span></p>
                </div>
                
                </div>
            ):(
                <h1>Place not found</h1>
            )
        }
            </Card>
        </div>
    )
}
export default Component;