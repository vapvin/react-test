import axios from "axios";

const DOMAIN = "http://54.180.159.77/";
axios.defaults.withCredentials = true;
export const request = async (method, url, data, key) => {
    
    if(key){
        axios.defaults.headers.common['Authorization'] = `Token ${key}`;
    }
    try {
        const {data: result} = await axios({
            method,
            url: DOMAIN + url,
            data,
        })
        return result;
    } catch (err){
        console.log(err.message)
    }
};