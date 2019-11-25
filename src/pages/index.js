import React from "react"
import Card from "../components/Card"
import Navbar from "../components/NavBar"
import Profile from "../components/Profile"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import "./main.scss"

const Home = () => {
  return (
    <div>
      <div>
        <Card>
          <Navbar />
          <Profile />
          <Projects />
          <Skills />
        </Card>
        {/*<ProfileCard />
        <Projects />
        <Skills /> */}
      </div>
    </div>
  )
}
export default Home
