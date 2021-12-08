const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const context = await browser.createIncognitoBrowserContext();
  const page = await context.newPage();

  await page.goto('https://instagram.com/kiewic');

  // console.log(await page.evaluate(() => {
    // return [...document.querySelectorAll('main a')].filter((x) => x.innerText == 'REELS').length;
    // //return [...document.querySelectorAll('main a')].filter((x) => x.innerText == 'REELS')[0].dispatchEvent(new MouseEvent('click', { view: window, bubbles: true, cancelable: true}));
  // }));

  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();