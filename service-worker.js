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
    "revision": "7fec08ab7810ddc79440e05da85c84c9"
  },
  {
    "url": "assets/css/0.styles.f88a1ba1.css",
    "revision": "2373def24bae1f469944a74430b3a023"
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
    "url": "assets/js/6.54015bcb.js",
    "revision": "d5055b4a598573edfc2388474392d7eb"
  },
  {
    "url": "assets/js/7.4450043f.js",
    "revision": "74693f31ac8d4b94e2acd8aa45b799c1"
  },
  {
    "url": "assets/js/app.f261cb00.js",
    "revision": "de0de707d435c4f6f29dcf220e2f24cd"
  },
  {
    "url": "index.html",
    "revision": "9c2b79e461ce0a38287e5c9d46f43188"
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
