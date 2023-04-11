import React, { useState } from "react";
import { save } from "./slice";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
    const [locationName, setLocationName] = useState('');
    const dispatch = useDispatch();
    const { location } = useSelector(state=>state)
    const handleData = (e) => {
        setLocationName(e.target.value);
    }
    const handleSave = () => {
        const ifPrestent = location.includes(locationName);
        if(locationName !== undefined && !ifPrestent) {
            dispatch(save(locationName));
            setLocationName('')
        } else {
            setLocationName('')
        }
    }
    return (
        <div>
            <div>
                <input 
                    onChange={handleData} 
                    value={locationName} 
                    label="Enter location name"
                />
                <button
                    style={{margin: '10px'}}
                    variant="contained"
                    color="primary"
                    onClick={handleSave}
                >
                    add
                </button>
            </div>
            <div>
                <h3> List of locations </h3>
            </div>
            <div>
                 {location.map((item) => <li>{item}</li>) }
            </div>
        </div>
    );
}