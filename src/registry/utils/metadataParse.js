const { parser } = require('html-metadata-parser');

const metadataParser = (url, callback) => {
  parser(url).then((result) => {
    console.log(JSON.stringify(result, null, 3));
    callback(result);
  });
};

export default metadataParser;
