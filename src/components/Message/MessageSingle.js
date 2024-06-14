import React from "react";

const MessageSingle = ({ user, message, classs }) => {
  if (user) {
    return (
      <div className={`message ${classs}`}>
        <p>{`${user} : ${message}`} </p>
      </div>
    );
  } else {
    return (
      <div className="message left">
        <p>{`You : ${message}`} </p>
      </div>
    );
  }
};

export default MessageSingle;
