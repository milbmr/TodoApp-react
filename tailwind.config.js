/* eslint-disable */
const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */

const backfaceVisibility = plugin(function ({ addUtilities }) {
    addUtilities({
        ".backface-visible": {
            "backface-visibility": "visible",
        },
        ".backface-hidden": {
            "backface-visibility": "hidden",
        },
    });
});

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                shake: "shake 1s ease-in-out infinite",
                flip: "flip .5s ease-in-out",
            },
            keyframes: {
                shake: {
                    "0%, 100%": {
                        transform: "translateY(-10%)",
                        "animation-timing-function":
                            "cubic-bezier(0.8, 0, 1, 1)",
                    },
                    "50%": {
                        transform: "translateY(0)",
                        "animation-timing-function":
                            "cubic-bezier(0, 0, 0.2, 1)",
                    },
                },
                flip: {
                    from: {
                        transform:
                            "perspective(400px) rotate3d(1, 0, 0, 90deg)",
                        "animation-timing-function": "ease-in",
                        opacity: "0",
                    },

                    "40%": {
                        transform:
                            "perspective(400px) rotate3d(1, 0, 0, -20deg)",
                        "animation-timing-function": "ease-in",
                    },

                    "60%": {
                        transform:
                            "perspective(400px) rotate3d(1, 0, 0, 10deg)",
                        opacity: "1",
                    },

                    "80%": {
                        transform:
                            "perspective(400px) rotate3d(1, 0, 0, -5deg)",
                    },

                    to: {
                        transform: "perspective(400px)",
                    },
                },
            },
        },
    },
    plugins: [backfaceVisibility],
};
