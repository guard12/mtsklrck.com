import React from 'react'
import { Logo } from './logo'

export const Navigation = () => {
  return (
    <div className="flex justify-center py-3">
      <div className="sm:w-6/12 w-9/12 flex justify-between items-center">
        <Logo />
        <a
          href="https://www.buymeacoffee.com/guard"
          referrerPolicy='no-referrer'
          target="_blank"
          className="text-white text-sm hover:text-red-800 active:text-red-900"
          rel="noreferrer">Buy me a coffee</a>
      </div>
    </div>
  )
}