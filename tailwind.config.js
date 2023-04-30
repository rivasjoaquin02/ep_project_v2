/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                custom: "-5px 0px 80px 2px rgb(132, 0, 255), 5px 0px 80px 2px rgb(173, 204, 0)",
            },
            colors: {
                bg: "#030711",
                primary: "#8400ff80",
                secundary: "#adcc0080",
                terciary: "#e5e7eb",
                cuaterciary: "#9ca3af",
            },
        },
    },
    plugins: [],
};
