import React from "react"
import { useStaticQuery } from "gatsby"
import "./projects.scss"

const Projects = () => {
  const graphData = useStaticQuery(graphql`
    query ProjectQuery {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "project" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              description
              Project_Url
            }
          }
        }
      }
    }
  `)

  const data = graphData.allMarkdownRemark.edges

  return (
    <div className="projects">
      <div className="container">
        <h2>Projects:</h2>
        <div className="cube">
          <div className="cube-header">New Kind</div>
          <div className="cube-num">01</div>
        </div>
        {/*}   {data.map(item => (
      <div>
        <h3>{item.node.frontmatter.title}</h3>
        <p>{item.node.frontmatter.description}</p>
        <a href={item.node.frontmatter.Project_Url}>New Kind's Site</a>
      </div>
    ))}{*/}
      </div>
    </div>
  )
}

export default Projects
