import classes from './Footer.module.scss'
import logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<footer className={classes.wrapper}>
			<div className='container'>
				<div className={classes.wrapper_logo}>
					<img src={logo} alt='logo' />
				</div>
				<div className={classes.wrapper_content}>
					<div>
						<h5>Объявления</h5>
						<Link to={'/'}>Расписание занятий</Link>
						<Link to={'/'}>
							Обучение с применением дистанционных образовательных технологий
						</Link>
						<Link to={'/'}>Студенту</Link>
						<Link to={'/'}>Заочное обучение</Link>
						<Link to={'/'}>Обучение инвалидов и лиц с ОВЗ</Link>
					</div>
					<div>
						<h5>Абитуриенту</h5>
						<Link to={'/'}>Приёмная комиссия</Link>
						<Link to={'/'}>Специальности и профессии</Link>
						<Link to={'/'}>Информация об общежитии</Link>
						<Link to={'/'}>Объявления для абитуриентов</Link>
						<Link to={'/'}>Режим работы приемной комиссии</Link>
					</div>
					<div>
						<h5>О колледже</h5>
						<Link to={'/'}>Обучение инвалидов и лиц с ОВЗ</Link>
						<Link to={'/'}>
							Обучение с применением дистанционных образовательных технологий
						</Link>
						<Link to={'/'}>Государственная итоговая аттестация</Link>
						<Link to={'/'}>Демонстрационный экзамен</Link>
						<Link to={'/'}>
							Правила внутреннего распорядка для обучающихся колледжа
						</Link>
					</div>
					<div>
						<h5>РКЦ</h5>
						<Link to={'/'}>Внеучебная деятельность</Link>
						<Link to={'/'}>
							Правила внутреннего распорядка для обучающихся колледжа
						</Link>
						<Link to={'/'}>Режим работы медицинского кабинета</Link>
						<Link to={'/'}>Общежитие</Link>
						<Link to={'/'}>Профилактическая работа</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
