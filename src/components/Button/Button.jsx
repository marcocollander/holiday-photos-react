const Button = ({onClick}) => {
  
  return (
    <button onClick={onClick} className={'burger'}>
      <i className={'fas fa-bars burger__icon'}></i>
    </button>
  );
};

export default Button;
