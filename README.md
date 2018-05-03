![vue and express logo](https://pvstorage.blob.core.windows.net/frontend/template/vue_express_banner.png)

# Getting started
Once the app is in `Running` state, click on the `Open App` button to check out the running app.
Also, click on `Console` to open or close the console window.

Use the list on the left to select which source file to edit. After you have made changes
to the source code, click on the `Restart` button to restart the application process.

There are two special entries on the left side list: `Package` and `Config`.
- Go to `Package` to install and uninstall NPM packages.
- Go to `Config` to define environment variables used by the running app.
All variables in `Config` are private even when the source
code is public. It is a good place to keep credentials such as API keys and
passwords.

# Files
- `index.js`: the "main" file of the app. Postverta runs the app with `node index.js`, which
then starts an HTTP server and listens to incoming requests.
- `static/index.html`: the HTML template including all site-wide metadata,
stylesheets, and scripts.
- `frontend/main.js`: the root component of Vue.js.
- `frontend/App.vue`: an example Vue component, in Vue's
[single component format](https://vuejs.org/v2/guide/single-file-components.html).
- `config/webpack.config.js`: the webpack configuration file for Vue.

# References
- [Vue Official Guide](https://vuejs.org/v2/guide/)
- [Express API Documentation](http://expressjs.com/en/api.html)
- [Webpack Documentation](https://webpack.js.org/concepts/)

# Feedback
For any feedback and bug report about this template, please file an issue at
[https://github.com/postverta/vue-template/issues](https://github.com/postverta/vue-template/issues).