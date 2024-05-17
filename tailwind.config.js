/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    },

    container: {
      center: true,
      padding: '2rem'
    },

    space: {
      1: '8px',
      2: '12px',
      3: '16px',
      4: '24px',
      5: '32px',
      6: '48px'
    },

    fontSize: {
      xs: '11px',
      sm: '12px',
      md: '14px',
      lg: '16px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '28px',
      '4xl': '32px',
      base: '16px'
    },

    boxShadow: {
      'sm-0': '0 0 17px -4px',
      'sm-2': '0 2px 12px -6px',
      'sm-3': '0 3px 20px -4px',
      'sm-4': '0 4px 18px -6px',
      'sm-5': '0 5px 4px 0',
      'sm-6': '0 6px 12px -4px',
      'sm-8': '0 8px 12px -4px',
      'sm-0-2': '0 2px 13px 0',
      'sm-0-4': '0 4px 12px 0',
      'sm-3-2': '3px 2px 4px 0',

      'md-5': '0 5px 31px 0',
      'md-6': '0 6px 18px -2px',
      'md-7': '0 7px 50px -4px',
      'md-8': '0 8px 9px 0',
      'md--6': '0 -6px 43px -2px'
    },

    borderWidth: {
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',

      DEFAULT: '0.5px'
    },

    blur: {
      xs: '2px',
      sm: '4px',
      md: '6px',
      lg: '8px',
      xl: '10px',
      '2xl': '12px'
    },

    boxShadowColor: {
      'gray-sm-50': '#393939E0',
      'gray-sm-100': '#32353A33',
      'gray-sm-200': '#3F3F3F52',
      'gray-sm-300': '#25232B99',
      'gray-sm-400': '#42424217',
      'gray-sm-500': '#00000014',
      'gray-sm-600': '#28282857',
      'gray-sm-700': '#00000033',
      'gray-sm-800': '#00000059',
      'gray-sm-900': '#484C5326',

      'gray-md-100': '#4949491F',
      'gray-md-200': '#2E2E2E14',
      'gray-md-300': '#4A4A4A4D',
      'gray-md-400': '#84848440',
      'gray-md-500': '#3838383D'
    },

    colors: {
      primary: {
        100: '#FEF3E9',
        200: '#FDE1C7',
        300: '#FBCEA5',
        400: '#F9B679',
        500: '#F8A457',
        600: '#F5851F',
        700: '#C46A19',
        800: '#7B4310',
        900: '#311B06',

        DEFAULT: '#F5851F'
      },

      red: {
        100: '#FFEBEB',
        200: '#FFD1D3',
        300: '#FFADB1',
        400: '#FF757B',
        500: '#FF474E',
        600: '#ED1C24',
        700: '#BA0007',
        800: '#870005',
        900: '#470003',

        DEFAULT: '#ED1C24'
      },

      yellow: {
        100: '#FFFBF0',
        200: '#FDF1C7',
        300: '#FBE59A',
        400: '#F9D579',
        500: '#F7D14C',
        600: '#F5C61F',
        700: '#C49E19',
        800: '#7B6310',
        900: '#3D3208',

        DEFAULT: '#F5C61F'
      },

      green: {
        100: '#F0FFF6',
        200: '#CDF7DE',
        300: '#A8F0C5',
        400: '#7AE5A5',
        500: '#3ED67B',
        600: '#00CA51',
        700: '#00A140',
        800: '#006B2B',
        900: '#003816',

        DEFAULT: '#00CA51'
      },

      neutral: {
        100: '#F2F3F5',
        200: '#E6E7EB',
        300: '#D5D7DE',
        400: '#9DA1B0',
        500: '#74798A',
        600: '#4F5466',
        700: '#4F5466',
        800: '#333642',
        900: '#202129',

        DEFAULT: '#4F5466'
      },

      white: '#FFFFFF',
      black: '#000000',

      'primary-gr-from': '#F4716D',
      'primary-gr-to': '#F8C054'
    }
  },
  extend: {
    borderRadius: {
      '3xl': '1.25rem',
      '4xl': '1.5rem'
    }
  },
  plugins: []
}
