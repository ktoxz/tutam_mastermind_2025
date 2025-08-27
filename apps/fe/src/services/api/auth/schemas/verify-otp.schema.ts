import z from 'zod';

export const VerifyOtpSchema = z.object({
	email: z.email(),
	otp: z.string(),
});

export type VerifyOtpDTO = z.infer<typeof VerifyOtpSchema>;
