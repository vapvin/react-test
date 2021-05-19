import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {registerUser} from '../utils/Auth/auth';
import {Link} from 'react-router-dom'

function Join({history}){

    const [regist, setRegist] = useState({
        username: "",
        email: "",
        password1: "",
        password2: ""
    });

    const [error, setError] = useState("");

    const dispatch = useDispatch()

    const getInputData = e => {
        const {value, name} = e.target;
        setRegist({
            ...regist, 
            [name]: value
        })
    }

    const joinReq = e => {
        e.preventDefault();
        if(regist.password1 !== regist.password2){
            setError("비밀번호가 틀립니다.")
        } else {
            dispatch(registerUser(regist))
            .then(res => {
                console.log(res)
                if(res.payload.key !== ""){
                    alert("회원가입이 완료되었습니다.");
                    history.push("/");
                } else {
                    setError("가입에 실패하셨습니다.")
                }
            });
            
        }
    }
    
    return(
        <>
        <div className="register_wrap">
        <form onSubmit={joinReq}>
            <fieldset>
                <legend>Register</legend>
                <div className="register">
                    <div className="register_img">
                        <img src="/static/image/padlock.png"/>
                    </div>
                    <ul>
                        <li>아이디<input name="username" onChange={getInputData} type="text" placeholder="Enter username"/></li>
                        <li>Email<input name="email" onChange={getInputData} type="text" placeholder="Enter Email"/></li>
                        <li>비밀번호<input name="password1" onChange={getInputData} type="password" placeholder="Enter Password"/></li>
                        <li>비밀번호 확인<input name="password2" onChange={getInputData} type="password" placeholder="Enter Confirm Password"/></li>
                    </ul>
                    {error ? error : null}
                    <ul className="register_bt">
                        <li><button className="auth-btn">가입하기</button></li>
                    </ul>
                </div>
            </fieldset>
        </form>
    </div>
    </>
    )
}

export default Join;