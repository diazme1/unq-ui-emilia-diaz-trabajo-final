export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        hand: ['Kalam', 'cursive'],
      },
      colors: {
        ink: '#1e1e1e',
        paper: '#fffdf9',
        sketch: {
          green: '#2f9e44',
          greenBg: '#ebfbee',
          red: '#e03131',
          gray: '#adb5bd',
          grayBg: '#f1f3f5',
          blue: '#4263eb',
          blueBg: '#edf2ff',
        },
      },
    },
  },
  plugins: [],
}