const tailwindcss = require('tailwindcss');

module.exports ={
    plugins: [
        tailwindcss("./tailwind.js"),
        require('autoprefixer'),
       (process.env.NODE_ENV === 'production') && require('@fullhuman/postcss-purgecss')({
           content: [
               './src/**/*.js',
               './src/*.js',
               './public/index.html'
           ],
           defaultExtractor:content => content.match(/[A-Za-z0-9-_:/]+/g) || [] 
        })
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
