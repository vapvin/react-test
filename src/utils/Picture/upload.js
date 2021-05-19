import { request } from '../axios';

const UPLOAD_PICTURE = "PICTURE/UPLOAD_PICTURE";
const LOAD_PICTURE = "PICTURE/LOGOUT_USER";

export const loadPicture = (key) => {
    const data = request("get", "api/v1/picture/", null, key);
    console.log(data)
    return {
        type: LOAD_PICTURE,
        payload: data,
    }
}

export const uploadPicture = (data, key) => {
    const res = request("post", "api/v1/picture/", data, key);
    return {
        type: UPLOAD_PICTURE,
        payload: res
    }
}

const initialState = {
    data: [],
    message: ""
}

const picturesReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_PICTURE:
            return {...state, data: action.payload, message: "이미지가 성공적으로 로드되었습니다."}
        case UPLOAD_PICTURE:
            return {...state, data: action.payload, message: "이미지가 성공적으로 업로드 되었습니다."}
        default:
            return state;
    }
}

export default picturesReducer;