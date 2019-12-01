import React from 'react'
import { Link } from 'gatsby'
import './blogButton.scss'

const BlogButton = () => (
  <div className="blog-button">
    <Link to="/blog">Musings</Link>
  </div>
)

export default BlogButton
