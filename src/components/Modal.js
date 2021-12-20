import ReactDOM from 'react-dom';

const Modal = ({ handleModalClick, children }) => {
  return ReactDOM.createPortal(
    <div className='modal-backdrop'>
      <div className='modal'>
        {children}
        <button onClick={handleModalClick}>Close</button>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
