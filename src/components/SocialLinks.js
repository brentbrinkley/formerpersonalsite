import React from "react"
import { useStaticQuery } from "gatsby"
import "./social-links.scss"

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

  return (
    <div>
      <h3>Relevant Social Links:</h3>
      <ul>
        <li>
          <a href={data.github}>Github</a>
        </li>
        <li>
          <a href={data.twitter}>Twitter</a>
        </li>
        <li>
          <a href={data.linkedin}>LinkedIn</a>
        </li>
      </ul>
    </div>
  )
}

export default SocialLinks
