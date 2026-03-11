const {join} = require('path');

/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = {
  // This tells Puppeteer to keep the browser inside your project folder
  cacheDirectory: join(__dirname, '.cache', 'puppeteer'),
};