import suid from '@suid/vite-plugin'
import { defineConfig, loadEnv } from 'vite'
// https://vite-pwa-org.netlify.app/guide
// import { VitePWA } from 'vike-pwa'
import solid from 'vite-plugin-solid'
import ssr from 'vike/plugin'

import getGlobalConfig from './config.default.mts'
import getMongo from './utils/middlewares/db.mts'

export default defineConfig(async ({ mode }) => {
  // Add ME_CONFIG_ env vars to process.env
  Object.assign(process.env, loadEnv(mode, process.cwd(), 'ME_CONFIG_'))

  global.config = getGlobalConfig()
  global.mongo = getMongo()
  await global.mongo.connect(global.config)

  return {
    cacheDir: '.vite',
    build: {
      target: 'esnext',
      outDir: '.vite/dist'
    },
    envPrefix: 'ME_CONFIG_',
    plugins: [
      // VitePWA({ registerType: 'autoUpdate' }),
      suid(),
      solid({ ssr: true }),  // TODO https://github.com/swordev/suid/issues/139
      ssr()
    ]
  }
})