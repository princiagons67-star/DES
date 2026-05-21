tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Manrope', 'sans-serif'],
            },
            colors: {
                mulberry: {
                    DEFAULT: '#576341',
                    light: '#a8b58d',
                    dark: '#3c4727'
                },
                silkgold: {
                    DEFAULT: '#d4af37',
                    light: '#ffe088',
                    dark: '#aa8b2c'
                },
                cream: '#f9fafb',
                earthy: '#45483e',
                surface: '#ffffff'
            },
            boxShadow: {
                'soft': '0 4px 20px rgba(0, 0, 0, 0.03)',
                'card': '0 10px 40px rgba(87, 99, 65, 0.08)'
            }
        }
    }
}
