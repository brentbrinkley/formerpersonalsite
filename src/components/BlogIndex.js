import React from 'react'
import { useStaticQuery, Link } from 'gatsby'
import './blogIndex.scss'

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

    return (
        <div className="blog">
            <div className="container">
                <h1 className="title">Blog</h1>
                {blogData.length < 0 ? (
                    <div>
                        {data.allMarkdownRemark.edges.map(blog => {
                            return (
                                <div>
                                    <Link to={blog.node.fields.slug}>
                                        <h1>{blog.node.frontmatter.title}</h1>
                                    </Link>
                                    <p>{blog.node.frontmatter.description}</p>
                                </div>
                            )
                        })}
                    </div>
                ) : (
                    <p>
                        Your princess is in another cast-... Sorry there are no
                        musings to be found here. I'm still renovating the
                        place. Pardon my dust.
                    </p>
                )}
            </div>
        </div>
    )
}

export default BlogIndex
