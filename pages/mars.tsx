
import { useMarsPhoto } from '../hooks';

export default function Mars() {
  const { data } = useMarsPhoto();
  if (!data) return <div>Loading ...</div>

  const source = data[0].img_src

  return (
    <div className="h-full bg-black text-center justify-center">
      <h1 className="text-3xl font-bold text-white">
        Hello from Mars
      </h1>
      <div className="justify-center flex">
        <img src={source} className="h-full" />
      </div>
    </div>
  )
}