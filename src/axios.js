import axios from 'axios'

export const url = 'https://project-1-1.manucherkm.repl.co'

const instance = axios.create({
	baseURL: url,
})

export default instance
