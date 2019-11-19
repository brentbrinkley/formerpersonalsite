import React from "react"
import { Link, graphql } from "gatsby"

const BlogIndex = props => {
  return (
    <div>
      <p>
        Hi there my personal site is currently being redone in gatsbyJS and
        React. Check back often because I'll be updating it in real time. In the
        mean time you can find me here:
      </p>
      <p>
        Github: <a href="">somesite</a>
      </p>
      <p>
        Twitter: <a href="https://twitter.com/">somesite</a>
      </p>
    </div>
  )
}
// class BlogIndex extends React.Component {
//   render() {
//     const { data } = this.props
//     const siteTitle = data.site.siteMetadata.title
//     const posts = data.allMarkdownRemark.edges
//     const social = data.site.siteMetadata.social

//     console.log(this.props)

//   }
// }

export default BlogIndex

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//         social {
//           github
//           twitter
//         }
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             title
//             description
//           }
//         }
//       }
//     }
//   }
// `
