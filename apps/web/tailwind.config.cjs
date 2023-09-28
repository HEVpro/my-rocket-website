/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            greenPrimary: {
                '50': '#edfff6',
                '100': '#d5ffec',
                '200': '#aeffda',
                '300': '#70ffbf',
                '400': '#2bfd9d',
                '500': '#00dc78',
                '600': '#00c064',
                '700': '#009652',
                '800': '#067544',
                '900': '#07603a',
                '950': '#00371f',
            },
            greenSecondary: {
                '50': '#f3faf9',
                '100': '#d5f2ea',
                '200': '#abe4d5',
                '300': '#79cfbc',
                '400': '#4eb3a1',
                '500': '#349887',
                '600': '#277a6d',
                '700': '#236259',
                '800': '#204f49',
                '900': '#1e433e',
                '950': '#0c2724',
            }
        },
    },
    plugins: [],
};
