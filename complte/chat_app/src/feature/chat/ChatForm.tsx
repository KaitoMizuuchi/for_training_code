import TextInput from "../../components/TextInput";
import SendButton from "../../components/SendButton";
import { ChangeEvent, FormEvent } from "react";
import { ChatData } from "../../types/chat";

type ChantFormProps = {
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleSendMsg: (e: FormEvent<HTMLFormElement>) => void;
  inputData: ChatData;
  errorMsg: string;
};

const ChatForm = ({
  handleInputChange,
  handleSendMsg,
  inputData,
  errorMsg,
}: ChantFormProps) => {
  return (
    <form action="post" className="p-chat__form" onSubmit={handleSendMsg}>
      {/* 送信者のステータスを選択 */}
      <select
        name="status"
        id="status"
        className="p-chat__form-select"
        value={inputData.status}
        onChange={handleInputChange}
      >
        <option value="you">you</option>
        <option value="me">me</option>
      </select>
      {/* メッセージを入力 */}
      <div className="p-chat__form-input-wrapper">
        <TextInput
          type="text"
          id="msg"
          className="p-chat__form-input-field"
          placeholder="メッセージ"
          value={inputData.msg}
          onChange={handleInputChange}
          errorMsg={errorMsg}
        />
      </div>
      <div className="p-chat__form-btn-wrapper">
        <SendButton width="120px" label="送信" />
      </div>
    </form>
  );
};

export default ChatForm;
