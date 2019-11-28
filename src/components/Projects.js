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
              url
              color
              number
            }
          }
        }
      }
    }
  `)

  const data = graphData.allMarkdownRemark.edges

  // ---------------------------------------
  // The values from graphql are returned
  // asynchronusly. So we sort the data
  // before passing it into our jsx
  //----------------------------------------
  const sortedData = data.sort((a, b) => {
    return a.node.frontmatter.number - b.node.frontmatter.number
  })

  // ---------------------------------------
  // JSX start
  //----------------------------------------
  return (
    <div className="project-section">
      <div className="container">
        <h2>Projects:</h2>
      </div>
      <div className="projects">
        {sortedData.map(item => (
          <a href={item.node.frontmatter.url}>
            <div
              className="cube"
              style={{ backgroundColor: `#${item.node.frontmatter.color}` }}
            >
              <div className="cube-header">{item.node.frontmatter.title}</div>
              <div className="bar"></div>
              <div className="cube-num">{item.node.frontmatter.number}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Projects
