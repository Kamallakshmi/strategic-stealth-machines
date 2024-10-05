import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		keyframes: {
  			'border-spin': {
  				'100%': {
  					transform: 'rotate(-360deg)'
  				}
  			},
  			drop: {
  				'0%': {
  					transform: 'translateY(-100vh)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			}
  		},
  		animation: {
  			'gradient-bg': 'gradient 15s ease infinite',
  			'gradient-border': 'gradient-border 3s ease infinite',
  			'border-spin': 'border-spin 7s linear infinite',
  			slideInLeft: 'slideInLeft 1s ease-out forwards',
  			drop: 'drop 1s ease-out forwards'
  		},
  		colors: {
  			scintillatingNavy: '#355070',
  			navy: '#001f3f',
  			yellow: '#FFD700',
  			deepBlue: {
  				'800': '#0a1635',
  				'900': '#070d24'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  variants: {
    extend: {
      textColor: ["hover"], // Enable hover for text color
      backgroundColor: ["hover"], // Enable hover for background color if needed
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
