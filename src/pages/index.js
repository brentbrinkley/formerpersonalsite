import React from "react"
import NavBar from "../components/NavBar"
import ProfileCard from "../components/ProfileCard"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import "./main.scss"

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <ProfileCard />
        <Projects />
        <Skills />
      </div>
    </div>
  )
}
export default Home
