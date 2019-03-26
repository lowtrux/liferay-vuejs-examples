module.exports = {
    'default e2e tests': browser => {
        browser
            .url(process.env.VUE_DEV_SERVER_URL)
            .waitForElementVisible('#todoApp', 5000)
            //.assert.elementPresent('.hello')
            .assert.containsText('.v-toolbar__title', 'To Do App')
            .assert.elementCount('.v-card', 1)
            .assert.elementCount('.v-toolbar', 1)
            .assert.elementCount('input', 1)
            .assert.elementCount('.v-list__tile', 4)
            .assert.containsText('.v-list__tile .v-list__tile__title', 'Learn Vue') // can only check the first <li> element
            .end()
    }
};
