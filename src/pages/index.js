import React from 'react'
import Layout from '../components/Layout'
import Profile from '../components/Profile'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

const Home = () => {
  return (
    <Layout route="/blog" navTitle="start">
      <Profile />
      <Projects />
      <Skills />
    </Layout>
  )
}
export default Home
