const Button = ({ onClick, classIcon }) => {
	return (
		<button
			onClick={onClick}
			className='burger'>
			<i className={classIcon}></i>
		</button>
	);
};

export default Button;
