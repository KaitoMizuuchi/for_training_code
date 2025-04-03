import TextInput from "../components/TextInput";
import SendButton from "../components/SendButton";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";
import { validateRequired } from "../utils/validate";

const Login = () => {
  // パスワード入力欄のtypeを変更する処理
  const TYPE_PASSWORD = "password";
  const TYPE_TEXT = "text";
  const [inputType, setInputType] = useState(TYPE_PASSWORD);
  const togglePassOpen = () => {
    const newType = inputType === TYPE_PASSWORD ? TYPE_TEXT : TYPE_PASSWORD;
    setInputType(newType);
  };

  // 入力した情報を管理
  const [inputData, setInputData] = useState({
    mail: "",
    password: "",
  });
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setInputData((prev) => ({ ...prev, [id]: value }));
  };

  // ログインボタンをクリックしたときの処理
  const navigate = useNavigate();
  const [error, setError] = useState({
    mail: "",
    password: "",
  });

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newError: { mail: string; password: string } = {
      mail: validateRequired(
        inputData.mail,
        "メールアドレスを入力してください"
      ),
      password: validateRequired(
        inputData.mail,
        "パスワードを入力してください"
      ),
    };

    // エラーの文字列があるか確認
    const hasError = Object.values(newError).some((error) => error !== "");
    if (hasError) {
      setError(newError);
    } else {
      navigate("/chat");
    }
  };

  return (
    <div className="p-login">
      <h1 className="p-login__title">ログイン画面</h1>
      <form action="post" className="p-login__form" onSubmit={handleLogin}>
        <div className="p-login__form-input-wrapper">
          <label htmlFor="mail" className="p-login__label">
            <p className="p-login__label-title">mail</p>
            <TextInput
              type="text"
              id="mail"
              className="p-input__form-input"
              placeholder="メールアドレス"
              value={inputData.mail}
              onChange={handleInputChange}
              errorMsg={error.mail}
            />
          </label>
          <label htmlFor="password" className="p-login__label">
            <p className="p-login__label-title">password</p>
            <TextInput
              type={inputType}
              id="password"
              className="p-input__form-input"
              placeholder="パスワード"
              value={inputData.password}
              onChange={handleInputChange}
              togglePassOpen={togglePassOpen}
              errorMsg={error.password}
              isPassword
            />
          </label>
        </div>
        <div className="p-login__form-btn-wrapper">
          <SendButton width="250px" label="ログイン" />
        </div>
      </form>
    </div>
  );
};

export default Login;
