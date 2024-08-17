import type { CocktailCodes, GetCocktailsDto } from '@api';

export type GetCocktailsSuccessPayload = GetCocktailsDto & {
  cocktailCode: CocktailCodes;
};
