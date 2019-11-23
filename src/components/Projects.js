import React from "react"
import { useStaticQuery } from "gatsby"

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
    <div>
      <h2>Projects:</h2>
      <p>Coming Soon</p>
      {/*}   {data.map(item => (
        <div>
          <h3>{item.node.frontmatter.title}</h3>
          <p>{item.node.frontmatter.description}</p>
          <a href={item.node.frontmatter.Project_Url}>New Kind's Site</a>
        </div>
      ))}{*/}
    </div>
  )
}

export default Projects
