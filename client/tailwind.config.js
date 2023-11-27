/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                'max-md': {'max': '768px'},
                'max-lg': {'max': '1024px'},
                'lg-2': '1100px',
                'max-lg-2':{'max':'1100px'},
                'max-sm': {'max': '500px'}
            },
            gridTemplateColumns: {
                '1/5': '1fr 5fr'
            }
        },
    },
    plugins: [],
}