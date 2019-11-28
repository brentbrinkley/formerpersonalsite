import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProfileImage from "./ProfileImage"
import SocialLinks from "./SocialLinks"
import "./profile.scss"

const Profile = () => {
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
          technologies
        }
      }
    }
  `)

  const data = graphData.site.siteMetadata

  // ---------------------------------------
  // JSX
  //----------------------------------------
  return (
    <div className="profile-section">
      <div className="profile container">
        <ProfileImage />
        <h1>{data.author}</h1>
        <h2>{data.jobTitle}</h2>
        <SocialLinks />
        <p>
          Hi I'm Brent I'm a Full Stack Web Developer. I'm currently revamping
          my personal site in real time because I'm a mad man. Check back
          periodically to see my work in progress.
        </p>
      </div>
    </div>
  )
}

export default Profile
