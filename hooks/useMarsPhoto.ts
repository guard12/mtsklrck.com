import useSWRImmutable from 'swr'

const fetcher = (url) => fetch(url).then(res => res.json())

export function useMarsPhoto () {
  const { data, error } = useSWRImmutable(`https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/photos?sol=1000&page=1`, fetcher)

  const marsData = data?.photos

  return {
    data: marsData,
    isLoading: !error && !data,
    isError: error
  }
}