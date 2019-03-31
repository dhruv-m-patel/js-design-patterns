class CachedImage {
  constructor(src, alt) {
    this.src = src;
    this.alt = alt;
  }
}

class BrowserImages {
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
    this.cachedImages.forEach((image) => {
      console.log(`${image.src} - ${image.alt}`);
    })
  }
}

const browserImages = new BrowserImages();

const image1 = browserImages.cacheImage('https://www.ownerhooks.com/wp-content/uploads/2017/06/5174.gif', 'Hook');
const image2 = browserImages.cacheImage('http://purefishing.scene7.com/is/image/purefishing/Berkley_Fusion19_Treble_1x_Hooks_1_0_2017_alt1?wid=400&hei=400&fmt=jpeg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,6,0&iccEmbed=0&printRes=72', 'Hook');
const image3 = browserImages.cacheImage('https://www.ownerhooks.com/wp-content/uploads/2017/06/5174.gif', 'Hook');

browserImages.listImages();