/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "17793b60a5a929076d79e18fc0fa89d4"
  },
  {
    "url": "assets/css/0.styles.998088de.css",
    "revision": "d3f660d7a16aac73b1c3a92ac7c744e4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.32fe826e.js",
    "revision": "0c15fda430973a7e53d79f1b9f719e75"
  },
  {
    "url": "assets/js/3.0907f29d.js",
    "revision": "a176ca16f027076aea957e28c2ddc511"
  },
  {
    "url": "assets/js/4.4c897eb2.js",
    "revision": "5c864042557620f5ee4030ad89b6bb52"
  },
  {
    "url": "assets/js/5.b5df6c40.js",
    "revision": "8a4ac6f716e7c03f896325cbfdf19144"
  },
  {
    "url": "assets/js/6.2c045157.js",
    "revision": "7443d894641f287346c9ab576bcfc0be"
  },
  {
    "url": "assets/js/7.4450043f.js",
    "revision": "74693f31ac8d4b94e2acd8aa45b799c1"
  },
  {
    "url": "assets/js/app.fbd9ef74.js",
    "revision": "a32c2d3d4d316d43819856347c282d62"
  },
  {
    "url": "index.html",
    "revision": "2704aabf912006e71e6e1b2a9baf22bd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
