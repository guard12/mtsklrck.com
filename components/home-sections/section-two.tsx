import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

import { useMarsWeather } from '../../hooks'

export const SectionTwo = () => {
  const { data, marsPhoto } = useMarsWeather()

  if (!data) return null

  const photo = marsPhoto ? marsPhoto[Math.floor(Math.random()*marsPhoto.length)] : null

  return (
    <div className="flex justify-center h-5/6 overflow-hidden mt-20 sm:mt-0">
      <div
        className="flex sm:w-6/12 w-11/12 sm:justify-evenly items-center flex-col sm:flex-row gap-20 sm:gap-0"
      >
        <motion.div
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'tween',
            delay: 0.5,
            duration: 0.5 }}
          className="flex sm:w-5/12 w-11/12 sm:py-24 sm:justify-end justify-center"
        >
          <div className="text-white border border-violet-900 p-5 rounded-xl">
            <h3 className="text-bold">Current Weather on Mars</h3>
            <div className="flex pt-6 gap-6">
              <div>
                <label className="text-sm">Sol:</label> <label className="text-sm font-thin">{data.sol}</label>
                <br />
                <label className="text-sm">Weather:</label> <label className="text-sm font-thin">{data.atmo_opacity}</label>
              </div>
              <div>
                <label className="text-sm">Min. Temperature:</label> <label className="text-sm font-thin">{data.min_temp} {data.unitOfMeasure}</label>
                <br />
                <label className="text-sm">Max. Temperature:</label> <label className="text-sm font-thin">{data.max_temp} {data.unitOfMeasure}</label>
              </div>
            </div>
            <div className="font-thin text-xs text-gray-400 mt-2">Powered by api.nasa.gov</div>
          </div>
        </motion.div>
        <motion.span
          className="w-px bg-gradient-to-b from-red-800 via-violet-900 to-black h-full hidden sm:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="flex sm:w-5/12 w-11/12 sm:py-24 sm:justify-start justify-center overflow-hidden"
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'tween',
            delay: 0.5,
            duration: 0.5 }}
        >
          {photo && <div>
            <Image
              src={photo.img_src}
              priority
              layout="intrinsic"
              width={440}
              height={260}
              alt="mars_photo"
              className="rounded-lg"/>
            <div className="text-white">
              <label className="text-sm font-bold">Rover:</label> <label className="text-sm font-thin">{photo.rover.name}</label>
              <br />
              <label className="text-sm font-bold">Camera:</label> <label className="text-sm font-thin">{photo.camera.full_name}</label>
            </div>
          </div>}
        </motion.div>
      </div>
    </div>
  )
}