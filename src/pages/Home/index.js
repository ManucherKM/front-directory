import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import classes from './index.module.scss'
import Title from '../../components/Title/Title'
import ManagementCard from '../../components/ManagementCard/ManagementCard'
import { useStore } from '../../store'
import List from '../../components/List'
import { url } from '../../axios'
import DivisionsItem from '../../components/DivisionsItem/DivisionsItem'

const roleManagement = 'Руководитель'

const Home = () => {
	const [managements, setManagements] = useState([])
	const [divisions, setDivisions] = useState([])

	const getDivisions = useStore(state => state.getDivisions)
	const getManagements = useStore(state => state.getManagements)

	useEffect(() => {
		const fetchData = async () => {
			const divisions = await getDivisions()

			if (!divisions) {
				return
			}

			setDivisions(divisions)

			const managements = await getManagements()

			if (!managements) {
				return
			}

			setManagements(managements)
		}

		fetchData()
	}, [])

	return (
		<>
			<NavBar />
			<div className={classes.wrapper}>
				<div className='container'>
					<div className={classes.wrapper_management}>
						<Title>Руководство</Title>
						<div className={classes.management}>
							<List
								arr={managements}
								callback={management => {
									if (management.role === roleManagement) {
										return (
											<ManagementCard
												key={management.id}
												number={management.number}
												email={management.email}
												fullName={management.fullName}
												img={url + '/image/' + management.photo}
											/>
										)
									}
								}}
							/>
						</div>
					</div>
					<div className={classes.wrapper_books}>
						<Title>Телефонные книжки структурных подразделений</Title>
						<div className={classes.books}>
							<List
								arr={divisions}
								callback={division => (
									<DivisionsItem name={division.name} id={division.id} />
								)}
							/>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Home
