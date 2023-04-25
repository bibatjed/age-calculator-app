/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "Georgia"],
      },
      colors: {
        "c-purple": "hsl(259, 100%, 65%)",
        "c-light-red": "hsl(0, 100%, 67%)",
        "c-white": "hsl(0, 0%, 100%)",
        "c-off-white": "hsl(0, 0%, 94%)",
        "c-light-grey": "hsl(0, 0%, 86%)",
        "c-smokey-grey": "hsl(0, 1%, 44%)",
        "c-off-black": "hsl(0, 0%, 8%)",
      },
    },
  },
  plugins: [],
};
