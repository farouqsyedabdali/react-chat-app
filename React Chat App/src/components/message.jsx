import PropTypes from 'prop-types';
import { UserAuth } from '../context/auth_context';

const Message = ({ message, showUsername, showProfilePic }) => {
  const { currentUser } = UserAuth();

  const isCurrentUserMessage = message.uid === currentUser.uid;
  const messageClassName = isCurrentUserMessage ? "chat-end current-user" : "chat-start";

  return (
    <div>
      <div className={`chat ${messageClassName}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            {showProfilePic && <img src={message.profilePic} alt="Profile" />}
          </div>
        </div>
        <div className="chat-header">
          {showUsername && message.username}
        </div>
        <div className={`chat-bubble ${isCurrentUserMessage ? 'current-theme-color' : ''}`}>
          {message.text}
        </div>
      </div>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.object.isRequired,
  showUsername: PropTypes.bool.isRequired,
  showProfilePic: PropTypes.bool.isRequired,
};

export default Message;
