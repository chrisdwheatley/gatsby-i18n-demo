exports.createPages = async function ({ actions, graphql }) {
  const { createPage } = actions

  const { data: localeData } = await graphql(`
    query MyQuery {
      site {
        siteMetadata {
          locales {
            default
            path
            locale
          }
        }
      }
    }
  `)

  const locales = localeData.site.siteMetadata.locales

  Object.keys(locales).map(async lang => {
    const { data: articleData } = await graphql(`
    query MyQuery {
      site {
        siteMetadata {
          ${locales[lang].path} {
            articles {
              id,
              slug,
              title
            }
          }
        }
      }
    }
  `)

    const articles = articleData.site.siteMetadata[locales[lang].path].articles

    Object.keys(articles).map(article => {
      const articlePath = `${articles[article].id}-${articles[article].slug}`

      createPage({
        component: require.resolve(`./src/templates/article.js`),
        path: locales[lang].default
          ? articlePath
          : `${locales[lang].path}/${articlePath}`,
        context: {
          locale: locales[lang],
          article: articles[article]
        },
      })
    })

    return null
  })

}