import React from "react"
import { useStaticQuery } from "gatsby"
import "./skills.scss"

const Skills = () => {
  const graphData = useStaticQuery(graphql`
    query techQuery {
      site {
        siteMetadata {
          technologies
        }
      }
    }
  `)

  const tech = graphData.site.siteMetadata.technologies

  return (
    <div>
      <h3>Technologies I have experience with:</h3>
      <ul className="skill-grid">
        {tech.map(item => (
          <span className="skill-item">
            <span
              style={{
                display: "inline-block",
                width: "10px",
                height: "10px",
                backgroundColor: "#fe5555",
                borderRadius: "50px",
                marginRight: "10px",
              }}
            ></span>
            <li>{item}</li>
          </span>
        ))}
      </ul>
    </div>
  )
}

export default Skills
