const request = require('request');
const jsdom = require("jsdom");


request('https://zynh0722.github.io/seip2202-twiddler/', (err, res, body) => {
  if (err) { return console.log(err); }

  const {JSDOM} = jsdom;
  const dom = new JSDOM(body);
  const $ = (require('jquery'))(dom.window);

  console.log($('body').html());
});
