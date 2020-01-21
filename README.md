<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's i18n Demo
</h1>

This repo is a modified Gatsby default starter site to demonstrate one possible way of providing internationalised content from a content management system.

## 🚀 Quick start

Install the project dependencies with `yarn install` or `npm install`.

Start the Gatsby development server with `npx gatsby develop`.

## Overview

The requirement this demo is working towards is the ability to generate pages via Gatsby with localised data sourced from graphql queries.

This demo differentiates from other examples or plugins which generally retreive hardcoded strings from specific locale files which are coupled with the user facing application.

Here we're demonstrating a way to retrieve data from an outside source and dynamically generate content for each locale provided.

This is achieved by hooking into Gatsby's `createPages` API and generating multiple versions of the same page, each sourced with content from a specific locale and hosted on it's own path.

The locales are also dynamically defined from a separate source, this mimics potential functionality to offer an admin screen where users can define the locales they want to provide to users. A default locale is also defined, this'd be the content that lives on a path with no locale prefix, e.g. if English is defined as the default locale example.com would be in English, if German was defined as another locale but not the default example.com/de would be in German.

Once each locale is retreived the articles for each are fetched, in this repo the locale key is interpolated in the query, in reality we'd likely want to pass the locale in as a param.

`createPage` is then called to generate the page with the correct path, context and a custom template. As far as I could fathom it's not possible to use the `src/pages` directory method to provide simiar functionality due to not having graphql access within the `onCreatePages` method.

A simple locale toggle allows you to switch between locales, this could be extended to ensure users are redirected to the translated version of the current page they're on rather than the homepage. If required a component could be created to sniff the user's current locale and offer the ability to change if their locale is supported. This choice could be persisted once they'd made a selection.
