'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "49083bfd10db224b21ac43900e62a212",
"version.json": "a648fc8aedcee84b7b6918d59075bf5e",
"index.html": "ee9aced35fcef3714402f39931f2ce4d",
"/": "ee9aced35fcef3714402f39931f2ce4d",
"main.dart.js": "4aad7ca25a3566545268787ad1379169",
"flutter.js": "baab3b6ad5e74e3f0d43d96274f5fba9",
"favicon.png": "1fa4777a56dfa3eaf07a090eb925543c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5f8555a924267e9f461bc108446b0a14",
"assets/images/adnk3.gif": "6e64b867cc45bb26edc37461e5ab0d86",
"assets/images/adnk2.gif": "98f031cdb69a863babd7771ed30c889b",
"assets/images/adnk1.gif": "6559b857f931510bb1c44ebff143bf50",
"assets/images/adnk5.gif": "57333b3ccad780dbbb07705ba01c2fbd",
"assets/images/adnk4.gif": "4bf90137627a7ad40bd4a818373546d6",
"assets/images/adnk6.gif": "ab20ab4dfe066a0fbe17197c08fdc391",
"assets/images/adnk7.gif": "801162c292a028af4a99dc402f3c84be",
"assets/images/adnk11.gif": "a61ea0da2ed95d8ff05e653a1e43e0bc",
"assets/images/icon512.png": "03963ea7118702e525e56869a2e29c9a",
"assets/images/adnk10.gif": "c8b1cab91def5fece3e9804c15220492",
"assets/images/adnk12.gif": "7b5bc62d8ec0957bcb755820642b06d0",
"assets/images/playstore.png": "04dc0fbae1c6ecbd0636cbfd6dfa74d2",
"assets/images/adnk9.gif": "fa954ff06200db220c485d04d53c63a5",
"assets/images/adnk8.gif": "ea9328b766fadb6acce1b0e53b105018",
"assets/AssetManifest.json": "3c8a9d1ec7eeb2930a452dbb0272fad1",
"assets/NOTICES": "3b3becd9a92c54639b0a9b6d73a86c7f",
"assets/FontManifest.json": "25323e55e70ca54ec0c0bbb3318ad2b8",
"assets/AssetManifest.bin.json": "63efe071fb3525393a72680b4ebee9fe",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "e00f2527ab5d79dc634258573cc2aa8d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "262525e2081311609d1fdab966c82bfc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "1e5d47a0bc1559e57273e04652e4751f",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "e7663081350582e26f3a36a755f504fd",
"assets/fonts/LobsterTwo-Regular.ttf": "fb8c29136b1ee99fe9dd45a6f8bcc9fd",
"assets/fonts/MaterialIcons-Regular.otf": "f653f3360790b14d38c2fd218abe5faf",
"assets/fonts/DancingScript-VariableFont_wght.ttf": "d3bebba97d549436fd6137d05d55ae33",
"assets/assets/ae.jpg": "d66b721630aff43b9123cae35a50d657",
"assets/assets/ad.png": "36b891e61e4cfc74ef3f90a5518a733c",
"assets/assets/aa.jpg": "b7002676eccac5fcfc5c631de7a44f71",
"assets/assets/ac.jpg": "67e760c04a397aaad1b627e5cf103e40",
"assets/assets/swirls2.svg": "5b91d6eef2a3c06a44b2ffe870538535",
"assets/assets/document.svg": "c0d272e3925fb4d1e2fa5828863da184",
"assets/assets/ab.jpg.webp": "7e90be9b1c666d7358441c3ae4132a2c",
"canvaskit/skwasm.js": "37fdb662bbaa915adeee8461576d69d7",
"canvaskit/skwasm_heavy.js": "f5c1413d222bc68856296fc97ac9fec0",
"canvaskit/skwasm.js.symbols": "021707ff64ac37e2c81850adca34e06f",
"canvaskit/canvaskit.js.symbols": "867d15540d09106a65fd18e4e83408b3",
"canvaskit/skwasm_heavy.js.symbols": "4c6915a46a80eab1f5d7d6d435c117ad",
"canvaskit/skwasm.wasm": "f821008e63e8b0223476af8e7b5e7df7",
"canvaskit/chromium/canvaskit.js.symbols": "56b8de673e91c6624dc16cd0f1f9a838",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "49702d666184f2ea01f8ed6f3cbc2111",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "5070b29729807b44a517ff8ecdb9e31c",
"canvaskit/skwasm_heavy.wasm": "1e8e650beee57cf019dc8aef15f587c4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
