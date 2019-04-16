class CachedImage {
  constructor(src, alt) {
    this.src = src;
    this.alt = alt;
  }
}

export class BrowserImages {
  constructor() {
    this.cachedImages = [];
  }

  getCachedImage(src) {
    return (this.cachedImages.find(image => image.src === src));
  }

  cacheImage(src, alt) {
    let cachedImage = this.getCachedImage(src);
    if (!cachedImage) {
      cachedImage = new CachedImage(src, alt);
      this.cachedImages.push(cachedImage);
    }
    return cachedImage;
  }

  listImages() {
    return this.cachedImages;
  }
}