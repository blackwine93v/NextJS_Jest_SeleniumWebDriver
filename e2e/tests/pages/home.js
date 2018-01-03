const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const until = webdriver.until;

module.exports = function (driver) {
  const elements = {
    nameInput: By.css('.nameInput'),
    name: By.css('.name'),
  };
  return {
    url: 'http://localhost:3000/',
    elements: elements,

    navigate: function () {
      return driver.navigate().to(this.url);
    },
    enterName: function (value) {
      return driver.findElement(elements.nameInput).sendKeys(value);
    },
    getNameColor: function () {
      return driver.findElement(elements.name).getCssValue('color')
    },
    getName: function () {
      return driver.findElement(elements.name).getText()
    }
  };
};