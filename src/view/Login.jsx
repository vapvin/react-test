import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../utils/Auth/auth';

const Login = ({history}) => {

    const [logged, setLogged] = useState({
        username: "",
        password: "",
    });

    const [error, setError] = useState("");

    const dispatch = useDispatch()

    const getInputData = e => {
        const {value, name} = e.target;
        setLogged({
            ...logged, 
            [name]: value
        })
    }

    const loginReq = e => {
        e.preventDefault();
        dispatch(loginUser(logged))
            .then(res => {
                console.log(res)
                if(res.payload.key !== ""){
                   
                    history.push("/");
                } else {
                    setError("가입에 실패하셨습니다.")
                }
            });
    }
    
    return (
        
            <div className="login_wrap">
                <form onSubmit={loginReq}>
                    <fieldset>
                        <legend>LOGIN</legend>
                        <div className="login">
                            <div className="login_img">
                                <img src="/static/image/padlock.png" />
                            </div>
                            <ul>
                                <li>아이디<input name="username" type="text" placeholder="Enter username" onChange={getInputData} /></li>
                                <li>비밀번호<input name="password" type="password" placeholder="Enter Password" onChange={getInputData} /></li>
                            </ul>
                            <ul className="login_ck">
                                <li><Link to="/join">회원가입</Link></li>
                            </ul>
                            <ul className="login_bt">
                                <li><button className="auth-btn">로그인</button></li>
                            </ul>
                        </div>
                    </fieldset>
                </form>
            </div>
        
    )
}

export default Login;