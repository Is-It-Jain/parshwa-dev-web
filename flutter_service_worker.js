'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "5f54689d5fd1ed164f0a9564d87a0524",
"version.json": "8d5bb685e6c60c13808bc153ffcee752",
"index.html": "22ef2fbd512b6637eb577df47a269ab2",
"/": "22ef2fbd512b6637eb577df47a269ab2",
"CNAME": "b554757f9161d3e88afb632f7a0c6706",
"main.dart.js": "143d0590e20067fd58860ecf81713380",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "42920ba2cc8d03ee2fad9aff13e08b56",
".qodo/history.sqlite": "1b0c148f0fd0f00e75e1ccd05d9bcbb9",
".git/ORIG_HEAD": "04040ca8605e77dc0ff3b9c31e3b682d",
".git/config": "69da2adfdd2559b71c55bef1196d0636",
".git/objects/61/be47a3f6ad6a412e984272b883c61e47d38ea8": "da667ca510ae6ef32469974c33b78161",
".git/objects/59/093f7b1005ba2bc6e585969da3a776d499cfcc": "9f9c366048fbad47aa0bcaac21a39c0a",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/03/7aee61a550c3a4392ee7f88fcc05bbd30a7033": "c101d9ce95abaa8bca9f31571bbe0182",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/69/bf976eaad769cfaa94c52a5f62b9351caa8e8f": "55eff9d55f01c54c586556c5db9997fd",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/0b/8eea933183dd3b8723f7680a8e967c9b55c3f7": "d58b05343c648caca974497901295958",
".git/objects/5a/2b060711bf2d0d44135ab1d1e7bc871fc785b3": "8e3403a2e4f4697dbd6c2218b4870157",
".git/objects/5a/ad9a5f80a8e4bedf8e64fdd74f6192359f2d50": "d5d6aabe6e28bf079157a9a94df4fb60",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/02/6eded5d5a3b119115a73ac345845d78d09725a": "5c27cc0588098eb9d8781a0b6122ae27",
".git/objects/b2/fadad1f8dd943b979a5323ad427be7e62cf1b8": "9b8191c2740e12d993ee21fbf1e2dc35",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d0/37e6ccd580e60dd3c21dbca15b02110428e507": "4a388c3c238dd463973b00c063f13c34",
".git/objects/be/0ea718a75256634171cc93cc94ec0344c67232": "8c9635d0942f50f7da2db92180304d13",
".git/objects/a2/0d09897d008e417a58bed33c9dc4fc6ac9f8b1": "28fbadb2a6316dc3e5e08e823043032d",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/aa8dd0cc176f50aea30f49e4017a19ac0f7af9": "c8bdb01c8bd577fb87128b2cfae63b0a",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/a5b016e3f582f47fc03f1cf5fd45303fcba31f": "2007fe0045bd43cfe33368f28919e23a",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/4afac2f5f153768869e46777250dbc04cddcae": "498a455864e446504c34ecd6a2d6a3a9",
".git/objects/fc/e0eb84eed02c95419573b73e98d456b1a1d309": "6077e5930bd9aa2a7317c88c22ee0baa",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/f4f4bfc50b9883b79117a20e32dd21a7bf9c8f": "a8aedef86badb7cedddacfb1bc5a92f4",
".git/objects/cf/db6a144e797a9e72d81aaf69b4ee11877c7d36": "8a4690a8b5ecd8955d410f634a4f6693",
".git/objects/c1/9932ff06c10d7e225596999bfb63ee77700c40": "f830c3746bccb408e09e9c4c5bba9247",
".git/objects/ec/9976904b98e065230484f4bb043ea14ad70001": "2414ffbcc6d66bd4cd01de16ffbd8edb",
".git/objects/4b/6e7513e575560c6d3efe5c1604049296f28ec5": "cc92104842bf8854efda76a3a10b236e",
".git/objects/4b/62605d1ba6b2035589f0ab6e8ffc595c53c962": "bf94c517f54ee7180aba861f17b118da",
".git/objects/45/784b06eb925f8c14973f83c2709d04eeb7462c": "ea4b15e45e33ba89559a1487f9605108",
".git/objects/74/bb35aebfddbbe3c568bb8e902c62d57cdd92ef": "b0774280d823eece7c522a716da2c548",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/2a/4a690990049a6eefbf5d8c8c96b95921d47a47": "13e252565143e07919769fc5fa7ef9ce",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/36/d465454a7ef1dfac5183f6286754fbf94238f2": "4a3bb03cf660c6c1b5252e56ca9315d9",
".git/objects/36/6dd9951d0b94bf33d78ddd4b8d1590cdd2b71a": "20eb8468f279f7ce5425d7fd32556a38",
".git/objects/5c/b9d7d09e5c575dacb7f65e79e01cc3e4fa0be9": "0afaa74469aa9638aa29a1359b26de9e",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/98/34f74d71c1a1310f27cd78850614a98a0382f0": "45577ddffc751e0db863988cfc030fac",
".git/objects/5e/c477ea0931fa8a2af0606abdd8f007f6f7a140": "9b6ab570626298922ddb78a40a3d73ca",
".git/objects/01/8a4d69c1c1948b28274551d1d4fc0b62ac6f3e": "b46acb21e732550540a89384d24545fa",
".git/objects/99/568e0a706b5c6d1e28242c3c508436c5f70492": "c810e44d680a2456c7b962a4580a751d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/b6/f994d75737a5752f757249704b90cf3f6bb00d": "000fc164f30c9cf65ca591b16ef2ee93",
".git/objects/d2/fcfe442cef91879072054f7faf890ab818ef13": "06359a2f16e3975c00741eadbbffbd6d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b0/35cc86768115771ae3651657d8f9ba54231f65": "c5aadd2f362e849229a2cb1791bebe33",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/c4/2571ef04555cd0fba415f1394c0245b163f6d9": "b7480becd4276725263e660e9ca59cba",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/f8/a5f3b6b32e6d3e5a368ec196b66e89ac1b9331": "49004758f2797c09af95164a292570bb",
".git/objects/e0/b10e7e70b3ab67d3b3f0058da7d8f75f115bb5": "8b00594175c75b6c22cec659688ac199",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/83/df6cf891081004c03503368cf5d44eca5c0645": "e90216503e21aa5dfe050e0707a556ee",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/71/90c81d8f87dd7e4a5d314c411e6ad377ee45f1": "1f80406b3bca4538d50e496a6726dae5",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8e91a77b37ba0916671f8483ea930da2",
".git/logs/refs/heads/master": "26b464ac8f7f71aabdbd5e69b7f90286",
".git/logs/refs/heads/main": "e9f2a3e73a12e322cfae422217e615fd",
".git/logs/refs/remotes/origin/master": "62f477b8cae8e69ebd6e639c83381f7d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "3279065ca7d4b3ea485c0f416e195110",
".git/refs/heads/main": "879cf495a6be2957e28cfc06e69b1f19",
".git/refs/remotes/origin/master": "3279065ca7d4b3ea485c0f416e195110",
".git/index": "0c0dc869e963ab766c133d9366cf73f9",
".git/COMMIT_EDITMSG": "8115067d36963310527e9c2c794ac758",
".git/FETCH_HEAD": "081d8b2a8d6020fa867e30f6db81040f",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "93cf6bd1507bb01bdf7b12b09ca604b6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "56095f7aad4ad584fc070358eb8b2cb8",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
