'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export function Logo() {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: 'rgba(255, 255, 255, 0)'
    },
    visible: {
      pathLength: 1,
      fill: 'rgba(255, 255, 255, 1)'
    }
  }
     
  return <Link href='/'>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      style={{
        width: '50px',
        overflow: 'visible',
        stroke: '#fff',
        strokeWidth: '1',
        strokeLinejoin: 'round',
        strokeLinecap: 'round',
      }}
    >
      <motion.path
        d="m 45.14,10.72 a 0.32,0.32 0 0 1 0,0.47 l -14.87,16 V 34.8 A 0.29,0.29 0 0 1 29.95,35.13 0.29,0.29 0 0 1 29.62,34.8 V 11.12 c 0,-0.2 0.11,-0.29 0.33,-0.29 0.22,0 0.32,0.09 0.32,0.29 v 15.12 l 14.4,-15.48 c 0.19,-0.17 0.33,-0.18 0.47,-0.04 z m -1,23.87 a 0.35,0.35 0 0 1 0,0.47 0.75,0.75 0 0 1 -0.22,0.07 0.34,0.34 0 0 1 -0.25,-0.11 l -7,-7.2 a 0.3,0.3 0 0 1 0,-0.47 0.32,0.32 0 0 1 0.47,0 z M 25.56,10.65 c 0.19,0 0.29,0.11 0.29,0.32 V 34.8 c 0,0.22 -0.1,0.33 -0.29,0.33 -0.19,0 -0.32,-0.11 -0.32,-0.33 v -23 L 15.48,22 a 0.32,0.32 0 0 1 -0.25,0.11 v 0 A 0.27,0.27 0 0 1 15,22 L 4.64,11.19 a 0.26,0.26 0 0 1 0,-0.43 c 0.14,-0.2 0.29,-0.2 0.43,0 L 15.23,21.38 25.31,10.76 a 0.31,0.31 0 0 1 0.25,-0.11 z M 4.9,16.41 a 0.29,0.29 0 0 1 0.32,0.32 V 34.8 A 0.29,0.29 0 0 1 4.9,35.13 0.29,0.29 0 0 1 4.57,34.8 V 16.73 A 0.29,0.29 0 0 1 4.9,16.41 Z"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2,
            ease: 'easeInOut' },
          fill: { duration: 2,
            ease: [1, 0, 0.8, 1] }
        }}
      />
    </svg>
  </Link>
}