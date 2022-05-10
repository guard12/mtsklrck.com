import { GitHub, LinkedIn, Twitter, Mail } from '@material-ui/icons'

export const Socials = () => {
  return (
    <div className="text-white flex flex-col">
      <div>
        <GitHub className="text-violet-900"/>
        <a className="text-gray-400 hover:text-white ml-2" href="https://github.com/guard12" target="_blank" rel="noreferrer">
          Follow me on GitHub @guard12
        </a>
      </div>
      <div>
        <LinkedIn className="text-blue-600" />
        <a className="text-gray-400 hover:text-white ml-2" href="https://linkedin.com/in/matuskollarcik" target="_blank" rel="noreferrer">
          Follow me on LinkedIn @matuskollarcik
        </a>
      </div>
      <div>
        <Twitter className="text-blue-400" />
        <a className="text-gray-400 hover:text-white ml-2" href="https://twitter.com/matuskollarcik" target="_blank" rel="noreferrer">
          Follow me on Twitter @matuskollarcik
        </a>
      </div>
      <div>
        <Mail className="text-red-900" />
        <a className="text-gray-400 hover:text-white ml-2" href="mailto:matus.kollarcik@gmail.com">
          Drop me an email matus.kollarcik@gmail.com
        </a>
      </div>
    </div>
  )
}