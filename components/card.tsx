import Image from 'next/image'

import { GitHub, LinkedIn, Twitter, Mail } from '@material-ui/icons'

export function Card() {
  return <div className="justify-center flex">
    <div className="mt-20 border border-border-color rounded-lg p-8 w-6/12 flex">
      <div className="border-border-color border rounded-lg overflow-hidden w-20 h-20">
        <Image
          alt="MK"
          src="/profile.jpg"
          priority width="80px"
          height="80px"
        />
      </div>
      <div className="ml-20">
        <h2 className="text-white text-2xl">Matus Kollarcik</h2>
        <p className="text-red-500">Senior Frontend Engineer</p>
      </div>

      <div
        className="h-full w-px ml-44"
        style={{
          background: "linear-gradient(#ec6192 4.44%,#ec4c34 21.45%,#ffbd2b 37.21%,#ebde56 54.63%,#57c754 70.8%,#53a1eb 84.07%) 0 100% transparent no-repeat",
        }}>
      </div>

      <div className="text-white flex flex-col ml-5">
        <div>
          <GitHub />
          <a className="text-gray-400 hover:text-white ml-2" href="https://github.com/guard12" target="_blank">@guard12</a>
        </div>
        <div>
          <LinkedIn />
          <a className="text-gray-400 hover:text-white ml-2" href="https://linkedin.com/in/matuskollarcik" target="_blank">@matuskollarcik</a>
        </div>
        <div>
          <Twitter />
          <a className="text-gray-400 hover:text-white ml-2" href="https://twitter.com/matuskollarcik" target="_blank">@matuskollarcik</a>
        </div>
        <div>
          <Mail />
          <a className="text-gray-400 hover:text-white ml-2" href="mailto:matus.kollarcik@gmail.com">matus.kollarcik</a>
        </div>
      </div>
    </div>
  </div>
}
