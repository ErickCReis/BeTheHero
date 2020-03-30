import axios from 'axios'

const api = axios.create({
  baseURL: 'https://be-th-api.herokuapp.com/',
})

export default api
