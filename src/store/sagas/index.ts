import { takeLatest } from 'redux-saga/effects';

import { COCKTAILS_ACTIONS } from '@store/slices';

import { getCocktails } from './cocktails';

export function* rootSaga() {
  yield takeLatest(COCKTAILS_ACTIONS.GET_COCKTAILS_TRIGGER.type, getCocktails);
}
