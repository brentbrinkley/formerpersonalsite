import React from "react"
import { useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import "./socialLinks.scss"

const SocialLinks = () => {
  const graphData = useStaticQuery(graphql`
    query socialQuery {
      site {
        siteMetadata {
          github
          twitter
          linkedin
        }
      }
    }
  `)

  const data = graphData.site.siteMetadata
  const size = "lg"

  return (
    <div className="flex-container">
      <a href={data.github}>
        <FontAwesomeIcon icon={faGithub} size={size} />
      </a>
      <a href={data.twitter}>
        <FontAwesomeIcon icon={faTwitter} size={size} />
      </a>
      <a href={data.linkedin}>
        <FontAwesomeIcon icon={faLinkedin} size={size} />
      </a>
    </div>
  )
}

export default SocialLinks
