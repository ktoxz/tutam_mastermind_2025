import z from 'zod';

export const ResetPasswordSchema = z.object({
	token: z.string(),
	newPassword: z.string().min(6),
	confirmNewPassword: z.string().min(6),
});

export type ResetPasswordDTO = z.infer<typeof ResetPasswordSchema>;
