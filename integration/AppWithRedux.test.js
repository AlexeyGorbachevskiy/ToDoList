describe('AppWithRedux', () => {
        it('base example', async () => {
            await page.goto('http://localhost:6006/iframe.html?id=appwithredux-component--app-with-redux-base-example&viewMode=story');
            const image = await page.screenshot();
            expect(image).toMatchImageSnapshot();
        })
    }
)