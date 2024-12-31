import { Button, Input } from "antd";
import React, { useState } from "react";
import { userActionCreator } from "../../../store/ui/login/slices";
import { ILoginData } from "../../../store/ui/login/types";
 import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
 import { useSelector } from "react-redux";
import { isLoginSelector } from "../selectors";


const Login = () => {
  const dispatch = useDispatch()
  // const history = useHistory()
  const [error,setError]=useState(false)

  const [form, setForm] = useState<ILoginData>({
    username: "",
    password: "",
    EmpId:11
  });

  const isLogin = useSelector(isLoginSelector)
  
  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault()
    if (form.username === 'Rushisp156@gmail.com' && form?.password === '123') {
       dispatch(userActionCreator.loginData({
      username:form.username,password:form.password,EmpId:form.EmpId
    }))
    //  history.push('/User');
    }
    else {
      console.log("invalid")
      setError(true)
    }
   

  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formCopy = {
      ...form,
    };

    formCopy.username = e.target.value;
    setForm(formCopy)

    
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formCopy = {
      ...form,
    };
    formCopy.password = e.target.value;
      setForm(formCopy)
  };

  return (
    <><div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        background: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <form>
          <p style={{ color: 'red' }}>{error ? "Please enter valid username or password" : ''}</p>
          <label>Enter UserName </label>
          <Input
            style={{ width: "100%" }}
            type="email"
            placeholder="Email"
            value={form.username}
            onChange={(e) => {
              handleEmailChange(e);
            } } />
          <br />
          <br />
          <label>Enter Password </label>
          <Input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => { handlePasswordChange(e); } } />
          <br />
          <br />

          <Button
            onClick={handleSubmit}
            style={{ width: "100%" }}
            type="primary"
          >
            Submit
          </Button>
        </form>
      </div>
    </div></>
  );
};

export default Login;
