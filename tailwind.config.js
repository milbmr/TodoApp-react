/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            keyframes: {
                shake: {
                    "0%": {
                        transform: "translateY(0)",
                    },
                    "50%": {
                        transform: "translateY(-10%)",
                    },
                    "100%": {
                        transform: "translateY(0)",
                    },
                },
            },
            aniamtion: {
                "shake-icon": "shake 1s ease-in-out infinite",
            },
        },
    },
    plugins: [],
};
