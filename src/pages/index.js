import React from "react"
import NavBar from "../components/NavBar"
import ProfileCard from "../components/ProfileCard"
import Projects from "../components/Projects"
import "./main.scss"

const BlogIndex = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <ProfileCard />
        <Projects />
      </div>
    </div>
  )
}
export default BlogIndex
