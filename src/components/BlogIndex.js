import React from 'react'
import { useStaticQuery } from 'gatsby'

const BlogIndex = () => {
  const data = useStaticQuery(graphql`
    query BlogIndexQuery {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      ) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
            }
          }
        }
      }
    }
  `)

  return (
    <div className="container">
      <h1>Blog</h1>
      <div>
        {data.allMarkdownRemark.edges.map(item => (
          <h1>{item.node.frontmatter.title}</h1>
        ))}
      </div>
    </div>
  )
}

export default BlogIndex
