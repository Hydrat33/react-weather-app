const tailwindcss = require('tailwindcss');

module.exports ={
    plugins: [
        tailwindcss("./tailwind.js"),
        require('autoprefixer')
    ],
    theme: {
        
        
        extend: {
            
            animation: {

                wiggle: 'wiggle 1s ease-in-out infinite',
            
            },
            keyframes: {

             wiggle: {
               '0%': { transform: 'rotate(-3deg)' },
               '100%': { transform: 'rotate(3deg)' },
             }

            }
        },

        },

    variants: {
        extend: {
            animation: ['balance'],
        }
    }
        
}
