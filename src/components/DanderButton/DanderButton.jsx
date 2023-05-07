import classes from './DanderButton.module.scss'

const DanderButton = ({ children, ...props }) => {
	return (
		<button className={classes.button} {...props}>
			{children}
		</button>
	)
}

export default DanderButton
