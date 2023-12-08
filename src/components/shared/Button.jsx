const Button = ({ onClick, active }) => {
  let paragraph = 'w-6 hamburger-item bg-white rounded-2xl';
  let hamburgerItem1 = active && 'rotate';
  let hamburgerItem2 = active && 'none';
  let hamburgerItem3 = active && 'rotate-reverse';
  return (
    <button
      onClick={onClick}
      className={`flex flex-col w-8 h-6 justify-around items-center absolute border-0 bg-none  top-3 right-3`}
    >
      <p className={paragraph + ' ' + hamburgerItem1}></p>
      <p className={paragraph + ' ' + hamburgerItem2}></p>
      <p className={paragraph + ' ' + hamburgerItem3}></p>
    </button>
  );
};

export default Button;
