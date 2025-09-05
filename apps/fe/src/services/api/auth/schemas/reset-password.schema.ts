import { passwordSchema } from '@/consts/zod-schema';
import z from 'zod';

export const ResetPasswordSchema = z.object({
	token: z.string(),
	newPassword: passwordSchema,
	confirmNewPassword: passwordSchema,
});

export type ResetPasswordDTO = z.infer<typeof ResetPasswordSchema>;
