import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./signin.css";

const Signin = () => {
  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const inputUserName = (e) => {
    setUsername(e.target.value);
  };
  const inputPwd = (e) => {
    setPassword(e.target.value);
  };

  const handleClick = () => {
    axios.post("/auth/signin", {
      username: username,
      password: password,
    });
    // .then((resp) =>
    //   resp.data.message === "ok"
    //     ? alert("회원가입 성공")
    //     : alert("회원가입 실패")
    // );
    setUsername("");
    setPassword("");
    navigate("/");
  };

  const handleClickCancel = () => {
    navigate("/");
  };

  return (
    <div className="signin">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={inputUserName}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={inputPwd}
          className="lInput"
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Sign In
        </button>
        <button
          disabled={loading}
          onClick={handleClickCancel}
          className="lButton"
        >
          Cancel
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Signin;
