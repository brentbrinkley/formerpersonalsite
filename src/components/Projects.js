import React from "react"
import { useStaticQuery } from "gatsby"

const Projects = () => {
  const graphData = useStaticQuery(graphql`
    query ProjectQuery {
      allMarkdownRemark {
        nodes {
          frontmatter {
            Project_Url
            description
            image
            title
          }
        }
      }
    }
  `)
  const projects = graphData.allMarkdownRemark.nodes.frontmatter

  console.log(projects)

  return (
    <div>
      <h3>Projects:</h3>
      <p>Being Added Soon</p>
    </div>
  )
}

export default Projects
