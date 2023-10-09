/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          
      },
      colors:{
        blogBg:'#f9f8ff',
        redColor:'#fc4137',
        greenColor:'#009545',
        blackColor:'#1e1f31',
        valueBg:'#f2f3f7',
        fromToColor:'#112FF8',
        txnHashColor:'#AE9CFE',
        transactionColor:'#9C9BB3'

      }
    },
  },
  plugins: [],
}
