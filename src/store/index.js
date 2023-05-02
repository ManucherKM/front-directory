import axios from 'axios'
import { create } from 'zustand'

const useStore = create(set => ({
	auth: false,
	login: async (login, password) => {
		if (!login || !password) {
			return
		}

		const params = {
			login,
			password,
		}

		const { data } = await axios.post(params)

		if (!data) {
			return
		}

		set({ auth: true })
	},
	logout: () => {
		set({ auth: false })
	},
}))

export { useStore }
