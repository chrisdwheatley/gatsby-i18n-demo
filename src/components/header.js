import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, locale, locales, path }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to={locale.default ? '/' : `/${locale.path}`}
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      {locales && Object.keys(locales).map(loc => (
        <Link key={loc} style={{ color: 'white', marginRight: '1rem', fontWeight: locales[loc].path === locale.path && 'bold' }} to={locales[loc].default ? '/' : `/${locales[loc].path}`}>{locales[loc].title}</Link>
      ))}
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
