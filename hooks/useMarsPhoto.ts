import useSWRImmutable from 'swr'

import { fetcher } from '../api/fetcher'

export function useMarsPhoto (sol: number) {
  const { data, error } = useSWRImmutable(`https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/photos?sol=${sol}`, fetcher)

  const marsData = data?.photos

  return {
    data: marsData,
    isLoading: !error && !data,
    isError: error
  }
}