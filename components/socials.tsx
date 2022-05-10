import { GitHub, LinkedIn, Twitter, Mail } from '@material-ui/icons'

export const Socials = () => {
  return (
    <div className="text-white flex flex-col">
      <div>
        <GitHub />
        <a className="text-gray-400 hover:text-white ml-2" href="https://github.com/guard12" target="_blank" rel="noreferrer">@guard12</a>
      </div>
      <div>
        <LinkedIn />
        <a className="text-gray-400 hover:text-white ml-2" href="https://linkedin.com/in/matuskollarcik" target="_blank" rel="noreferrer">@matuskollarcik</a>
      </div>
      <div>
        <Twitter />
        <a className="text-gray-400 hover:text-white ml-2" href="https://twitter.com/matuskollarcik" target="_blank" rel="noreferrer">@matuskollarcik</a>
      </div>
      <div>
        <Mail />
        <a className="text-gray-400 hover:text-white ml-2" href="mailto:matus.kollarcik@gmail.com" >matus.kollarcik</a>
      </div>
    </div>
  )
}