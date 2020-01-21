import React from "react"

const Article = ({ pageContext }) => {
  const { article } = pageContext
  return (
    <h1>{article.title}</h1>
  )
}

export default Article
