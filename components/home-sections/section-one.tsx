import Image from 'next/image'
import { motion } from 'framer-motion'

import { Socials } from '../socials'

export const SectionOne = () => {
  return (
    <div className="flex justify-center h-5/6">
      <div className="flex w-6/12 justify-evenly">
        <motion.div
         initial={{ x: '-100vw' }}
         animate={{ x: 0 }}
         transition={{ type: 'tween', delay: 0.5, duration: 0.5 }}
          className="flex w-5/12 py-24 justify-end"
        >
          <div>
            <div className="border-border-color border rounded-md overflow-hidden w-120 h-240">
              <Image
                alt="MK"
                src="/profile.jpg"
                priority
                width="200px"
                height="200px"
              />
            </div>
          </div>
          <div className="ml-10">
            <h2 className="text-white text-2xl">Matus Kollarcik</h2>
            <p className="text-red-700">Senior Frontend Engineer</p>
          </div>
        </motion.div>
        <motion.span
          className="w-px bg-gradient-to-br from-black to-red-800 h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="flex w-5/12 py-24"
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'tween', delay: 0.5, duration: 0.5 }}
        >
          <Socials />
        </motion.div>
      </div>
    </div>
  )
}