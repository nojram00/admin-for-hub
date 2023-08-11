/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hub-admin-login' : 'linear-gradient(269deg, #fff 0%, #76C9F6 99.72%)',
        'login-btn-admin' : 'conic-gradient(from 180deg at 50% 50.00%, #309FD7 0deg, #3564B3 223.12500715255737deg)',
      },
      minHeight: {
        'header' : '12.5vh'
      },
      width :{
        'sidebar' : '20.5%',
        'sidebar-min' : '5%',
        'body' : '79.5%',
        'content':'95%'
      },
      backgroundColor : {
        'header-color' : '#BFE8FF',
        'dashboard-body' : '#E0F8FF'
      },
      screens: {
        'full' : '1024px',
        'mobile' : '320px',
      },
      margin: {
        'content': '7.5rem',
        'content-full' : '8.5rem'
      }

    },
  },
  plugins: [],
}
