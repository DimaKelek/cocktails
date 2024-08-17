import axios from 'axios';

import type { BaseResponse, CocktailCodes, GetCocktailsDto } from './types';

const axiosInstance = axios.create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1',
});

export const cocktailsService = {
  async getCocktails(code: CocktailCodes): BaseResponse<GetCocktailsDto> {
    const { data, status } = await axiosInstance.get<GetCocktailsDto>(
      '/search.php',
      {
        params: { s: code },
      },
    );

    return { data, status };
  },
};

export {
  CocktailCodes,
  type CocktailType,
  type GetCocktailsDto,
} from './types';
