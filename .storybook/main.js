module.exports = {
    "stories": [
        "../src/**/*.stories.tsx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-actions",
        "@storybook/preset-create-react-app",
        {
            name: '@storybook/addon-storysource',
            options: {
                rule: {
                    test: [/\.stories\.tsx?$/],
                },
                loaderOptions: {
                    prettierConfig: {
                        printWidth: 80,
                        singleQuote: false,
                        options: {parser: 'typescript'}
                    }
                }
            }
        }
    ],
}