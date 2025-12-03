/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          light: '#FFA726',
          DEFAULT: '#FF9800',
          dark: '#FF7043',
        },
        secondary: {
          light: '#FFE0B2',
          DEFAULT: '#FFB74D',
          dark: '#FF8F00',
        },
        accent: {
          light: '#FFCCBC',
          DEFAULT: '#FF7043',
          dark: '#E64A19',
        },
        text: {
          primary: '#212121',
          secondary: '#424242',
          light: '#757575',
        },
        success: {
          light: '#C8E6C9',
          DEFAULT: '#66BB6A',
          dark: '#388E3C',
        },
        warning: {
          light: '#FFF9C4',
          DEFAULT: '#FFEE58',
          dark: '#F57F17',
        },
        error: {
          light: '#FFCDD2',
          DEFAULT: '#EF5350',
          dark: '#D32F2F',
        },
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'medium': '0 8px 30px rgba(0, 0, 0, 0.1)',
        'strong': '0 10px 40px rgba(0, 0, 0, 0.2)',
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '24px',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #FFA726 0%, #FF7043 100%)',
      },
    },
  },
  plugins: [],
};
