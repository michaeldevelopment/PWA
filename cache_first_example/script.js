const urlsToCache = ["styles.css", "script.js"];

self.addEventListener("install", (event) => {
  event.waitUntil(async () => 
  await caches.open("pwa-assets").then(cache => {
    // cache.add("styles.css");
    return console.log(cache.addAll(urlsToCache)) ;
  }))
})


