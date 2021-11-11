module.exports = {
  prefix:'tw-',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '620': '620px',
        '500': '500px',
        '850': '850px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
