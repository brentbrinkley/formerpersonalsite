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
                    Hi I'm Brent I'm a Software Engineer and Designer in Raleigh
                    North Carolina. I'm the creator and maintainer of FormKey &
                    Form an open source music language.
                </p>
            </div>
        </div>
    )
}

export default Profile
