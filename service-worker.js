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
    "revision": "5bf1eb0bc7aadeb5b1fc738d88b542d9"
  },
  {
    "url": "assets/css/0.styles.9b74b270.css",
    "revision": "fe699ef9611a4e44d170ee4a8a6398fe"
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
    "url": "assets/js/6.3e9f8505.js",
    "revision": "5e3eddf05d67341e91406a36a967922b"
  },
  {
    "url": "assets/js/7.4450043f.js",
    "revision": "74693f31ac8d4b94e2acd8aa45b799c1"
  },
  {
    "url": "assets/js/app.d39e63a0.js",
    "revision": "168e9d22e81f404d39f0e206010bc898"
  },
  {
    "url": "index.html",
    "revision": "ead9f36f6f29461d0443ee63f0225f9f"
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
