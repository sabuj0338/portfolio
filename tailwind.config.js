module.exports = {
    content: ["./**/*.html"],
    theme: {
        extend: {},
    },
    plugins: [],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                'primary': '#6ef3a4',
                'background-light': '#2d2e32',
                'background': '#25262a',
                'white': '#ffffff',
                'purple': '#3f3cbb',
                'midnight': '#121063',
                'metal': '#565584',
                'tahiti': '#3ab7bf',
                'silver': '#ecebff',
                'bubble-gum': '#ff77e9',
                'bermuda': '#78dcca',
            },
            animation: {
                'spin-slow': 'spin 30s linear infinite',
            }
        },
        fontFamily: {
            'sans': ['Roboto Mono'],
            'roboto': ['Roboto Mono'],
        }
    },
}