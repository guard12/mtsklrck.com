import React from 'react'
import { Logo } from './logo'
import Link from 'next/link'
import { buttonVariants } from "components/ui/button"

export const Navigation = () => {
  return (
    <div className="flex justify-center py-3">
      <div className="sm:w-6/12 w-9/12 flex justify-between items-center">
        <Logo />
        <div className="justify-end">
          <div className="flex flex-1">
            <Link
              href="/space"
              className="text-white text-sm hover:text-red-800 active:text-red-900"
              hidden>Space</Link>
            
            <Link
              href="/portfolio"
              className={buttonVariants({ variant: "link", size: "sm", className: "text-white text-sm hover:text-red-800 active:text-red-900"})}
            >
              Portfolio
            </Link>
            <div
              className="h-[36px] mx-3 min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-20 dark:opacity-100">
            </div>
            <Link
              href="https://www.buymeacoffee.com/guard"
              referrerPolicy='no-referrer'
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "link", size: "sm", className: "text-white text-sm hover:text-red-800 active:text-red-900"})}
            >
              Buy me a coffee
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  )
}