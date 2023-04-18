/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.vue",
        "./resources/**/*.js",
    ],
    theme: {
        extend: {
            colors: {
                vin_rouge: "#460723",
                vin_blanc: "#C8BB86",
                bg_rose: "#F0EBEB",
                bg_fonce: "#2D2D2D",
                bg_gris: "#D9D9D9",
            },
        },
    },
    plugins: [],
};
