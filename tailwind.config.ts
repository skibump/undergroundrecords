import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			backgroundImage: {
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-card': 'var(--gradient-card)',
				'gradient-accent': 'var(--gradient-accent)',
				'gradient-neon': 'var(--gradient-neon)',
				'gradient-tech': 'var(--gradient-tech)',
				'gradient-reality': 'var(--gradient-reality)',
				'gradient-hologram': 'var(--gradient-hologram)',
				'gradient-dream': 'var(--gradient-dream)',
			},
			boxShadow: {
				'dramatic': 'var(--shadow-dramatic)',
				'glow': 'var(--shadow-glow)',
				'neon-glow': 'var(--shadow-neon-glow)',
				'tech': 'var(--shadow-tech)',
				'reality': 'var(--shadow-reality)',
				'hologram': 'var(--shadow-hologram)',
			},
			transitionTimingFunction: {
				'tech': 'var(--transition-tech)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						opacity: '0.4',
						transform: 'scale(1)'
					},
					'50%': { 
						opacity: '0.8',
						transform: 'scale(1.1)'
					}
				},
				'drift': {
					'0%': { transform: 'translateX(-50px) translateY(0px)' },
					'50%': { transform: 'translateX(50px) translateY(-30px)' },
					'100%': { transform: 'translateX(-50px) translateY(0px)' }
				},
				'matrix-rain': {
					'0%': { transform: 'translateY(-100vh)', opacity: '0' },
					'10%': { opacity: '1' },
					'90%': { opacity: '1' },
					'100%': { transform: 'translateY(100vh)', opacity: '0' }
				},
				'hologram-flicker': {
					'0%, 100%': { opacity: '1', filter: 'brightness(1)' },
					'50%': { opacity: '0.8', filter: 'brightness(1.2)' },
					'51%': { opacity: '0.9', filter: 'brightness(0.9)' }
				},
				'reality-pulse': {
					'0%, 100%': { 
						transform: 'scale(1)', 
						filter: 'hue-rotate(0deg)'
					},
					'50%': { 
						transform: 'scale(1.05)', 
						filter: 'hue-rotate(180deg)'
					}
				},
				'dream-shift': {
					'0%': { transform: 'perspective(1000px) rotateY(0deg)' },
					'50%': { transform: 'perspective(1000px) rotateY(5deg)' },
					'100%': { transform: 'perspective(1000px) rotateY(0deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'drift': 'drift 8s ease-in-out infinite',
				'matrix-rain': 'matrix-rain 3s linear infinite',
				'hologram-flicker': 'hologram-flicker 2s ease-in-out infinite',
				'reality-pulse': 'reality-pulse 4s ease-in-out infinite',
				'dream-shift': 'dream-shift 6s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
