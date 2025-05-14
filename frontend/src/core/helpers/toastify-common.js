import { toast } from 'react-toastify'

const defaultOptions = {
  position: 'top-center',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored'
}

const toastifyCommon = {
  success: (message, options = {}) => {
    toast.success(message, {
      ...defaultOptions,
      ...options
    })
  },

  error: (message, options = {}) => {
    toast.error(message, {
      ...defaultOptions,
      ...options
    })
  },

  warning: (message, options = {}) => {
    toast.warn(message, {
      ...defaultOptions,
      ...options
    })
  },

  info: (message, options = {}) => {
    toast.info(message, {
      ...defaultOptions,
      ...options
    })
  },

  basic: (message, options = {}) => {
    toast(message, {
      ...defaultOptions,
      ...options
    })
  },

  clear: () => {
    toast.dismiss()
  },

  custom: (message, customOptions = {}) => {
    toast(message, {
      ...defaultOptions,
      ...customOptions
    })
  }
}

export default toastifyCommon
