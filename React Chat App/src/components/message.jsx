import PropTypes from 'prop-types';
import { UserAuth } from '../context/auth_context';

const Message = ({message}) => {
  const { currentUser } = UserAuth();

  console.log(message)
  return (
    <div>
      <div className={`chat ${message.uid === currentUser.uid ? "chat-end" : "chat-start"}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={message.profilePic} />
          </div>
        </div>
        <div className="chat-header">
          {message.username}
        </div>
        <div className="chat-bubble">{message.text}</div>
      </div>
    </div>
  )
}

Message.propTypes = {
  message: PropTypes.object.isRequired,
};

export default Message