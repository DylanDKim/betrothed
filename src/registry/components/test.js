const { parser } = require('html-metadata-parser');

// HTML Metadata Parser test

parser(
  'https://www.bestbuy.com/site/apple-12-9-inch-ipad-pro-latest-model-with-wi-fi-128gb-space-gray/4263701.p?skuId=4263701'
).then((result) => {
  console.log(JSON.stringify(result, null, 3));
});
