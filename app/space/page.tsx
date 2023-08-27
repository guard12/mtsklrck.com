'use client'
import React from 'react'

export default function Space() {
  return  <div className="bg-black min-h-screen">
    <div className="relative flex items-center justify-center h-screen overflow-hidden">
      <div className="absolute z-30 p-5">
        <div className="text-5xl font-bold 
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-indigo-600 via-sky-500 to-fuchsia-700
            animate-text
            ">
              FUTURE IS HERE.
        </div>
      </div>
      <video
        autoPlay
        muted
        className="z-10 w-auto min-w-full min-h-full max-w-none"
      >
        <source
          src="https://www.dropbox.com/s/8378sd1gwu5ioco/Pexels%20Videos%204482.mp4?raw=1"
          type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
}
