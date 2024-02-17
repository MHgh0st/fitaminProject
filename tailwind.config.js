/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        container: {
            center: true,
            // padding: '2rem',
        },
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui:{
        themes:[
            {
                fitaminThemeDark:{
                    "primary": "#3E4046",
                    "secondary": "#0DBFA7",
                    "neutral": "#F3EAE5",
                    "accent": "#666973",
                },
                fitaminThemeLight:{
                    "primary": "#F3EAE5",
                    "secondary": "#0DBFA7",
                    "neutral": "#3E4046",
                    "accent": "#666973",
                }
            }
        ]
    }
}

