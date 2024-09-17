/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            colors: {
                blå800: '#1C586E',     
                blåtekst: '#062A37',   
                rødorange: '#FB8984',
                mørkerød: '#A82D28',
                mørkerødtekst: '#550805',
                lyseblå: '#DCF3F9',
            },

            fontFamily: {
                poppins: ['Poppins', 'sans-serif'], // Definerer Poppins fonten
              },
              fontWeight: {
                regular: '400', // Til Poppins Regular
                bold: '700',    // Til Poppins Bold
              }
        },
	},
	plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
}
