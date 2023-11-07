import React, { useEffect, useState } from "react";
import axios from "axios";
import LogingSignin from "../log/LogingSignin";
import { ChatState } from "../../context/ChatProvider";
import ChatDrawer from "../../components/chatdrawer/ChatDrawer";
import Mychat from "../../components/mychat/Mychat";
import ChatBox from "../../components/ChatBox/ChatBox";
import { useNavigate } from "react-router-dom";
// import { chatState } from "../../context/ChatProvider";

const Chats = () => {
  const { user } = ChatState();
  console.log(user);
  const navigate = useNavigate();
  // const user = true;
  // const [chats, setChats] = useState([]);
  // const fetchChats = async () => {
  //   const { data } = await axios.get(`http://localhost:5000/api/chat`);
  //   setChats(data);
  // };
  // console.log(chats);
  // useEffect(() => {
  //   fetchChats();
  // }, []);
  return (
    <div>
      {user ? (
        <div>
          <div>
            <ChatDrawer />
            <div className="flex justify-between">
              <Mychat />
              <ChatBox />
            </div>
          </div>
        </div>
      ) : (
        <LogingSignin />
      )}
    </div>
  );
};

export default Chats;
