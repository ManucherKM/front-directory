import axios from '../axios'
import { create } from 'zustand'

const useStore = create(set => ({
	auth: false,
	login: async (login, password) => {
		if (!login || !password) {
			return
		}

		const params = {
			email: login,
			password,
		}

		const { data } = await axios.post('/admin/auth', params)

		if (!data) {
			return
		}

		set({ auth: true })

		return data
	},
	logout: () => {
		set({ auth: false })
	},
}))

export { useStore }
