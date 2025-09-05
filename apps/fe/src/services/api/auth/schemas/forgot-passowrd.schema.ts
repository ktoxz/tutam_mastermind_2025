import z from 'zod';
import { emailSchema } from '@/consts/zod-schema';

export const ForgotPasswordSchema = z.object({
	email: emailSchema,
});

export type ForgotPasswordDTO = z.infer<typeof ForgotPasswordSchema>;
