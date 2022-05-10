
import Image from 'next/image'

import { useMarsPhoto } from '../hooks';

export default function Mars() {
  const { data } = useMarsPhoto();
  if (!data) return <div>Loading ...</div>

  const randompicture = data[(Math.random() * data.length) | 0]
  const source = randompicture.img_src

  return (
    <div className="h-screen bg-black text-center justify-center">
      <h1 className="text-3xl font-bold text-white">
        Hello from Mars
      </h1>
      <div className="justify-center flex">
        <Image src={source} className="h-full" alt="mars" width={1200} height={900}/>
      </div>
    </div>
  )
}
