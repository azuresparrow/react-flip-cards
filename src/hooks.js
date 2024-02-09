import {useEffect, useState} from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
/* code to flip playing and pokemon cards */

function useFlip (isFlipped =false){
    const [flipped, setFlipped] = useState(isFlipped);
    const flip = () => {
        setFlipped(flipped => !flipped);
    };

    return [flipped, flip];
}

function useAxios (url) {
    const [savedData, setSavedData] = useState([]);
    const appendData = async(format = data => data, urlsuffix="") => {
        console.log(`${url}${urlsuffix}/`);
        const response = await axios.get(`${url}${urlsuffix}/`);
        setSavedData (saved => [...saved, format(response.data)]);
    }
    const clearData = () => {
        setSavedData([]);
    }
    return [savedData, appendData, clearData];
}

export default useFlip;

export { useFlip, useAxios };