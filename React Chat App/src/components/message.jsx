import PropTypes from 'prop-types';

const Message = ({message}) => {
  return (
    <div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="" />
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