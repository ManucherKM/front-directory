import axios from 'axios'

const url = 'https://project-1-1.manucherkm.repl.co'

const instance = axios.create({
	baseURL: url,
})

export default instance
