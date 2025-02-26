// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
const fs = require('fs')


describe('test1', function() {
  this.timeout(30000)
  let driver
  let vars
  if (!fs.existsSync('./screenshots')) {
    fs.mkdirSync('./screenshots');
  }
  
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('test1', async function() {
    await driver.get("http://localhost:8000/")
    await driver.manage().window().setRect(1536, 788)
    await driver.findElement(By.id("num1")).click()
    await driver.findElement(By.id("num1")).sendKeys("2")
    await driver.findElement(By.id("num2")).sendKeys("2")
    await driver.findElement(By.css("button:nth-child(1)")).click()
    await driver.findElement(By.css(".wrapper")).click()
    await driver.findElement(By.css("button:nth-child(2)")).click()
    await driver.findElement(By.id("num1")).click()
    await driver.findElement(By.id("num1")).sendKeys("d")
    await driver.findElement(By.id("num2")).click()
    await driver.findElement(By.id("num2")).sendKeys("2")
    await driver.findElement(By.css("button:nth-child(1)")).click()
    await driver.findElement(By.css("button:nth-child(2)")).click()
    await driver.findElement(By.id("num2")).click()
    await driver.findElement(By.id("num2")).sendKeys("2")
    await driver.findElement(By.css("button:nth-child(1)")).click()
    await driver.findElement(By.id("num1")).click()
    await driver.findElement(By.id("num1")).sendKeys("22")
    await driver.findElement(By.css(".wrapper")).click()
    await driver.findElement(By.css("button:nth-child(1)")).click()
    await driver.findElement(By.css("button:nth-child(2)")).click()
    await driver.findElement(By.css("body")).click()
  })
})
