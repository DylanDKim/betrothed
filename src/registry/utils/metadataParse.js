const { parser } = require('html-metadata-parser');

// const metadataParser = (url, callback) => {
//   parser(url).then((result) => {
//     (JSON.stringify(result, null, 3));
//     callback(result);
//   });
// };

parser(
  'https://www.bestbuy.com/site/lenovo-ideapad-3-15-6-touch-screen-laptop-intel-core-i3-8gb-memory-256gb-ssd-almond/6461981.p?skuId=6461981'
).then((result) => {
  console.log(JSON.stringify(result, null, 3));
});

// export default metadataParser;
