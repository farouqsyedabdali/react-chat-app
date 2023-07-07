import Message from "./message"

const Chatbox = () => {

  const messages = [
    {
      id: 1,
      username: "Farouq",
      text: "Hello there!"
    },

    {
      id:2,
      username:"Mama",
      text: "Hi"
    }
    
  ]

  return (
    <div className="pb-44 pt-20 containerWrap">
      {messages.map(message => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  )
}

export default Chatbox