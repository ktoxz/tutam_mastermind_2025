import { emailSchema, passwordSchema } from '@/consts/zod-schema';
import z from 'zod';

export const LoginSchema = z.object({
	email: emailSchema,
	password: passwordSchema,
});

export type LoginDTO = z.infer<typeof LoginSchema>;
