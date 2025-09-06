import { StatusCodes } from 'http-status-codes'
import ApiError from '../utils/ApiError.js'
import { ENV } from '../config/environment.js'
import { resetPasswordEmailTemplate, verificationEmailTemplate } from '../utils/emailTemplates.js'
import { emailTransporter } from '../config/nodemailer.js'

const sendVerificationEmail = async (email, name, otp) => {
  if (!email || !name || !otp) {
    throw new ApiError(StatusCodes.BAD_REQUEST, 'Thiếu các trường bắt buộc')
  }

  const emailOptions = {
    from: `Tự Tâm <${ENV.EMAIL_USERNAME}>`,
    to: email,
    subject: 'Xác thực địa chỉ email của bạn',
    html: verificationEmailTemplate(name, otp)
  }

  await emailTransporter.sendMail(emailOptions)
}

const sendResetPasswordEmail = async (email, name, resetLink) => {
  if (!email || !name || !resetLink) {
    throw new ApiError(StatusCodes.BAD_REQUEST, 'Thiếu các trường bắt buộc')
  }

  const emailOptions = {
    from: `Tự Tâm <${ENV.EMAIL_USERNAME}>`,
    to: email,
    subject: 'Đặt lại mật khẩu của bạn',
    html: resetPasswordEmailTemplate(name, resetLink)
  }

  await emailTransporter.sendMail(emailOptions)
}

export const emailService = {
  sendVerificationEmail,
  sendResetPasswordEmail
}
