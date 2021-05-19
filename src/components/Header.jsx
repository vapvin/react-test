import React from 'react';
import {Link, withRouter} from 'react-router-dom';

function Header({location: {pathname}}){
    
    if(pathname === "/join" || pathname === "/login"){
        return null
    } else {
        return (
            <>
                <div className="top_gnb">
                    <div className="mo_side_gnb_bt">
                        <img src="/static/image/menu.png" />
                    </div>
                    <div className="mo_menu">
                        <ul className="content_menu">
                            <li className="active"><Link to="mypage.html"><span><img src="/static/image/settings.png" /></span><p>회원정보 변경</p></Link></li>
                            <li><Link to="image_up.html"><span><img src="/static/image/image01.png" /></span><p>이미지</p></Link>
                                <ul className="content_menu_sub">
                                    <li><Link to="image_up.html">ㆍ이미지 업로드</Link></li>
                                    <li><Link to="image_edit.html">ㆍ이미지 수정 및 삭제</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="mo_logo">
                        <div className="logo_bt">
                            <Link to="mypage.html">
                                <p>web2p</p>
                            </Link>
                        </div>
                    </div>
                    <div className="member">
                        {true ? (
                            <>
                            <Link to="/logout">로그아웃</Link>
                                
                            </>
                        ) : (
                            <>
                                <Link to="/login">Log in</Link>
                                <Link to="/join">Join</Link>
                            </>
                        )}
                    </div>
                </div>
                <div className="side_gnb">
                    <div className="logo_bt">
                        <Link to="/">
                        
                            <p>web2p</p>
                        </Link>
                    </div>
                    <ul className="content_menu">
                        <li className="active"><Link to="#"><span><img src="/static/image/settings.png" /></span><p>회원정보 변경</p></Link></li>
                        <li><Link to="image_up.html"><span><img src="/static/image/image01.png" /></span><p>이미지</p></Link>
                            <ul className="content_menu_sub">
                                <li><Link to="/image-upload">ㆍ이미지 업로드</Link></li>
                                <li><Link to="/image-edit">ㆍ이미지 수정 및 삭제</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}

export default withRouter(Header);
