import axios from 'axios'

const { REACT_APP_SERVER_PORT } = process.env

const api = axios.create({
  baseURL: `http://localhost:${REACT_APP_SERVER_PORT}`
})

export default api