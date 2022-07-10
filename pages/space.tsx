import React from 'react'

export default function Space() {
  return  <div className="bg-black min-h-screen">
    <div className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
      <div className="absolute z-30 p-5 text-5xl text-white font-bold">FUTURE IS NOW.</div>
      <video
        autoPlay
        muted
        className="z-10 w-auto min-w-full min-h-full max-w-none"
      >
        <source src="https://www.dropbox.com/s/8378sd1gwu5ioco/Pexels%20Videos%204482.mp4?raw=1" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
}
