import { emailSchema, otpSchema } from '@/consts/zod-schema';
import z from 'zod';

export const VerifyOtpSchema = z.object({
	email: emailSchema,
	otp: otpSchema,
});

export type VerifyOtpDTO = z.infer<typeof VerifyOtpSchema>;
