// Caching mechanism
const redisCache = {};

// Network call
function databaseCall(url) {
  return `${url} - Response from network`;
}

// Proxy Call
const databaseProxy = new Proxy(databaseCall, {
  apply(target, thisArg, args) {
    const urlParam = args[0];
    if (redisCache[urlParam]) {
      return `Cached: ${redisCache[urlParam]}`;
    } else {
      const freshData = Reflect.apply(target, thisArg, args);
      redisCache[urlParam] = freshData;
      return freshData;
    }
  },
});

// usage
console.log(databaseProxy('dogPic.jpg')); // 'dogPic.jpg - Response from network'
console.log(databaseProxy('dogPic.jpg')); // 'dogPic.jpg - Response from cache'