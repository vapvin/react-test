import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {loadPicture} from "../utils/Picture/upload";
function ImageEdit(){
    const userData = useSelector(state => state.authenticated);

    const [images, setImages] = useState([]);
    const [currentImage, setCurrentImage] = useState(null);
    const dispatch = useDispatch();
   
    useEffect(() => {
        console.log(userData.key)
        if(userData.key){
            dispatch(loadPicture(userData.key))
            .then(res => {
                console.log(res.payload)
                setImages(res.payload);
            }).catch(err => console.log(err))
            
        }
    }, [userData])

    const selectImage = id => {
        const cur = images.filter(image => image.id == id);
        console.log(cur)
        setCurrentImage({
            ...cur[0]
        });
        console.log(currentImage)
    }
    
    return (
        <div className="content">
            <div className="image_file_all content_box">
                <p className="content_title">이미지 선택</p>
                <div className="image_search">
                    <form>
                        <fieldset>
                            <legend>image search</legend>
                            <div className="image_search_input">
                                <ul>
                                    <li><input type="text" /><img src="/static/image/search.png" /></li>
                                </ul>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <div className="image_all">
                    <ul>

                        {
                            images ? (
                                images.map(image => (
                                    <li onClick={() => selectImage(image.id)} key={image.id}><div className="image_all_hidden"><img alt="" src={image.image}/></div><p>{image.title}</p></li>
                                ))
                            ) : "등록된 이미지가 없습니다."
                        }
                        
                        
                    </ul>
                   
                </div>
            </div>
            <div className="image_file_edit content_box">
                <p className="content_title">이미지수정</p>
                <div className="image_file_edit_box">
                <form>
                        <fieldset>
                            <legend>image edit</legend>
                            <div className="image_file_edit_input">
                                {currentImage ? (
                                    <>
                                    <ul>
                                    <li><div className="image_edit_ck"><img src={currentImage.image} /></div></li>

                                    <li><div className="img_info">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th>Width</th>
                                                    <td>{currentImage.width}</td>
                                                </tr>
                                                <tr>
                                                    <th>Height</th>
                                                    <td>{currentImage.height}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <p className="th">이미지경로</p>
                                        <p className="td">{currentImage.image}</p>
                                        <p className="th">썸내일경로</p>
                                        <p className="td">{currentImage.thumb}</p>
                                    </div></li>

                                    <li>파일이름:<p>{currentImage.title}</p></li>
                                    <li>제목<input type="text" placeholder={currentImage.title} /></li>
                                    <li>카테고리<input type="text" placeholder={currentImage.category} /></li>
                                    <li>가격<input type="text" placeholder={Math.round(currentImage.price)} /></li>
                                </ul>
                                <div className="bt_box">
                                    <ul className="save_bt">
                                        <li><a href="#">저장</a></li>
                                    </ul>
                                    <ul className="delete_bt">
                                        <li><a href="#">삭제</a></li>
                                    </ul>
                                </div>
                                </>
                                ): "선택된 이미지없음"}
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ImageEdit;