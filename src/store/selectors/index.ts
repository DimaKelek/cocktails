import { type RootState } from '@store/index';

import type { CocktailCodes } from '@api';

import { EMPTY_ARRAY } from '@shared/constants';
import { isValidCocktailPath } from '@shared/types';

export const selectIsLoading = (state: RootState) => {
  return state.cocktails.isLoadingGetCocktails;
};

export const selectDrinks = (code?: CocktailCodes) => (state: RootState) => {
  if (!code && !isValidCocktailPath(code)) return null;

  const drinks = state.cocktails.drinks[code];

  if (!drinks) return EMPTY_ARRAY;

  return Object.values(drinks);
};
