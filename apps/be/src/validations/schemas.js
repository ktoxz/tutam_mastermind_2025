import { z } from 'zod'

export const nameSchema = z.string().trim().min(1, 'Tên là bắt buộc')

export const emailSchema = z
  .string()
  .trim()
  .toLowerCase()
  .min(1, 'Email là bắt buộc')
  .email('Địa chỉ email không hợp lệ')

export const passwordSchema = z
  .string()
  .min(8, 'Mật khẩu phải có ít nhất 8 ký tự')
  .max(64, 'Mật khẩu không được vượt quá 64 ký tự')
  .regex(/[a-z]/, 'Mật khẩu phải chứa ít nhất một chữ cái thường')
  .regex(/[A-Z]/, 'Mật khẩu phải chứa ít nhất một chữ cái hoa')
  .regex(/[0-9]/, 'Mật khẩu phải chứa ít nhất một số')
  .regex(/[^a-zA-Z0-9]/, 'Mật khẩu phải chứa ít nhất một ký tự đặc biệt')

export const confirmPasswordSchema = z.string().min(1, 'Vui lòng xác nhận mật khẩu của bạn')

export const acceptTermsSchema = z.boolean().refine((val) => val === true, {
  message: 'Bạn phải chấp nhận các điều khoản và điều kiện'
})

export const otpSchema = z.string().trim().length(6, 'OTP phải có đúng 6 ký tự')
