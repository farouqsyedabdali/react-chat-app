import { useEffect, useRef, useState } from "react";
import Message from "./message"
import { collection, query, onSnapshot, orderBy, limit } from "firebase/firestore";
import { db } from "../firebase";

const Chatbox = () => {
  const messagesEndRef = useRef();
  const [messages, setMessages] = useState([]);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth"})
  }

  useEffect(scrollToBottom, [messages])

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages)
    });

    return () => unsubscribe;
  }, [])

  return (
    <div className="pb-44 pt-20 containerWrap">
      {messages.map((message, index) => {
        const showUsername = index === 0 || messages[index - 1].uid !== message.uid;
        const showProfilePic = index === messages.length - 1 || messages[index + 1].uid !== message.uid;
        return <Message key={message.id} message={message} showUsername={showUsername} showProfilePic={showProfilePic} />
      })}
      <div ref={messagesEndRef}></div>
    </div>
  )
}

export default Chatbox;
