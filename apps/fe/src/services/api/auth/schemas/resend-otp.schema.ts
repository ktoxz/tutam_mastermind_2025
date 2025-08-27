import z from 'zod';

export const ResendOtpSchema = z.object({
	email: z.email(),
});

export type ResendOtpDTO = z.infer<typeof ResendOtpSchema>;
