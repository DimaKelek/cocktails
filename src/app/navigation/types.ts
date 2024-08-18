import { CocktailCodes } from '@api';

export enum Paths {
  Base = '/',
  Error = '/error',
  BaseCocktail = 'cocktails/:cocktailId',
  Margarita = `/cocktails/${CocktailCodes.Margarita}`,
  Mojito = `/cocktails/${CocktailCodes.Mojito}`,
  Kir = `/cocktails/${CocktailCodes.Kir}`,
  A1 = `/cocktails/${CocktailCodes.A1}`,
}
