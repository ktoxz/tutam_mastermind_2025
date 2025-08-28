import { emailSchema } from '@/consts/zod-schema';
import z from 'zod';

export const ResendOtpSchema = z.object({
	email: emailSchema,
});

export type ResendOtpDTO = z.infer<typeof ResendOtpSchema>;
