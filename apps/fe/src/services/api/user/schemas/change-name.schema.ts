import z from 'zod';

export const ChangeNameSchema = z.object({
	name: z.string(),
});
export type ChangeNameDTO = z.infer<typeof ChangeNameSchema>;
