import './styles.css';

export const Button = ({ children, isActive, onClick }) => {
  return (
    <button
      className={`button ${isActive ? ' button - active' : ' '}`}
      onCLick={onClick}
    >
      {children}
    </button>
  );
};
