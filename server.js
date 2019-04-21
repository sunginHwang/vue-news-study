const Vue = require('vue')
const server = require('express')()
const vueRenderer = require('vue-server-renderer')

server.get('*', (req, res) => {
    const renderer = require('vue-server-renderer').createRenderer({
        template: require('fs').readFileSync('./public/index.html', 'utf-8')
    });

    console.log(renderer);
    renderer.renderToString(app, (err, html) => {

        if (err) {
            res.status(500).end('Internal Server Error')
            return
        }
        res.end(`
      <!DOCTYPE html>
      <html lang="en">
        <head><title>Hello</title></head>
        <body>${html}</body>
      </html>
    `)
    })
})

server.listen(8080)


const createRenderer =  bundle => {
    // https://github.com/isaacs/node-lru-cache#options
    return vueRenderer.createBundleRenderer(bundle, {
        cache: lru({
            max: 1000,
            maxAge: 1000 * 60 * 15
        })
    })
}
