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

type Photos = {
  photos: [
    {
      id: number;
      earth_date: string;
      img_src: string;
      sol: number;
      camera: {
        id: number;
        name: string;
        rover_id: number;
        full_name: string;
      };
      rover: {
        id: number;
        landing_date: string;
        launch_date: string;
        name: string;
        status: string;
      };
    }
  ];
}

export function useMarsWeather () {
  const { data, error } = useSWRImmutable<Weather>(`https://api.maas2.apollorion.com/`, fetcher)
  const { data: marsPhotoData, error: photoError } = useSWRImmutable<Photos>(data ? `https://mars-photos.herokuapp.com/api/v1/rovers/Perseverance/photos?sol=433` : null, fetcher)

  const marsPhoto = marsPhotoData?.photos

  return {
    data,
    marsPhoto,
    isLoading: !error && !data,
    isError: error
  }
}