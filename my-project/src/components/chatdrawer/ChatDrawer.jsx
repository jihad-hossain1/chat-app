import React, { useState } from "react";
import Search from "./Search";
import Notification from "./Notification";
import Profile from "./Profile";

const ChatDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [chatLoading, setchatLoading] = useState();
  return (
    <div className="mb-3 border-b pb-4 flex justify-between">
      <Search />
      <div className="flex gap-4 items-center">
        <Notification />
        <Profile />
      </div>
    </div>
  );
};

export default ChatDrawer;
