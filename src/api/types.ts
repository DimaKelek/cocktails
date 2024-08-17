import { type Nullable } from '@shared/types';

import { type HttpStatusCode } from 'axios';

export type CocktailType = {
  dateModified: string;
  idDrink: string;
  strAlcoholic: string;
  strCategory: string;
  strCreativeCommonsConfirmed: string;
  strDrink: string;
  strDrinkAlternate: Nullable<string>;
  strDrinkThumb: string;
  strGlass: string;
  strIBA: string;
  strImageAttribution: Nullable<string>;
  strImageSource: Nullable<string>;
  strIngredient1: Nullable<string>;
  strIngredient2: Nullable<string>;
  strIngredient3: Nullable<string>;
  strIngredient4: Nullable<string>;
  strIngredient5: Nullable<string>;
  strIngredient6: Nullable<string>;
  strIngredient7: Nullable<string>;
  strIngredient8: Nullable<string>;
  strIngredient9: Nullable<string>;
  strIngredient10: Nullable<string>;
  strIngredient11: Nullable<string>;
  strIngredient12: Nullable<string>;
  strIngredient13: Nullable<string>;
  strIngredient14: Nullable<string>;
  strIngredient15: Nullable<string>;
  strInstructions: string;
  strInstructionsDE: Nullable<string>;
  strInstructionsES: Nullable<string>;
  strInstructionsFR: Nullable<string>;
  strInstructionsIT: Nullable<string>;
  strInstructionsZH_HANS: Nullable<string>;
  strInstructionsZH_HANT: Nullable<string>;
  strMeasure1: Nullable<string>;
  strMeasure2: Nullable<string>;
  strMeasure3: Nullable<string>;
  strMeasure4: Nullable<string>;
  strMeasure5: Nullable<string>;
  strMeasure6: Nullable<string>;
  strMeasure7: Nullable<string>;
  strMeasure8: Nullable<string>;
  strMeasure9: Nullable<string>;
  strMeasure10: Nullable<string>;
  strMeasure11: Nullable<string>;
  strMeasure12: Nullable<string>;
  strMeasure13: Nullable<string>;
  strMeasure14: Nullable<string>;
  strMeasure15: Nullable<string>;
  strTags: Nullable<string>;
  strVideo: Nullable<string>;
};

export type GetCocktailsDto = {
  drinks: CocktailType[];
};

export enum CocktailCodes {
  Margarita = 'margarita',
  Mojito = 'mojito',
  A1 = 'a1',
  Kir = 'kir',
}

export type BaseResponse<DataType> = Promise<{
  data: DataType;
  status: HttpStatusCode;
}>;
