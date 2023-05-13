import { useState } from 'react'
import ItemCompound from '../ItemCompound/ItemCompound'
import TitleDepartments from '../TitleDepartments/TitleDepartments'
import classes from './BookCompound.module.scss'

const BookCompound = ({ title, employees }) => {
	const [visible, setVisible] = useState(false)

	function visibleHandler(e) {
		setVisible(p => !p)
	}

	return (
		<div className={classes.wrapper}>
			<TitleDepartments onClick={visibleHandler}>{title}</TitleDepartments>

			{visible && (
				<div>
					{employees.length === 0 ? (
						<p className={classes.error}>Сотрудники не найдены</p>
					) : (
						<div className={classes.employees}>
							{employees.map(e => (
								<ItemCompound
									key={e._id}
									email={e.email}
									fullName={e.fullName}
									id={e._id}
									number={e.number}
									role={e.role}
								/>
							))}
						</div>
					)}
				</div>
			)}
		</div>
	)
}

export default BookCompound
