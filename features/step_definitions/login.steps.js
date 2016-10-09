
'use strict';

var webdriver = require('selenium-webdriver');
var expect = require('chai').expect;

module.exports = function () {
  //this.World = require('../support/world.js').World;

  this.Given(/^I open the url "([^"]*)"$/, function (url) {
    return this.driver.get(url);
  });

  this.Then(/^I expect that the title is "([^"]*)"$/, function (pageTitle) {

    return this.driver.getTitle().then(function (title) {
      expect(title).to.equal(pageTitle);
    });
  });

  this.When(/^I click on Login Button$/, function () {
      return this.driver.findElement({ id: 'aLogin' })
       .sendKeys(webdriver.Key.ENTER);      
  });     

  this.Then(/^I am in the Login Page$/, function () {    
    return this.driver.getTitle().then(function (title) {
      expect(title).to.equal('Login Information');
    });
  });

  this.Then(/^I enter email address "([^"]*)" and password "([^"]*)"$/, function (email, password) {
     this.driver.findElement({ id: 'ContentPlaceHolder1_txtRetCustEmail' })
      .sendKeys(email);
      return this.driver.findElement({ id: 'ContentPlaceHolder1_txtRetCustPassword' })
      .sendKeys(password);     
  });

  this.When(/^I click on Sign In Button$/, function () {
    return this.driver.findElement({ id: 'ContentPlaceHolder1_btnSignIn' })
       .sendKeys(webdriver.Key.ENTER); 
  });

  this.Then(/^I expect My Account section available$/, function () {
    return this.driver.getTitle().then(function (title) {
      expect(title).to.equal('Login Information');
    });
  });

};
