import { Route, Routes } from 'react-router'
import { useStore } from './store'
import Login from './pages/Login'
import Home from './pages/Home'
import Book from './pages/Book'
import ChangeEmployee from './pages/ChangeEmployee'
import CreateEmployee from './pages/CreateEmployee'
import NotFound from './pages/NotFound'

const App = () => {
	const isAuth = useStore(state => state.auth)

	return (
		<div>
			{isAuth ? (
				<Routes>
					<Route path='/login' element={<Login />} />
					<Route path='/' element={<Home />} />
					<Route path='/book' element={<Book />} />
					<Route path='/employee/change/:id' element={<ChangeEmployee />} />
					<Route path='/employee/create' element={<CreateEmployee />} />
					<Route path='/*' element={<NotFound />} />
				</Routes>
			) : (
				<Routes>
					<Route path='/login' element={<Login />} />
					<Route path='/' element={<Home />} />
					<Route path='/book' element={<Book />} />
					<Route path='/*' element={<NotFound />} />
				</Routes>
			)}
		</div>
	)
}

export default App
