// Caching mechanism
const redisCache = {};

// Network call
function databaseCall(url) {
  return `${url} - Response from network`;
}

// Proxy Call
export const databaseProxy = new Proxy(databaseCall, {
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