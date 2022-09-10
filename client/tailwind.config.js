/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                balor: ["ass"],
            },

            colors: {
                color_01: '#fff',
                color_02: '#000',
                color_03: '#e5e7eb69',
                color_04: '#ffbf35',
                color_05_border: '#0000001c',
                color_06: '#ffffff54',
            },

            fontSize: {
                lo: '1px'
            },

            minHeight: {
                '1/2': '50px',
            },

            backgroundImage: {
                'banner': "url('../public/Images/banner.jpg')",
                'login': 'linear-gradient(45deg,rgba(0,69,130,.8) 0%,rgba(38,134,146,.8) 100%)',
            },

            boxShadow: {
                'input': "0 0 5px 1px #0000001c",
                'header': "1px 0 10px 1px #0000001c"
            },

            width: {
                '500': '500px'
            }
        },
    },
    plugins: [],
}
