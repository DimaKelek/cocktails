import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { CocktailCodes, CocktailType } from '@api';

import { EMPTY_OBJECT, EMPTY_STRING } from '@shared/constants';

import { type GetCocktailsSuccessPayload } from './types';

type DrinkType = Record<CocktailType['idDrink'], CocktailType>;

type CocktailsState = {
  isLoadingGetCocktails: boolean;
  drinks: Record<string, DrinkType>;
  error: string;
};

const initialState: CocktailsState = {
  isLoadingGetCocktails: false,
  drinks: EMPTY_OBJECT,
  error: EMPTY_STRING,
};

export const cocktailsSlice = createSlice({
  name: 'cocktails',
  initialState,
  reducers: {
    GET_COCKTAILS_TRIGGER: (_, __: PayloadAction<CocktailCodes>) => {},
    GET_COCKTAILS_LOADING: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoadingGetCocktails = payload;
    },
    GET_COCKTAILS_SUCCESS: (
      state,
      { payload }: PayloadAction<GetCocktailsSuccessPayload>,
    ) => {
      const { drinks, cocktailCode } = payload;

      state.drinks[cocktailCode] = drinks.reduce<DrinkType>((acc, cocktail) => {
        acc[cocktail.idDrink] = cocktail;

        return acc;
      }, {});
    },
    SET_ERROR: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
    },
  },
});

export const { actions: COCKTAILS_ACTIONS, reducer: cocktailsReducer } =
  cocktailsSlice;
