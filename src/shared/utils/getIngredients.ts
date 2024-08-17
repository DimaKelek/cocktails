import type { CocktailType } from '@api';

export const getIngredients = (
  cocktail: CocktailType,
): [string[], string[]] => {
  const ingredients: string[] = [];
  const measures: string[] = [];

  for (let i = 1; i <= 15; i++) {
    const ingredient = cocktail[`strIngredient${i}` as keyof typeof cocktail];
    const measure = cocktail[`strMeasure${i}` as keyof typeof cocktail];

    if (ingredient) {
      ingredients.push(`${ingredient}: `);
      measures.push(measure ?? 'To taste');
    } else {
      break;
    }
  }

  return [ingredients, measures];
};
