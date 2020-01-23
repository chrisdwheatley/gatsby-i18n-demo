import React from "react"
import { Link } from "gatsby"

const LocaleChecker = ({ locale, locales, path }) => {
  if (typeof window !== 'undefined') {
    if (navigator.language !== locale.path) {
      const currentLocale = locales.filter(loc => loc.path === navigator.language)[0]

      if (currentLocale) {
        return <div style={{ color: 'white' }}>
          Switch to the <Link style={{ color: 'white' }} to={currentLocale.default ? '/' : `/${currentLocale.path}`}>{currentLocale.flag} {currentLocale.title}</Link> version?
        </div>
      }

      return null
    }

    return null
  }

  return null
}

export default LocaleChecker
