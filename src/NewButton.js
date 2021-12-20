import styles from './NewButton.module.css';

const NewButton = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default NewButton;
