import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Monserrat', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    100: "#F1F5F8",
                    200: "#DBC6E9",
                    500: "#56326E"
                },
                sky: {
                    300: "#77DAE9"
                }
            },
            backgroundImage: {
                'check': "url('../images/check.svg')",
                'info': "url('../images/info.svg')",
                'markr': "url('../images/markr.svg')"
            }
        }
    },

    plugins: [
        forms,
        require('flowbite/plugin')
    ],
};
