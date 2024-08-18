import { type ReactElement, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Paths } from '@app/navigation/types';

import { useAppDispatch, useAppSelector } from '@store/hooks';
import { selectDrinks, selectIsLoading } from '@store/selectors';
import { COCKTAILS_ACTIONS } from '@store/slices';

import { type CocktailCodes } from '@api';

import Logo from '@shared/assets/logo.png';
import { isValidCocktailPath } from '@shared/types';

import { CocktailWidget, Loader } from '@components';

import styles from './Cocktails.module.scss';

export const CocktailsPage = (): ReactElement => {
  const { cocktailId } = useParams<{ cocktailId: CocktailCodes }>();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const containerRef = useRef<HTMLDivElement | null>(null);

  const isValid = isValidCocktailPath(cocktailId);

  const cocktails = useAppSelector(selectDrinks(cocktailId));
  const isLoading = useAppSelector(selectIsLoading);

  useEffect(() => {
    if (!isValid) {
      navigate(Paths.Error, {
        replace: true,
        state: { message: `Cocktail with ID '${cocktailId}' not found` },
      });
      return;
    }

    if (!cocktails || !cocktails.length) {
      dispatch(COCKTAILS_ACTIONS.GET_COCKTAILS_TRIGGER(cocktailId));
    }

    if (window.innerWidth <= 557) {
      window.scrollTo({ top: 0 });
    } else {
      containerRef.current?.scrollTo({ top: 0 });
    }
  }, [cocktailId]);

  if (isLoading) {
    return <Loader />;
  }

  if (!cocktails?.length) {
    return (
      <div className={styles.emptyContent}>
        <img src={Logo} alt={'logo'} className={styles.logo} />
        <p className={styles.text}>{'Cocktails not found :C'}</p>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={styles.content}>
      {cocktails.map((cocktail) => (
        <CocktailWidget key={cocktail.idDrink} cocktail={cocktail} />
      ))}
    </div>
  );
};
