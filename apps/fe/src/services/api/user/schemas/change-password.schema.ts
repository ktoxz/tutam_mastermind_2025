import z from 'zod';

export const ChangePasswordSchema = z.object({
	currentPassword: z.string(),
	newPassword: z.string(),
});
export type ChangePasswordDTO = z.infer<typeof ChangePasswordSchema>;
