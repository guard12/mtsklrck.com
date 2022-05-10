
import Image from 'next/image'

import { useMarsPhoto } from '../hooks';

export const MarsPicture = () => {
  const { data } = useMarsPhoto();
  if (!data) return <div>Loading ...</div>

  const randompicture = data[(Math.random() * data.length) | 0]
  const source = randompicture.img_src

  return <Image src={source} className="h-full" alt="mars" width={400} height={200}/>
}
