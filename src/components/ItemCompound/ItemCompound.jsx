import { Link } from 'react-router-dom'
import { useStore } from '../../store'
import DanderButton from '../DanderButton/DanderButton'
import classes from './ItemCompound.module.scss'

const ItemCompound = ({ fullName, role, number, email, id }) => {
	const isAuch = useStore(state => state.auth)
	const removeEmployee = useStore(state => state.removeEmployee)

	function remove() {
		console.log(id)
		removeEmployee(id)
	}

	return (
		<div className={classes.wrapper}>
			<div>
				<p className={classes.fullName}>{fullName}</p>
				<p className={classes.role}>{role}</p>
			</div>
			<div>
				<p className={classes.number}>
					<svg
						width="19"
						height="18"
						viewBox="0 0 19 18"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M5.6186 1.59332C4.771 0.745732 3.36231 0.824133 2.7397 1.84843C1.82998 3.34508 1 5.22998 1 7.11669C1 9.40604 2.44106 10.8503 3.93035 12.343C4.16851 12.5817 4.40794 12.8216 4.64287 13.0665C4.81755 13.2485 4.99073 13.4323 5.16361 13.6157C6.77084 15.3214 8.35259 17 10.8833 17C12.9727 17 14.9106 16.3516 16.507 15.2452C17.403 14.6241 17.3825 13.3572 16.6116 12.5863L15.2616 11.2363C14.5107 10.4855 13.2934 10.4855 12.5426 11.2363V11.2363C11.7917 11.9871 10.5744 11.9871 9.82357 11.2363L7.30115 8.71386C6.55032 7.96303 6.55032 6.74569 7.30115 5.99487V5.99487C8.05197 5.24404 8.05197 4.0267 7.30115 3.27587L5.6186 1.59332Z"
							stroke="#F2650C"
							strokeWidth="2"
							strokeLinejoin="round"
						/>
					</svg>
					{number}
				</p>
			</div>
			<div>
				<p className={classes.email}>
					<svg
						width="18"
						height="14"
						viewBox="0 0 18 14"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M2 2.63393V2H16V2.63393C15.9815 2.64462 15.9633 2.65595 15.9453 2.66795L9 7.29815L2.0547 2.66795C2.0367 2.65595 2.01846 2.64462 2 2.63393ZM2 5.03518V12H16V5.03518L9.5547 9.33205C9.2188 9.55598 8.7812 9.55598 8.4453 9.33205L2 5.03518ZM0 1C0 0.447716 0.447715 0 1 0H17C17.5523 0 18 0.447715 18 1V13C18 13.5523 17.5523 14 17 14H1C0.447716 14 0 13.5523 0 13V1Z"
							fill="#F2650C"
						/>
					</svg>
					{email}
				</p>
			</div>

			{isAuch && (
				<div className={classes.wrapper_btn_navigate}>
					<Link to={'/employee/change/' + id}>
						<svg
							width="20"
							height="19"
							viewBox="0 0 27 26"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M15.1139 5.23858L21.1486 11.2733L22.5628 9.85906L16.5281 3.82437L15.1139 5.23858ZM25.116 6.47427C25.0476 7.42035 24.6444 8.10622 24.518 8.29895L10.6066 22.2104L1.45439 24.7305L3.97457 15.5783L17.886 1.66691C18.0787 1.54055 18.7646 1.13735 19.7107 1.06891C20.6562 1.0005 21.9798 1.25534 23.4547 2.73024C24.9296 4.20514 25.1844 5.52872 25.116 6.47427Z"
								stroke="#EAEAEA"
								strokeWidth="2"
							/>
						</svg>
					</Link>
					<DanderButton onClick={remove}>
						<svg
							width="14"
							height="14"
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0.730285 0.730285C1.1605 0.300603 1.74368 0.0592544 2.35172 0.0592544C2.95976 0.0592544 3.54294 0.300603 3.97315 0.730285L10 6.75713L16.0268 0.730285C16.2369 0.504854 16.4902 0.324041 16.7717 0.198633C17.0531 0.0732262 17.357 0.00579282 17.665 0.000357082C17.9731 -0.00507866 18.2791 0.0515947 18.5648 0.166995C18.8505 0.282395 19.1101 0.454161 19.328 0.672041C19.5458 0.889922 19.7176 1.14945 19.833 1.43516C19.9484 1.72086 20.0051 2.02688 19.9996 2.33496C19.9942 2.64304 19.9268 2.94687 19.8014 3.22833C19.676 3.50978 19.4952 3.7631 19.2697 3.97315L13.2429 10L19.2697 16.0268C19.4952 16.2369 19.676 16.4902 19.8014 16.7717C19.9268 17.0531 19.9942 17.357 19.9996 17.665C20.0051 17.9731 19.9484 18.2791 19.833 18.5648C19.7176 18.8505 19.5458 19.1101 19.328 19.328C19.1101 19.5458 18.8505 19.7176 18.5648 19.833C18.2791 19.9484 17.9731 20.0051 17.665 19.9996C17.357 19.9942 17.0531 19.9268 16.7717 19.8014C16.4902 19.676 16.2369 19.4952 16.0268 19.2697L10 13.2429L3.97315 19.2697C3.7631 19.4952 3.50978 19.676 3.22833 19.8014C2.94687 19.9268 2.64304 19.9942 2.33496 19.9996C2.02688 20.0051 1.72086 19.9484 1.43516 19.833C1.14945 19.7176 0.889922 19.5458 0.672041 19.328C0.454161 19.1101 0.282395 18.8505 0.166995 18.5648C0.0515947 18.2791 -0.00507866 17.9731 0.000357082 17.665C0.00579282 17.357 0.0732262 17.0531 0.198633 16.7717C0.324041 16.4902 0.504854 16.2369 0.730285 16.0268L6.75713 10L0.730285 3.97315C0.300603 3.54294 0.0592544 2.95976 0.0592544 2.35172C0.0592544 1.74368 0.300603 1.1605 0.730285 0.730285Z"
								fill="white"
							/>
						</svg>
					</DanderButton>
				</div>
			)}
		</div>
	)
}

export default ItemCompound
