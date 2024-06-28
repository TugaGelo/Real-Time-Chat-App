import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced";
import "./App.css";

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    '91634652-ae55-4326-b5c9-cfbef6ecf209', 
    props.user.username, 
    props.user.secret
  );

  return (
    <div style={{ height: "100vh" }}>
      <MultiChatWindow {...chatProps} />
      <MultiChatSocket {...chatProps} style={{ height: "100%"}} />
    </div>
  );
};

export default ChatsPage;