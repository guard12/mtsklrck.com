import useSWRImmutable from 'swr'

import { fetcher } from '../api/fetcher'

type Weather = {
  status: number;
  sol: number;
  season: string;
  min_temp: number;
  max_temp: number;
  atmo_opacity: string;
  sunset: string;
  sunrise: string;
  min_gts_temp: number;
  max_gts_temp: number;
  unitOfMeasure: string;
  TZ_Data: string;
}

export function useMarsWeather () {
  const { data, error } = useSWRImmutable<Weather>(`https://api.maas2.apollorion.com/`, fetcher)

  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}