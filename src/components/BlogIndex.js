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

  const blogData = data.allMarkdownRemark.edges

  return blogData.length > 0 ? (
    <div className="container">
      <h1>Blog</h1>
      <div>
        {data.allMarkdownRemark.edges.map(blog => {
          return (
            <div>
              <h1>{blog.node.frontmatter.title}</h1>
            </div>
          )
        })}
      </div>
    </div>
  ) : (
    <div className="container">
      <h1>Blog</h1>
      <p>Hello There are no blogs to be found here my G</p>
    </div>
  )
}

export default BlogIndex
