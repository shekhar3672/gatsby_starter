const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/shekhar/Desktop/gatsby_starter/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/shekhar/Desktop/gatsby_starter/src/pages/about.js"))),
  "component---src-pages-blog-index-js": hot(preferDefault(require("/home/shekhar/Desktop/gatsby_starter/src/pages/blog/index.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/shekhar/Desktop/gatsby_starter/src/pages/index.js"))),
  "component---src-pages-privacy-js": hot(preferDefault(require("/home/shekhar/Desktop/gatsby_starter/src/pages/privacy.js"))),
  "component---src-pages-terms-js": hot(preferDefault(require("/home/shekhar/Desktop/gatsby_starter/src/pages/terms.js"))),
  "component---src-templates-blog-post-template-js": hot(preferDefault(require("/home/shekhar/Desktop/gatsby_starter/src/templates/blog-post-template.js")))
}

