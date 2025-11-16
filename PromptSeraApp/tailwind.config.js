/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html"
    ],
    theme: {
        container: {
            center: true,
            padding: "1rem"
        },

        extend: {
            colors: {
                primary: "#4b2bee",
                secondary: "#6a4df8",

                // Backgrounds
                "background-light": "#f9f8fc",
                "background-dark": "#0D0C13",

                // Grays
                gray: {
                    50: "#f8f9fc",
                    100: "#edeff5",
                    200: "#d9dce5",
                    300: "#b5b9c8",
                    400: "#8f95a8",
                    500: "#6e748a",
                    600: "#4d5267",
                    700: "#353a4d",
                    800: "#1e2233",
                    900: "#0f1120"
                }
            },

            fontFamily: {
                display: ["Inter", "sans-serif"],
                body: ["Inter", "sans-serif"]
            },

            fontSize: {
                xs: "0.75rem",
                sm: "0.875rem",
                base: "1rem",
                lg: "1.125rem",
                xl: "1.25rem",
                "2xl": "1.5rem",
                "3xl": "1.875rem",
                "4xl": "2.25rem",
                "5xl": "3rem",
                "6xl": "3.75rem",
                "7xl": "4.5rem"
            },

            borderRadius: {
                DEFAULT: "0.5rem",
                lg: "1rem",
                xl: "1.5rem",
                full: "9999px"
            },

            boxShadow: {
                "glow-primary":
                    "0 0 25px 8px rgba(75, 43, 238, 0.35), 0 0 8px 2px rgba(75, 43, 238, 0.3)",
                "glow-primary-lg":
                    "0 0 60px 15px rgba(75, 43, 238, 0.35), 0 0 20px 8px rgba(75, 43, 238, 0.3)"
            },

            spacing: {
                18: "4.5rem",
                22: "5.5rem",
                30: "7.5rem"
            }
        }
    },

    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
        require("@tailwindcss/container-queries")
    ]
};
