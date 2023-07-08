import { useEffect } from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";

const ErrorMessage = ({ errorMessage, clearErrorMessage }) => {
  useEffect(() => {
    let timer;
    if (errorMessage) {
      timer = setTimeout(() => {
        clearErrorMessage();
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [errorMessage, clearErrorMessage]);

  return (
    <CSSTransition
      in={!!errorMessage}
      timeout={300}
      classNames="fade"
      unmountOnExit
    >
      <div className="alert alert-warning errorMessageContainer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <span className="errorMessageText">{errorMessage}</span>
      </div>
    </CSSTransition>
  );
};

ErrorMessage.propTypes = {
  errorMessage: PropTypes.string,
  clearErrorMessage: PropTypes.func,
};

export default ErrorMessage;
