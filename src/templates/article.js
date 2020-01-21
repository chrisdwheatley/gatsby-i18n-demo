import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../components/header"

const Article = (props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { path, pageContext: { article, locale, locales } } = props

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} locale={locale} locales={locales} path={path} />
      <div style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}><h1>{article.title}</h1></div>
    </>
  )
}

export default Article
