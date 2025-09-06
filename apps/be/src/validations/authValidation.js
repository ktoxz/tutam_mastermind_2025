import { z } from 'zod'
import {
  nameSchema,
  emailSchema,
  passwordSchema,
  confirmPasswordSchema,
  otpSchema,
  acceptTermsSchema
} from './schemas.js'

const registerSchema = z
  .object({
    name: nameSchema,
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: confirmPasswordSchema,
    acceptTerms: acceptTermsSchema
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Mật khẩu không khớp'
  })

const verifyOtpSchema = z.object({
  email: emailSchema,
  otp: otpSchema
})

const resendOtpSchema = z.object({
  email: emailSchema
})

const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema
})

const forgotPasswordSchema = z.object({
  email: emailSchema
})

const resetPasswordSchema = z
  .object({
    newPassword: passwordSchema,
    confirmNewPassword: confirmPasswordSchema
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    path: ['confirmNewPassword'],
    message: 'Mật khẩu mới không khớp'
  })

export const authValidation = {
  registerSchema,
  verifyOtpSchema,
  resendOtpSchema,
  loginSchema,
  forgotPasswordSchema,
  resetPasswordSchema
}
