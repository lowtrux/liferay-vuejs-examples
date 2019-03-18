
module.exports = {
    // Change build path to make the liferay-npm-bundler find it
    outputDir: 'build/resources/main/META-INF/resources/lib',
    filenameHashing: false,
    devServer: {
        port: 8088
    },
    pages: {
        index: {
            // entry for the page
            entry: 'dev/index.es.js',
            // the source template
            template: 'dev/index.html',
            // output as dist/index.html
            filename: 'index.html',
            // when using title option,
            // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Todo Test Page',
            // chunks to include on this page, by default includes
            // extracted common chunks and vendor chunks.
            chunks: ['index']
        }
    }
};
