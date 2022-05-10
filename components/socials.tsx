import { GithubIcon, LinkedInIcon, TwitterIcon, MailIcon } from './icons'

export const Socials = () => {
  return (
    <div className="text-white flex flex-col gap-3">
      <div className="flex">
        <GithubIcon className="fill-violet-900 w-5"/>
        <a className="text-gray-400 hover:text-white ml-2" href="https://github.com/guard12" target="_blank" rel="noreferrer">
          Follow me on GitHub
        </a>
      </div>
      <div className="flex">
        <LinkedInIcon className="fill-blue-600 w-5" />
        <a className="text-gray-400 hover:text-white ml-2" href="https://linkedin.com/in/matuskollarcik" target="_blank" rel="noreferrer">
          Follow me on LinkedIn
        </a>
      </div>
      <div className="flex">
        <TwitterIcon className="fill-blue-400 w-5" />
        <a className="text-gray-400 hover:text-white ml-2" href="https://twitter.com/matuskollarcik" target="_blank" rel="noreferrer">
          Follow me on Twitter
        </a>
      </div>
      <div className="flex">
        <MailIcon className="fill-rose-900 w-5" />
        <a className="text-gray-400 hover:text-white ml-2" href="mailto:matus.kollarcik@gmail.com">
          Drop me an email
        </a>
      </div>
    </div>
  )
}