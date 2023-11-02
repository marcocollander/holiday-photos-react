const Button = ({onClick, classNameIcon = 'fas fa-times'}) => {
  
  return (
    <button onClick={onClick} className="burger">
      <i className={classNameIcon}></i>
    </button>
  );
};

export default Button;
