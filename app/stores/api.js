import { create } from 'apisauce'
import config from '../config'

const api = create({
  baseURL: config.apiBaseURL,
  timeout: 10000
});

export default api
