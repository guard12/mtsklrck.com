import { Logo } from './logo'

export const Navigation = () => {
  return (
    <div className="flex justify-center py-3">
      <div className="w-6/12 flex justify-between items-center">
        <Logo />
        <div className="text-white text-sm">CLASSY | MINIMALIST</div>
      </div>
    </div>
  )
}