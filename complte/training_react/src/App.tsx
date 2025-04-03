import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import MyName from "./components/MyName";

function App() {
  const [counter, setCounter] = useState<number>(0);

  const handleCounter = () => {
    // prev++とすると、状態更新前のprevを返すことになるため、状態が変わらない
    setCounter((prev) => ++prev);
  };

  const [num1, setNum1] = useState<string>("0");
  const [num2, setNum2] = useState<string>("0");
  const [total, setTotal] = useState<number>(0);

  console.log(num1, num2);

  // useEffectのなかで依存している変数を変更する処理は書かないこと。
  useEffect(() => {
    const result = Number(num1) + Number(num2);
    setTotal(result);
  }, [num1, num2]);

  return (
    <>
      <h1 className="title">Reactを触ってみよう</h1>
      <div>React研修</div>
      <MyName />
      <Button label={"クリック"} />
      <Button label={"送信"} onClick={handleCounter} />
      <p>useStateで管理する変数：{counter}</p>
      <h2>計算機</h2>
      <input
        type="text"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />{" "}
      +{" "}
      <input
        type="text"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />{" "}
      = <span>{total}</span>
    </>
  );
}

export default App;
