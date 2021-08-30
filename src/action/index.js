const updatePlace=(place)=>{
    return{
        type: "PLACE",
        payload: place,
    };
};
const updatePlaceData=(place)=>{
    return (dispatch)=>{
        fetch(`https://api.weatherapi.com/v1/current.json?key=16857af4631146f092f125559212908&q=${place}`)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            dispatch({
                
                type:"PLACE_DATA",
                payload: data,
            });
            
        });
    
    };
};

const updateTheme=(current)=>{
    return{
        type:"THEME",
        payload:current,
    }
}
// type:"PLACE_DATA", 
//         payload: place,
export {updatePlace, updatePlaceData, updateTheme};