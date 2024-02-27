const puppeteer = require('puppeteer');
var priceText;
function getData() {
    let date = new Date();
    let fullDate = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    return fullDate;
}
 
async function webScraper(url) {
    const browser = await puppeteer.launch({})
    const page = await browser.newPage()
 
    await page.goto(url)
    var product = await page.waitForSelector("#productTitle")
    var productText = await page.evaluate(product => product.textContent, product)
    var price = await page.waitForSelector(".a-price-whole")
    priceText = await page.evaluate(price => price.textContent, price)
    console.log("Date: " + getData() + "Product: " + productText + "Price: " + priceText)
    browser.close()
};
 
webScraper('https://www.amazon.in/Samsung-Storage-sAmoled-Purchased-Separately/dp/B09XJ3MBTL/ref=sr_1_2_sspa?crid=UEVLA59VCCM1&keywords=samsung%2Bmobile&qid=1675047206&sprefix=sa%2Caps%2C340&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1');



