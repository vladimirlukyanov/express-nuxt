import express from 'express'
import cors from 'cors'
import compression from 'compression'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import { errorHandler as queryErrorHandler } from 'querymen'
import { errorHandler as bodyErrorHandler } from 'bodymen'
import nuxtConfig from '../../../nuxt.config'
import { Nuxt, Builder } from 'nuxt'

export default (apiRoot, routes) => {
  const app = express()

  nuxtConfig.dev = !(process.env.NODE_ENV === 'production')
  const nuxt = new Nuxt(nuxtConfig)

  if (nuxtConfig.dev) {
    const builder = new Builder(nuxt)
    builder.build()
  }
  
  app.use(cors())
  app.use(compression())
  app.use(morgan('dev'))
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(apiRoot, routes)
  app.use(queryErrorHandler())
  app.use(bodyErrorHandler())
  app.use(nuxt.render)

  return app
}