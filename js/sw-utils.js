// save in cache dynamic
const updateCacheDynamic = (dynamicCache, req, res) => {
   if (res.ok) {
      return caches.open(dynamicCache).then((cache) => {
         cache.put(req, res.clone());
         return res.clone();
      });
   } else {
       console.error('recurso no encontrado');
      return res;
   }
};
