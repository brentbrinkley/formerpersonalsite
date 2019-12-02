import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ProfileImage from './ProfileImage'
import SocialLinks from './SocialLinks'
import './profile.scss'

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
          Hi I'm Brent I'm a Full Stack Web Developer and designer in Raleigh
          North Carolina. When I'm not coding I'm either making music or chasing
          down hard to find retro items.
        </p>
        <p style={{ color: '#fe5555' }}>
          This site is currently under construction so expect rough edges while
          I bend it to my will.
        </p>
      </div>
    </div>
  )
}

export default Profile
