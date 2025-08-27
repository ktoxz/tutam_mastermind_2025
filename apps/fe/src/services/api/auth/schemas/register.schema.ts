import z from 'zod';

export const RegisterSchema = z.object({
	name: z.string(),
	email: z.email(),
	password: z.string().min(6),
	confirmPassword: z.string().min(6),
	acceptTerms: z.boolean(),
});

export type RegisterDTO = z.infer<typeof RegisterSchema>;
