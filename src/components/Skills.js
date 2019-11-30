import React from 'react'
import { useStaticQuery } from 'gatsby'
import './skills.scss'

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
    <section className="skills-section">
      <div className="">
        <h3>Technologies I speak:</h3>
        <ul className="skill-grid">
          {tech.map(item => (
            <span className="skill-item">
              <span
                style={{
                  display: 'inline-block',
                  width: '10px',
                  height: '10px',
                  backgroundColor: item[1],
                  borderRadius: '50px',
                  marginRight: '10px',
                }}
              ></span>
              <li>{item[0]}</li>
            </span>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
