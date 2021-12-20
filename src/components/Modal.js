import ReactDOM from 'react-dom';

const Modal = ({ handleModalClick, children }) => {
  return ReactDOM.createPortal(
    <div className='modal-backdrop'>
      <div className='modal'>{children}</div>
    </div>,
    document.body
  );
};

export default Modal;
