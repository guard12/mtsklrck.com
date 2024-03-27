'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const SectionTwo = () => {

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
          className="flex sm:w-5/12 w-11/12 sm:py-18 sm:justify-end justify-center"
        >
          <div className="text-white border border-purple-800 p-5 rounded-xl gap-6 flex flex-col">
            <h3 className="text-bold">Current position</h3>
            <div className="flex flex-col gap-1">
              <label className="text-sm">Senior Frontend Engineer</label>
              <label className="text-sm">Coinify</label>
              <div className="font-thin text-xs text-gray-400">2021 - Present</div>
            </div>
            <label className="text-sm font-thin">Leading and driving the user facing cryptocurrency payments solution.</label>
          </div>
        </motion.div>
        <motion.span
          className="w-px bg-gradient-to-b from-red-800 to-violet-900 h-full hidden sm:flex"
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
        </motion.div>
      </div>
    </div>
  )
}