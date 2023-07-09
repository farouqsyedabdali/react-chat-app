import { useState, useEffect } from "react";
import { UserAuth } from "../context/auth_context";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import ErrorMessage from "./error_message";

const SendMessage = () => {
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { currentUser } = UserAuth();

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (value.trim() === "") {
      setErrorMessage("Enter a valid message!");
      return;
    }

    try {
      const { uid, displayName, photoURL } = currentUser;
      await addDoc(collection(db, "messages"), {
        text: value,
        username: displayName,
        profilePic: photoURL,
        createdAt: serverTimestamp(),
        uid,
      });
    } catch (error) {
      console.log("Error while sending message:", error);
    }

    setValue("");
  };

  useEffect(() => {
    let timer;
    if (errorMessage) {
      timer = setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [errorMessage]);

  return (
    <div className="current-theme-color-accent fixed bottom-0 w-full py-10 shadow-lg">
      <form onSubmit={handleSendMessage} className="px-2 containerWrap flex">
        <div className="relative w-full">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="input w-full focus:outline-none bg-gray-100 rounded-r-none"
            type="text"
          />
          {value.trim() === "" && (
            <p className="send-message-text absolute top-0 left-0 mt-1 ml-2 text-xs text-gray-300">Send a message</p>
          )}
        </div>
        <button
          type="submit"
          className="w-auto current-theme-color-primary text-white rounded-r-lg px-5 text-sm"
        >
          Send
        </button>
      </form>
      <ErrorMessage errorMessage={errorMessage} />
    </div>
  );
};

export default SendMessage;
