import React, { useEffect, useState } from "react";
import "./Message.css";
import { useSelector } from "react-redux";
import pic from "../../images/profilepng.png";
import { AiOutlineSend } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import socketIo from "socket.io-client";
import ReactScrollToBottom from "react-scroll-to-bottom";
import MessageSingle from "./MessageSingle";

//Backend Part
const ENDPOINT = "http://localhost:4000";
// const socket = io("http://localhost:4000");

const Message = () => {
  const socket = socketIo(ENDPOINT, { transports: ["websocket"] });

  const { user, isAuthenticated } = useSelector((state) => state.user);
  const history = useNavigate();
  const date = Date.now();
  const allUserArray = [
    {
      name: "Pantha",
      pic: pic,
    },
    {
      name: "Pantha",
      pic: pic,
    },
    {
      name: "Pantha",
      pic: pic,
    },
    {
      name: "Showrab",
      pic: pic,
    },
    {
      name: "Showrab",
      pic: pic,
    },
    {
      name: "Showrab",
      pic: pic,
    },
    {
      name: "Showrab",
      pic: pic,
    },
    {
      name: "Showrab",
      pic: pic,
    },
  ];

  const [userData, setUserData] = useState();

  const [id, setId] = useState("");
  const [messages, setMessages] = useState([]);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      let message = document.getElementById("message").value;
      socket.emit("message", { message, id });
      document.getElementById("message").value = "";
    }
  };

  useEffect(() => {
    if (!isAuthenticated) {
      history("/login");
    } else {
      //Backend Part
      socket.on("connect", () => {
        alert("Connected");
        setId(socket.id);
      });
      console.log(socket);
      socket.emit("joined", { user: user });
      socket.on("userJoined", (data) => {
        console.log(data.user, data.message);
      });
      return () => {
        socket.emit("disconnect");
        socket.off();
      };
    }
  }, [isAuthenticated]);
  useEffect(() => {
    socket.on("sendMessage", (data) => {
      setMessages([...messages, data]);
    });
    return () => {
      socket.off();
    };
  }, [messages]);
  return (
    <>
      {isAuthenticated && (
        <div className="message-container-main">
          <div className="message-container">
            <div className="user-box">
              <div className="user-header-box">
                <img src={user.avatar.url} alt="my-profile" />
                <p>{user.name}</p>
              </div>
              {/* <div className="user-search-box">
                <input type="text" placeholder="search any user" />
                <button>search</button>
              </div> */}
              {/* <div className="user-main-box">
                {allUserArray.map((val, ind) => {
                  return (
                    <div key={ind} onClick={() => setUserData(val)}>
                      <img src={val.pic} />
                      <p>{val.name}</p>
                    </div>
                  );
                })}
              </div>
              <div className="user-footer-box">
                <p>pantha2022-@copyright</p>
              </div> */}
            </div>
            <div className="message-box">
              <div className="message-header-box">
                {userData ? (
                  <>
                    <img src={userData.pic} />
                    <p>{userData.name}</p>
                  </>
                ) : (
                  <>
                    <img src={pic} />
                    <p>User Name</p>
                  </>
                )}
              </div>

              <ReactScrollToBottom className="message-middle-box">
                {messages.map((item, ind) => {
                  return (
                    <MessageSingle
                      user={item.user.name}
                      message={item.message}
                      key={ind}
                      classs={item.id === id ? "right" : "left"}
                    />
                  );
                })}
              </ReactScrollToBottom>

              <div className="message-footer-box">
                <input
                  type="text"
                  placeholder="Type your message .........."
                  onKeyDown={(e) => handleKeyDown(e)}
                  id="message"
                />
                {/* <button>
                  <AiOutlineSend />
                </button> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Message;
