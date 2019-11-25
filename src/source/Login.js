import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "react-apollo-hooks";

import "../css/Login.css";
import logo from "../image/logo.png";

// 쿼리 ?��?��
const SIGN_IN = gql`
  mutation storeSignIn($storeId: String!, $pwd: String!) {
    storeSignIn(storeId: $storeId, pwd: $pwd)
  }
`;

const Login = () => {
  const [ id, setID ] = useState("");
  const [ pwd, setPWD ] = useState("");
 
//var id="dsf";
//var pwd="dddd";
  const [signInMutation,{loading}] = useMutation(SIGN_IN, {
    variables: {
      storeId: id,
      pwd
    }
  });

  const handlePressLogin = async () => {
    try{
      // 로그?�� 버튼 리스?��
      const {
       data: { storeSignIn } 
      } = await signInMutation();
      console.log(storeSignIn); // JWT ?��?��
    }catch(e){
      console.log(e);
    }
   };
  return (
      loading?
      <div>야아아아아아아</div>:
      <div className="header">
        <div className="main_bar">
          <div className="logo">
            <img src={logo} alt="Logo" width="100px" height="auto" />
          </div>
          <p className="main_title">아이디랑 비밀번호를 입력해주세요.</p>
          <form>
            <input
              className="form-item"
              placeholder="아이디"
              name="username"
              type="text"
              value={id}
              onChange={(text)=>setID(text.target.value)}
            />
            <input
              className="form-item"
              placeholder="비밀번호"
              name="password"
              type="password"
              value={pwd}
              onChange={(text)=>setPWD(text.target.value)}
            />
            <input
              className="form-submit"
              value="로그인"
              type="submit"
              onClick={handlePressLogin}
            />
          </form>
        </div>
      </div>
    );
      
};

export default Login;
