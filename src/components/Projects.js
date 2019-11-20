import React from "react"
import { useStaticQuery } from "gatsby"

const Projects = () => {
  const graphData = useStaticQuery(graphql`
    query ProjectQuery {
      allMarkdownRemark {
        group(field: frontmatter___Project_Url) {
          edges {
            node {
              id
              frontmatter {
                Project_Url
                description
                image
                title
              }
            }
          }
        }
      }
    }
  `)
  const projects = graphData.allMarkdownRemark.group.node

  console.log(projects)

  return (
    <div>
      <h3>Projects:</h3>
      <ul>
        <li>New Kind</li>
        <li>Raleigh Little Theater</li>
        <li>Johnny Folsom 4</li>
        <li>Notes</li>
      </ul>
    </div>
  )
}

export default Projects
