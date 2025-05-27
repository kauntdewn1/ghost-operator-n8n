import axios from 'axios'

const username = import.meta.env.VITE_N8N_USER
const password = import.meta.env.VITE_N8N_PASS
const baseURL = import.meta.env.VITE_N8N_BASE_URL

if (!username || !password || !baseURL) {
  throw new Error('N8N auth or base URL missing in environment variables')
}

const api = axios.create({
  baseURL,
  auth: { username, password }
})

// Interceptor para requisições
api.interceptors.request.use(
  (config) => {
    console.log('Request:', {
      url: config.url,
      method: config.method,
      baseURL: config.baseURL,
      headers: config.headers
    })
    return config
  },
  (error) => {
    console.error('Request Error:', error)
    return Promise.reject(error)
  }
)

// Interceptor para respostas
api.interceptors.response.use(
  (response) => {
    console.log('Response:', {
      status: response.status,
      data: response.data
    })
    return response
  },
  (error) => {
    console.error('Response Error:', {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
      config: {
        url: error.config?.url,
        method: error.config?.method,
        baseURL: error.config?.baseURL
      }
    })
    return Promise.reject(error)
  }
)

export const triggerGhost = (
  persona: '/cash' | '/web3' | '/oni' | '/mkt' | '/dev' | '/creator' | '/flowoff' | '/flw',
  idea: string,
  chatId?: string
) => {
  const text = `${persona} ${idea}`
  return api.post('/webhook/ghost-mello', {
    message: {
      text,
      ...(chatId && { chat: { id: chatId } })
    }
  })
}
