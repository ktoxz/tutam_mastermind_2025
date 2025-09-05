import { acceptTermsSchema, emailSchema, passwordSchema } from '@/consts/zod-schema';
import z from 'zod';

export const RegisterSchema = z.object({
	name: z.string(),
	email: emailSchema,
	password: passwordSchema,
	confirmPassword: passwordSchema,
	acceptTerms: acceptTermsSchema,
});

export type RegisterDTO = z.infer<typeof RegisterSchema>;
