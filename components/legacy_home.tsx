import { Card } from './card'
import { Logo } from './logo'

export const Home = () => {
  return (
    <div>
      <div className="flex justify-center mr-5 pt-5">
        <Logo />
      </div>
      <main>
        <div className="pt-5 text-center text-white">CLASSY | MINIMALIST</div>
        <Card />
        <footer className="bottom-5 fixed w-full p-3 text-center text-white">
          <p className="text-xs">{`"When something is important enough, you do it even if the odds are not in your favor." - Elon Musk`}</p>
        </footer>
      </main>
    </div>
  )
}
