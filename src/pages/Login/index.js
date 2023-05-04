import ActiveInput from '../../components/ActiveInput/ActiveInput'
import SecondaryButton from '../../components/SecondaryButton/SecondaryButton'
import classes from './index.module.scss'
import logo from '../../assets/img/logi_blue.png'
import { useState } from 'react'
import { useStore } from '../../store'
import { useNavigate } from 'react-router-dom'

const Login = () => {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const auth = useStore(state => state.login)
	const redirect = useNavigate()

	async function submitForm(e) {
		e.preventDefault()

		if (!password || !login) {
			return
		}

		const res = await auth(login, password)

		if (!res) {
			return
		}

		redirect('/')
		setLogin('')
		setPassword('')
	}

	return (
		<div className={classes.wrapper}>
			<div className={classes.login}>
				<img src={logo} alt='logo' />
				<form onSubmit={submitForm} className={classes.form}>
					<ActiveInput
						onChange={e => setLogin(e.target.value)}
						value={login}
						placeholder='Логин'
						type='text'
						required
					/>
					<ActiveInput
						onChange={e => setPassword(e.target.value)}
						value={password}
						placeholder='Пароль'
						type='password'
						required
					/>
					<SecondaryButton type='submit'>Войти</SecondaryButton>
				</form>
			</div>
		</div>
	)
}

export default Login
