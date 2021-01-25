import {
  linkToFacebook,
  linkToGithub,
  linkToInstagram,
  linkToLinkedin
} from '../../config'

import FacebookIcon from '../../assets/images/facebook-icon.png'
import LinkedinIcon from '../../assets/images/linkedin-icon.png'
import InstagramIcon from '../../assets/images/instagram-icon.png'
import GithubIcon from '../../assets/images/github-icon.png'

const Copy: React.FC = () => {
  return (
    <div className="copy-container">
      <small>Siga nas redes sociais para acompanhar as novidades:</small>

      <div className="socials">
        <a href={linkToFacebook} target="_blank" rel="noreferrer">
          <img src={FacebookIcon} alt="Facebook de Gabriel Dissotti" />
        </a>

        <a href={linkToLinkedin} target="_blank" rel="noreferrer">
          <img src={LinkedinIcon} alt="Linkedin de Gabriel Dissotti" />
        </a>

        <a href={linkToInstagram} target="_blank" rel="noreferrer">
          <img src={InstagramIcon} alt="Instagram de Gabriel Dissotti" />
        </a>

        <a href={linkToGithub} target="_blank" rel="noreferrer">
          <img src={GithubIcon} alt="Github de Gabriel Dissotti" />
        </a>
      </div>

      <small>
        Desenvolvido por{' '}
        <a href={linkToLinkedin} target="_blank" rel="noreferrer">
          Gabriel Dissotti
        </a>
        .
      </small>
    </div>
  )
}

export default Copy
