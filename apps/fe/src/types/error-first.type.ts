export type TErrorFirst<E extends Error, T extends any> = [E | null, T | null];
