import { useQuery } from '@tanstack/react-query';

import { requestPokemon } from '@utils/api/requests/pokemon/id';

interface UseRequestPokemonQueryParams {
  id: number;
}

export const useRequestPokemonQuery = ({
  params
}: RequestQueryParams<UseRequestPokemonQueryParams>) =>
  useQuery(['pokemons', params.id], () => requestPokemon({ params }));
