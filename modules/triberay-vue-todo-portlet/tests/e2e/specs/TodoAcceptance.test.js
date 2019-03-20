module.exports = {
    'default e2e tests': browser => {
        browser
            .url(process.env.VUE_DEV_SERVER_URL)
            .waitForElementVisible('#app', 5000)
            //.assert.elementPresent('.hello')
            .assert.containsText('h1', 'My Todo App!')
            .assert.elementCount('input', 1)
            .assert.elementCount('li', 3)
            .assert.containsText('li', 'Learn Vue') // can only check the first <li> element
            .end()
    }
};
