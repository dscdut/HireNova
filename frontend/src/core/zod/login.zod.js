import { numberConstants } from '@/core/configs/consts'
import { z } from 'zod'

export const LoginSchema = z.object({
  email: z.string().min(numberConstants.TWO, {
    message: 'Email is valid.'
  }),
  password: z.string().min(numberConstants.SIX, {
    message: 'Password must be at least 6 characters.'
  })
})
