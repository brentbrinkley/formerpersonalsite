import React from "react"
import ProfileCard from "../components/ProfileCard"
import SocialLinks from "../components/SocialLinks"
import Projects from "../components/Projects"
import "./main.scss"

const BlogIndex = () => {
  return (
    <div className="container">
      <ProfileCard />
      <SocialLinks />
      <Projects />
    </div>
  )
}
export default BlogIndex
