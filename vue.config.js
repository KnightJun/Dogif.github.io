module.exports = {
    publicPath: "./",
    outputDir: 'docs',

    pages: {
        index: {
        entry: 'src/main.js',
        template: 'public/index.html',
        filename: 'index.html',
        title: 'Dogif - Few clicks to record and share animation',
        }
    }
}