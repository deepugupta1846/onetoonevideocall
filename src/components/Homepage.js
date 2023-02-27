import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Homepage = () => {
  const [roomid, setRoomid] = useState("");
  const navigate = useNavigate();
  const createButtonHandle = () => {
    navigate(`/room/${roomid}`);
  };
  return (
    <>
      <input
        type="text"
        placeholder="Enter room id"
        onChange={(e) => {
          setRoomid(e.target.value);
        }}
      />
      <button onClick={createButtonHandle}>create</button>
    </>
  );
};
export default Homepage;
