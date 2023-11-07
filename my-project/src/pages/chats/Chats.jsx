import React, { useEffect, useState } from "react";
import axios from "axios";
import LogingSignin from "../log/LogingSignin";

const Chats = () => {
  const user = false;
  const [chats, setChats] = useState([]);
  const fetchChats = async () => {
    const { data } = await axios.get(`http://localhost:5000/api/chat`);
    setChats(data);
  };
  console.log(chats);
  useEffect(() => {
    fetchChats();
  }, []);
  return <div>{user ? <>chat</> : <LogingSignin />}</div>;
};

export default Chats;
