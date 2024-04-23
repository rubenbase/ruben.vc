import type { Config } from 'tailwindcss'

import baseConfig from '@kitsaas-starter-pro/tailwind-config'

const config = {
  // We need to append the path to the UI package to the content array so that
  // those classes are included correctly.
  content: [...baseConfig.content, '../../packages/ui/src/**/*.{ts,tsx}'],
  presets: [baseConfig],
  theme: {},
} satisfies Config

export default config
