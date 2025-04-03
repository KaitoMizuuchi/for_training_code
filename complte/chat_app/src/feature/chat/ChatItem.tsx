type ChatItemProps = {
  status: string;
  msg: string;
  date: string;
};

const ChatItem = ({ status, msg, date }: ChatItemProps) => {
  return (
    <>
      <li className={`p-chat__box-item --${status}`}>
        <p className="p-chat__box-msg">{msg}</p>
        <span className="p-chat__box-date">{date}</span>
      </li>
    </>
  );
};

export default ChatItem;
