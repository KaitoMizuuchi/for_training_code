import { ChangeEvent, FormEvent, useState } from "react";
import ChatForm from "../feature/chat/ChatForm";
import ChatList from "../feature/chat/ChatList";
import { validateRequired } from "../utils/validate";
import { formatCurrentData } from "../utils/formatCurrentDate";
import { ChatData } from "../types/chat";

// 入力時の初期値
const INITIAL_INPUT = {
  msg: "",
  date: "",
  status: "you",
};

// エラー時の初期値
const INITIAL_ERROR = {
  msg: "",
};

const Chat = () => {
  // 入力した状態を管理
  const [inputData, setInputData] = useState<ChatData>(INITIAL_INPUT);
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setInputData((prev) => ({ ...prev, [id]: value }));
  };

  /**
   * 送信ボタンを押したときの処理
   */
  // チャット全体のデータを管理
  const [chatData, setChatData] = useState<ChatData[]>([]);
  // エラーメッセージの状態管理
  const [error, setError] = useState(INITIAL_ERROR);

  // formを入力したあとでリセットする処理
  const resetForm = () => {
    setInputData(INITIAL_INPUT);
    setError(INITIAL_ERROR);
  };

  const handleSendMsg = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // バリデーションチェック
    const newError = {
      msg: validateRequired(inputData.msg, "メッセージを入力してください"),
    };
    const hasError = Object.values(newError).some((error) => error !== "");
    if (hasError) {
      setError(newError);
    } else {
      const newChatData = {
        ...inputData,
        date: formatCurrentData(),
      };
      setChatData((prev) => [...prev, newChatData]);
      resetForm();
    }
  };

  return (
    <div className="p-chat">
      <h1 className="p-chat__title">チャット</h1>
      <ChatList chatData={chatData} />
      <ChatForm
        handleInputChange={handleInputChange}
        handleSendMsg={handleSendMsg}
        errorMsg={error.msg}
        inputData={inputData}
      />
    </div>
  );
};

export default Chat;
