import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"

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

  const { path, pageContext: { articles, locale, locales } } = props

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} locale={locale} locales={locales} path={path} />
      {Object.keys(articles).map(art => {
        const articlePath = `/${articles[art].id}-${articles[art].slug}`

        return (
          <div key={articlePath} style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
          }}>
            <Link key={articles[art].id} to={locale.default
              ? articlePath
              : `/${locale.path}${articlePath}`}>{articles[art].title}</Link></div>
        )
      })}
      <Footer locale={locale} locales={locales} path={path} />
    </>
  )
}

export default Article
