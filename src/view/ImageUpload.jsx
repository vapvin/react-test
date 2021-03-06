import React, {useState, useEffect} from 'react';
import {useDropzone} from 'react-dropzone';
import {uploadPicture} from "../utils/Picture/upload";
import {useDispatch, useSelector} from 'react-redux';

function ImageUpload(){

    const userData = useSelector(state => state.authenticated);
    const dispatch = useDispatch();

    const [data, setData] = useState({
        user: null,
        image: "",
        title: "",
        category: "",
        description: "",
        price: "",
        slug: ""
    })
    const [files, setFiles] = useState([]);
    const {getRootProps, getInputProps} = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
            setFiles(
                acceptedFiles.map((file, index) => {
                    if(index == 0){
                        return Object.assign(file, {
                            preview: URL.createObjectURL(file)
                        });
                    } else {
                        return null
                    }
                })
            )
            
        }
    })

    const viewImage = files.map(file => (
        <div key={file.name}>
            <div>
                <img src={file.preview} style={{width: "300px"}} alt="preview"/>
            </div>
        </div>
    ))

    const getInputData = e => {
        const {value, name} = e.target;
        setData({
            ...data, 
            [name]: value
        })
    }

    const uploadReq = e => {
        e.preventDefault();
        let formData = new FormData();
        
        if(userData.key){
            formData.append("user",userData.id,);
            formData.append("image",files[0])
            formData.append("slug",Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 20));
            formData.append("title",data.title);
            formData.append("category",data.category);
            formData.append("description",data.description);
            formData.append("price",data.price);
            dispatch(uploadPicture(formData, userData.key))
            .then(response => {
                console.log(response)
            });
            setFiles([]);
            setData({
                
                title: "",
                category: "",
                description: "",
                price: "",
            })
        }
    }

    
    return (
        <div className="content">
            <div className="image_file_up_wrap content_box upload_content">
                <p className="content_title" >????????? ?????????</p>
                <div className="image_file_up">
                    <form onSubmit={uploadReq}>
                        <fieldset>
                            <legend>image file upload</legend>
                            <div className="image_file_up_input">
                                <ul>
                                    <li>
                                        <div {...getRootProps()} className="image_on">
                                            <input {...getInputProps()} name="image" />
                                            <p>????????? ?????? ??????</p>
                                        </div>
                                    </li>
                                    <li>????????????<input name="title" type="text" placeholder="???????????? ?????? ??????" onChange={getInputData} value={data.title} /></li>
                                    <li>????????????<input name="description" type="text" placeholder="???????????? ?????? ??????" onChange={getInputData} value={data.description} /></li>
                                    <li>????????????<input name="category" type="text" placeholder="sky" onChange={getInputData} value={data.category} /></li>
                                    <li>????????????<input name="price" type="text" placeholder="1000 ????????? ??????" onChange={getInputData} value={data.price} /></li>
                                </ul>
                                <ul className="save_bt">
                                    <li><button className="auth-btn">?????????</button></li>
                                </ul>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
            <div className="image_file_ck content_box upload-right">
                <p className="content_title" >????????? ????????????</p>
                <div className="image_file_up_ck">
                <form>
                        <fieldset>
                            <legend>image file upload ck</legend>
                            <div className="image_file_up_ck_text">
                                <ul>
                                    {/* <li><div className="image_file_up_box"><img src="/static/image/cloud.jpg" /></div></li>

                                    <li><div className="img_info">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th>Width</th>
                                                    <td>1920</td>
                                                </tr>
                                                <tr>
                                                    <th>Height</th>
                                                    <td>1280</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <p className="th">???????????????</p>
                                        <p className="td">web2p/image/blue_sky.jpg</p>
                                        <p className="th">???????????????</p>
                                        <p className="td">web2p/image/blue_sky.jpg</p>
                                    </div></li>

                                    <li>??????:<p>blue sky</p></li>
                                    <li>????????????:<p>????????????</p></li>
                                    <li className="add_text">?????????
                                        <p>
                                            ????????? ????????? ?????????.
                                        </p>
                                        
                                    </li>
                                    <li>??????:<p>10000</p></li> */}
                                    {viewImage}
                                </ul>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ImageUpload;