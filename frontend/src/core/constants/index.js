export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/v1/api'

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
}

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  SETTINGS: '/settings'
}

export const STORAGE_KEYS = {
  TOKEN: 'token',
  USER: 'user',
  THEME: 'theme'
}

export const THEME = {
  LIGHT: 'light',
  DARK: 'dark'
}

export const LANGUAGES = {
  VI: 'vi',
  EN: 'en'
}

export const DEFAULT_LANGUAGE = LANGUAGES.VI

export const DEFAULT_THEME = THEME.LIGHT 