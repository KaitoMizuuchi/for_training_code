import { ChatData } from "../../types/chat";
import ChatItem from "./ChatItem";

type ChatListProps = {
  chatData: ChatData[];
};

const ChatList = ({ chatData }: ChatListProps) => {
  return (
    <ul className="p-chat__box">
      <div className="p-chat__box-inner">
        {/* チャットデータが存在して配列の中身が0(空)ではない場合にmap関数を行う */}
        {chatData?.length !== 0
          ? chatData.map((item, index) => (
              <ChatItem
                key={index}
                status={item.status}
                msg={item.msg}
                date={item.date}
              />
            ))
          : null}
      </div>
    </ul>
  );
};

export default ChatList;
