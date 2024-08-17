import { type ReactElement, useEffect, useRef } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@store/hooks';
import { selectDrinks, selectIsLoading } from '@store/selectors';
import { COCKTAILS_ACTIONS } from '@store/slices';

import { type CocktailCodes } from '@api';

import { isValidCocktailPath } from '@shared/types';

import { CocktailWidget } from '@components';

import styles from './Cocktails.module.scss';

export const CocktailsPage = (): ReactElement => {
  const { cocktailId } = useParams<{ cocktailId: CocktailCodes }>();
  const isValid = isValidCocktailPath(cocktailId);
  const dispatch = useAppDispatch();
  const containerRef = useRef<HTMLDivElement | null>(null);

  const cocktails = useAppSelector(selectDrinks(cocktailId));
  const isLoading = useAppSelector(selectIsLoading);

  useEffect(() => {
    if (isValid && (!cocktails || !cocktails.length)) {
      dispatch(COCKTAILS_ACTIONS.GET_COCKTAILS_TRIGGER(cocktailId));
    }

    if (window.innerWidth <= 557) {
      window.scrollTo({ top: 0 });
    } else {
      containerRef.current?.scrollTo({ top: 0 });
    }
  }, [cocktailId]);

  if (!isValid) {
    return (
      <Navigate
        to={`error`}
        replace
        state={{ message: `Cocktail with ID '${cocktailId}' not found` }}
      />
    );
  }

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!cocktails?.length) {
    return <div>Cocktails not found :C</div>;
  }

  return (
    <div ref={containerRef} className={styles.content}>
      {cocktails.map((cocktail) => (
        <CocktailWidget key={cocktail.idDrink} cocktail={cocktail} />
      ))}
    </div>
  );
};
