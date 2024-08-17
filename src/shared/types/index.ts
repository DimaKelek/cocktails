import { CocktailCodes } from '@api';

export type Nullable<T> = T | null;

export const isValidCocktailPath = (path?: string): path is CocktailCodes => {
  if (!path) return false;

  return Object.values(CocktailCodes).includes(path as CocktailCodes);
};
