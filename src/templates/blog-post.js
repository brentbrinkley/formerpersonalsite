import React from 'react'
import { graphql } from 'gatsby'

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
const BlogPostTemplate = ({ data }) => {
  const blog = data.markdownRemark
  console.log(blog)

  return (
    <div>
      <h1>{blog.frontmatter.date}</h1>
      <h3>{blog.frontmatter.date}</h3>
      <div dangerouslySetInnerHTML={{ __html: blog.html }}></div>
    </div>
  )
}

export default BlogPostTemplate
