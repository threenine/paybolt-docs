import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'

const PayBolt = {
  colors: {
    orange: {
      DEFAULT: '#f97316',
      '50': '#fff7ed',
      '100': '#ffedd5',
      '200': '#fed7aa',
      '300': '#fdba74',
      '400': '#fb923c',
      '500': '#f97316',
      '600': '#ea580c',
      '700': '#c2410c',
      '800': '#9a3412',
      '900': '#7c2d12',
      '950': '#431407',
    },
    blue: {
      DEFAULT: '#0096FF',
      '50': '#B8E2FF',
      '100': '#A3D9FF',
      '200': '#7AC8FF',
      '300': '#52B8FF',
      '400': '#29A7FF',
      '500': '#0096FF',
      '600': '#0075C7',
      '700': '#00548F',
      '800': '#003357',
      '900': '#00121F',
    },
    red: {
      DEFAULT: '#FF6464',
      '50': '#FFFFFF',
      '100': '#FFFFFF',
      '200': '#FFDEDE',
      '300': '#FFB6B6',
      '400': '#FF8D8D',
      '500': '#FF6464',
      '600': '#FF2C2C',
      '700': '#F30000',
      '800': '#BB0000',
      '900': '#830000',
    },
  },
}

export default <Partial<Config>>{
  darkMode: 'class',
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '90rem',
      },
      colors: {
        primary: PayBolt.colors.orange,
        orange: PayBolt.colors.orange,
        blue: PayBolt.colors.blue,
        red: PayBolt.colors.red,
        slate: colors.slate,
      },
      fontFamily: {
        sans: ['Raleway', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@headlessui/tailwindcss'),
  ],
}
