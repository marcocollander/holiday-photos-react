const Button = ({onClick}) => {
  
  return (
    <button onClick={onClick} className={'burger-icon'}>
      <i className={'fas fa-bars'}></i>
    </button>
  );
};

export default Button;
