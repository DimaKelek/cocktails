import { call, put } from 'redux-saga/effects';
import { type PayloadAction } from '@reduxjs/toolkit';

import { type CocktailCodes, cocktailsService } from '@api';

import { HttpStatusCode } from 'axios';

import { COCKTAILS_ACTIONS } from '../slices/cocktailsSlice';

type ServiceResponse = Awaited<
  ReturnType<typeof cocktailsService.getCocktails>
>;

export function* getCocktails({ payload }: PayloadAction<CocktailCodes>) {
  try {
    yield put(COCKTAILS_ACTIONS.GET_COCKTAILS_LOADING(true));

    const { data, status }: ServiceResponse = yield call(
      cocktailsService.getCocktails,
      payload,
    );

    if (status === HttpStatusCode.Ok) {
      yield put(
        COCKTAILS_ACTIONS.GET_COCKTAILS_SUCCESS({
          ...data,
          cocktailCode: payload,
        }),
      );
    }
  } catch (error) {
    console.log('### error', error);
  } finally {
    yield put(COCKTAILS_ACTIONS.GET_COCKTAILS_LOADING(false));
  }
}
