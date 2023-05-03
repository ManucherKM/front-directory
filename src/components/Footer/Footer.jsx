import classes from './Footer.module.scss'
import logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<footer className={classes.wrapper + ' container'}>
			<div className={classes.wrapper_logo}>
				<img src={logo} alt='logo' />
			</div>
			<div className={classes.wrapper_content}>
				<div>
					<h5>Объявления</h5>
					<Link to={'/'}>Расписание занятий</Link>
				</div>
				<div>
					<h5>Абитуриенту</h5>
					<Link to={'/'}>Расписание занятий</Link>
				</div>
				<div>
					<h5>О колледже</h5>
					<Link to={'/'}>Расписание занятий</Link>
				</div>
				<div>
					<h5>РКЦ</h5>
					<Link to={'/'}>Расписание занятий</Link>
				</div>
			</div>
		</footer>
	)
}

export default Footer
