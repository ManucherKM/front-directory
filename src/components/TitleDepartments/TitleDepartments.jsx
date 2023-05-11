import classes from './TitleDepartments.module.scss'

const TitleDepartments = ({ children, ...props }) => {
	return (
		<div className={classes.wrapper} {...props}>
			<h4>{children}</h4>
		</div>
	)
}

export default TitleDepartments
