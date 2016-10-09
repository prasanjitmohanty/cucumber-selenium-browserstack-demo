Feature: Jewellery Maker Login for existing customers
    As a user 
    I want to Login to  Jewellery Maker Website using my credentials

    Scenario: Navigate to the Login Page
        Given I open the url "http://www.jewellerymaker.com/"
        Then  I expect that the title is "JewelleryMaker.com | Design & Make Your Own Jewellery"
        When  I click on Login Button
        Then  I expect that the title is "Login Information"

    Scenario: login with my credentials
        Given I open the url "http://www.jewellerymaker.com/"
        Then  I click on Login Button
        Then  I am in the Login Page
        Then  I enter email address "youremail@email.com" and password "password*"
        When  I click on Sign In Button
        Then  I expect My Account section available