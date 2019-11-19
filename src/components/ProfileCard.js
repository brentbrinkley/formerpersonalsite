import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ProfileCard = () => {
  // ---------------------------------------
  // Snag our graph data from gatsby config
  // Set shorter constants
  //----------------------------------------
  const graphData = useStaticQuery(graphql`
    query PageQuery {
      site {
        siteMetadata {
          author
          jobTitle
          github
          twitter
          linkedin
        }
      }
    }
  `)
  const data = graphData.site.siteMetadata

  // ---------------------------------------
  // JSX
  //----------------------------------------
  return (
    <div>
      <h1>{data.author}</h1>
      <h2>{data.jobTitle}</h2>
      <p>Hi I'm Brent I'm a Full Stack Web Developer</p>

      <h3>Relevant Social Links:</h3>
      <ul>
        <li>
          Github:
          <a href="https://github.com/brentbrinkley">{data.github}</a>
        </li>
        <li>
          Twitter:
          <a href="https://twitter.com/16bitSensei">@{data.twitter}</a>
        </li>
        <li>
          LinkedIn:
          <a href="https://www.linkedin.com/in/brent-brinkley-21932435/">
            {data.linkedin}
          </a>
        </li>
      </ul>

      <h3>Projects:</h3>
      <ul>
        <li>New Kind</li>
        <li>Raleigh Little Theater</li>
        <li>Johnny Folsom 4</li>
        <li>Notes</li>
      </ul>
    </div>
  )
}

export default ProfileCard
