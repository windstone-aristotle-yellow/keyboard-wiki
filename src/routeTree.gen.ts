/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as ArticlesIndexImport } from './routes/articles/index'
import { Route as ArticlesSwitchesIndexImport } from './routes/articles/switches/index'
import { Route as ArticlesStabilizersIndexImport } from './routes/articles/stabilizers/index'
import { Route as ArticlesKitsIndexImport } from './routes/articles/kits/index'
import { Route as ArticlesKeycapsIndexImport } from './routes/articles/keycaps/index'
import { Route as ArticlesIntroIndexImport } from './routes/articles/intro/index'
import { Route as ArticlesSwitchesForceCurvesImport } from './routes/articles/switches/forceCurves'
import { Route as ArticlesKeycapsMaterialImport } from './routes/articles/keycaps/material'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ArticlesIndexRoute = ArticlesIndexImport.update({
  path: '/articles/',
  getParentRoute: () => rootRoute,
} as any)

const ArticlesSwitchesIndexRoute = ArticlesSwitchesIndexImport.update({
  path: '/articles/switches/',
  getParentRoute: () => rootRoute,
} as any)

const ArticlesStabilizersIndexRoute = ArticlesStabilizersIndexImport.update({
  path: '/articles/stabilizers/',
  getParentRoute: () => rootRoute,
} as any)

const ArticlesKitsIndexRoute = ArticlesKitsIndexImport.update({
  path: '/articles/kits/',
  getParentRoute: () => rootRoute,
} as any)

const ArticlesKeycapsIndexRoute = ArticlesKeycapsIndexImport.update({
  path: '/articles/keycaps/',
  getParentRoute: () => rootRoute,
} as any)

const ArticlesIntroIndexRoute = ArticlesIntroIndexImport.update({
  path: '/articles/intro/',
  getParentRoute: () => rootRoute,
} as any)

const ArticlesSwitchesForceCurvesRoute =
  ArticlesSwitchesForceCurvesImport.update({
    path: '/articles/switches/forceCurves',
    getParentRoute: () => rootRoute,
  } as any)

const ArticlesKeycapsMaterialRoute = ArticlesKeycapsMaterialImport.update({
  path: '/articles/keycaps/material',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/articles/': {
      preLoaderRoute: typeof ArticlesIndexImport
      parentRoute: typeof rootRoute
    }
    '/articles/keycaps/material': {
      preLoaderRoute: typeof ArticlesKeycapsMaterialImport
      parentRoute: typeof rootRoute
    }
    '/articles/switches/forceCurves': {
      preLoaderRoute: typeof ArticlesSwitchesForceCurvesImport
      parentRoute: typeof rootRoute
    }
    '/articles/intro/': {
      preLoaderRoute: typeof ArticlesIntroIndexImport
      parentRoute: typeof rootRoute
    }
    '/articles/keycaps/': {
      preLoaderRoute: typeof ArticlesKeycapsIndexImport
      parentRoute: typeof rootRoute
    }
    '/articles/kits/': {
      preLoaderRoute: typeof ArticlesKitsIndexImport
      parentRoute: typeof rootRoute
    }
    '/articles/stabilizers/': {
      preLoaderRoute: typeof ArticlesStabilizersIndexImport
      parentRoute: typeof rootRoute
    }
    '/articles/switches/': {
      preLoaderRoute: typeof ArticlesSwitchesIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  ArticlesIndexRoute,
  ArticlesKeycapsMaterialRoute,
  ArticlesSwitchesForceCurvesRoute,
  ArticlesIntroIndexRoute,
  ArticlesKeycapsIndexRoute,
  ArticlesKitsIndexRoute,
  ArticlesStabilizersIndexRoute,
  ArticlesSwitchesIndexRoute,
])

/* prettier-ignore-end */
