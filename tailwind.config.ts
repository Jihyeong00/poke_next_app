const config = {
    content: [
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            width: {
                '1200': '1200px'
            },
            colors: {
                'bg-orangeRed': '#FF9999',
                'bg-lightRed': '#FF4444',
                'bg-superRed': '#EB0000',
                'bg-darkRed': '#CD1039',
                'bg-deepDarkRed': '#AA0000',
                'bg-blue': '#448AFF',
                'bg-white': '#FFF',
                'bg-labelGray': '#e5e8eb'
            },
        }
    },
    plugins: []
};
export default config;
