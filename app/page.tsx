import { Logo } from '@/components/logo'
import { AnimatedContent } from '@/components/animated-content'
import { GithubIcon, LinkedInIcon, TwitterIcon, MailIcon } from '@/components/icons'

const socials = [
  {
    href: 'https://github.com/mtsklrck',
    label: 'GitHub',
    icon: GithubIcon,
  },
  {
    href: 'https://www.linkedin.com/in/matuskollarcik/',
    label: 'LinkedIn',
    icon: LinkedInIcon,
  },
  {
    href: 'https://twitter.com/mtsklrck',
    label: 'Twitter',
    icon: TwitterIcon,
  },
  {
    href: 'mailto:matus.kollarcik@gmail.com',
    label: 'Email',
    icon: MailIcon,
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col items-center text-center gap-6">
      <AnimatedContent delay={0}>
        <Logo />
      </AnimatedContent>

      <AnimatedContent delay={0.15}>
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
          Matus Kollarcik
        </h1>
      </AnimatedContent>

      <AnimatedContent delay={0.3}>
        <p className="text-lg sm:text-xl text-white/80">
          Senior Frontend Engineer
        </p>
      </AnimatedContent>

      <AnimatedContent delay={0.45}>
        <p className="text-sm sm:text-base text-white/60 max-w-md leading-relaxed">
          Building cryptocurrency payment solutions at Coinify.
          <br />
          Creator of{' '}
          <a
            href="https://beerleague.net"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors duration-200 underline underline-offset-4 decoration-white/20 hover:decoration-white/50"
          >
            Beerleague.net
          </a>
        </p>
      </AnimatedContent>

      <AnimatedContent delay={0.6}>
        <div className="flex items-center gap-2 mt-2">
          {socials.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              aria-label={label}
              className="p-3 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-all duration-200 cursor-pointer"
            >
              <Icon className="w-5 h-5 fill-current" />
            </a>
          ))}
        </div>
      </AnimatedContent>
    </div>
  )
}
