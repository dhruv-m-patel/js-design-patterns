import { BrowserImages } from './flyweight';

describe('flyweight', () => {
  test('it should use flyweight objects to store data', () => {
    const browserImages = new BrowserImages();
    browserImages.cacheImage('https://www.ownerhooks.com/wp-content/uploads/2017/06/5174.gif', 'Hook');
    browserImages.cacheImage('http://purefishing.scene7.com/is/image/purefishing/Berkley_Fusion19_Treble_1x_Hooks_1_0_2017_alt1?wid=400&hei=400&fmt=jpeg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,6,0&iccEmbed=0&printRes=72', 'Hook');
    browserImages.cacheImage('https://www.ownerhooks.com/wp-content/uploads/2017/06/5174.gif', 'Hook');
    expect(browserImages.listImages().length).toEqual(2);
  });
});