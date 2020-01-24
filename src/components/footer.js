import React from "react"
import { Link } from "gatsby"

const Footer = ({ locale, locales, path }) => (
  <footer>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      {locales && Object.keys(locales).map(loc => (
        <Link key={loc} style={{ marginRight: '1rem', fontWeight: locales[loc].path === locale.path && 'bold' }} to={locales[loc].default ? '/' : `/${locales[loc].path}`}>{locales[loc].flag} {locales[loc].title}</Link>
      ))}
    </div>
  </footer>
)

export default Footer
