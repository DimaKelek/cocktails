import { type ReactElement, useMemo } from 'react';

import { type CocktailType } from '@api';

import { getIngredients } from '@shared/utils';

import { InfoList } from '../InfoList';
import { LazyImage } from '../LazyImage';
import { WrapperWithTitle } from '../WrapperWithTitle';
import styles from './CocktailWidget.module.scss';

type CocktailWidgetProps = {
  cocktail: CocktailType;
};

export const CocktailWidget = (props: CocktailWidgetProps): ReactElement => {
  const { cocktail } = props;
  const {
    strDrink,
    strDrinkThumb,
    strCategory,
    strAlcoholic,
    strGlass,
    strInstructions,
  } = cocktail;

  const [ingredients, measures] = useMemo(
    () => getIngredients(cocktail),
    [cocktail],
  );

  const [labels, values] = useMemo(() => {
    const labels = ['Category: ', 'Type: ', 'Glass: '];
    const values = [strCategory, strAlcoholic, strGlass];

    return [labels, values];
  }, [strCategory, strAlcoholic, strGlass]);

  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <WrapperWithTitle title={strDrink}>
          <InfoList values={values} labels={labels} />
        </WrapperWithTitle>
        <WrapperWithTitle title={'Instructions'}>
          <p className={styles.text}>{strInstructions}</p>
        </WrapperWithTitle>
        <WrapperWithTitle title={'List of ingredients'}>
          <InfoList values={measures} labels={ingredients} />
        </WrapperWithTitle>
      </div>
      <div className={styles.thumbnailContainer}>
        <LazyImage src={strDrinkThumb} alt={strDrink} />
      </div>
    </div>
  );
};
